import { requestUspsToken } from "./token";
import { getLogger } from "../../logger";
import { getCachedToken, setCachedToken } from "./tokenCache";
import { getConfig } from "../../config";

export async function getUspsAccessToken(): Promise<string> {
  const cached = getCachedToken();
  const log = getLogger();
  if (cached) return cached;

  const { USPS_CLIENT_ID, USPS_CLIENT_SECRET } = getConfig();
  if (!USPS_CLIENT_ID || !USPS_CLIENT_SECRET) {
    log.error("getUspsAccessToken: USPS_CLIENT_ID or USPS_CLIENT_SECRET is missing.");
    log.debug("USPS_CLIENT_ID:", USPS_CLIENT_ID);
    return Promise.reject(new Error("Missing USPS client credentials"));
  }
  const { token, expiresIn } = await requestUspsToken({
    clientId: USPS_CLIENT_ID,
    clientSecret: USPS_CLIENT_SECRET,
  });

  setCachedToken(token, expiresIn);
  return token;
}