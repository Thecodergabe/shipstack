import { requestUspsToken } from "./token";
import { getLogger } from "../../logger";
import { getCachedToken, setCachedToken } from "./tokenCache";
import { getUspsConfig } from "../../config";
import { ShipstackError } from "../../errors";

export async function getUspsAccessToken(): Promise<string> {
  const cached = getCachedToken();
  const log = getLogger();
  
  if (cached) return cached;

  // Pull from the agnostic config set by the user
  const { clientId, clientSecret } = getUspsConfig();

  if (!clientId || !clientSecret) {
    log.error("[USPS] Auth Failed: clientId or clientSecret is missing in config.");
    throw new ShipstackError("Missing USPS client credentials", "usps");
  }

  try {
    const { token, expiresIn } = await requestUspsToken({
      clientId,
      clientSecret,
    });

    setCachedToken(token, expiresIn);
    return token;
  } catch (error) {
    log.error("[USPS] Token request failed", error);
    throw new ShipstackError("Failed to retrieve USPS access token", "usps", error);
  }
}