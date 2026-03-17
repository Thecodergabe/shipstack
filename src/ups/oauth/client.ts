import { OpenAPI, OAuthClientCredentialsService } from "./generated/index";
import { getConfig } from "../../config";
import { getLogger } from "../../logger";
import { ShipstackError } from "../../errors";

export function createUpsAuthClient() {
  const { UPS_CLIENT_ID, UPS_CLIENT_SECRET, UPS_BASE_URL } = getConfig();
  const log = getLogger();

  if (!UPS_CLIENT_ID || !UPS_CLIENT_SECRET) {
    throw new ShipstackError("Missing UPS OAuth credentials", "ups");
  }

  // Configure OpenAPI client
  OpenAPI.BASE = UPS_BASE_URL ?? "https://onlinetools.ups.com";
  OpenAPI.USERNAME = UPS_CLIENT_ID;
  OpenAPI.PASSWORD = UPS_CLIENT_SECRET;

  log.debug("UPS OAuth client initialized.");

  return OAuthClientCredentialsService;
}