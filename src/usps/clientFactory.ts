import { getConfig } from "../config";
import { getLogger } from "../logger";
import { ShipstackError } from "../errors";
import { getUspsAccessToken } from "./auth/index";

export async function configureUspsClient(OpenAPI: any, module: string) {
  const { USPS_BASE_URL } = getConfig();
  const log = getLogger();

  const token = await getUspsAccessToken();
  if (!token) {
    log.error("Failed to retrieve USPS token.");
    throw new ShipstackError("Missing USPS token", "usps");
  }

  OpenAPI.BASE = USPS_BASE_URL ?? "https://api.usps.com";
  OpenAPI.TOKEN = token;

  log.debug(`USPS ${module} client initialized.`);
}