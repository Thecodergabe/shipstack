import { getUspsConfig } from "../config";
import { getLogger } from "../logger";
import { ShipstackError, ThrottlingError } from "../types/errors";
import { getUspsAccessToken } from "./auth/index";

/**
 * Agnostic Factory for configuring USPS Clients.
 * Handles base URL injection, OAuth2 token attachment, and 2026 throttle logic.
 * * @param configObj - The OpenAPI configuration object (Global or Instance).
 * @param moduleName - The USPS module (Labels, Rates, etc.) for logging.
 */
export async function configureUspsClient(configObj: any, moduleName: string) {
  const config = getUspsConfig();
  const log = getLogger();

  // 1. Set the Base URL dynamically from the user-provided config
  configObj.BASE = config.baseUrl || "https://apis.usps.com";

  // 2. Auth Module Bypass: We don't need a token to fetch a token
  if (moduleName.toLowerCase() === "auth") return;

  // 3. Token Management: Retrieve (or refresh) the Bearer token
  const token = await getUspsAccessToken();
  if (!token) {
    throw new ShipstackError(`[USPS] ${moduleName} failed: No access token.`, "usps");
  }
  configObj.TOKEN = token;

  // 4. Rate Limit (429) Interceptor
  // Ensure we only attach this once per config object
  if (configObj.INTERCEPTORS?.RESPONSE && !configObj._interceptorAttached) {
    configObj._interceptorAttached = true;
    
    configObj.INTERCEPTORS.RESPONSE.use(async (response: any) => {
      if (response.status === 429) {
        const retryAfter = response.headers.get("Retry-After") || "60";
        log.warn(`[USPS] Throttled on ${moduleName}. Retry in ${retryAfter}s`);
        throw new ThrottlingError(
          `USPS ${moduleName} rate limit exceeded.`,
          "usps",
          parseInt(retryAfter)
        );
      }
      return response;
    });
  }
}