import { getConfig } from "../config";
import { getLogger } from "../logger";
import { ShipstackError } from "../errors";

export function configureUspsClient(OpenAPI: any, module: string) {
  const { USPS_API_KEY, USPS_BASE_URL } = getConfig();
  const log = getLogger();

  if (!USPS_API_KEY) {
    log.error("USPS_API_KEY is missing.");
    throw new ShipstackError("Missing USPS API key", "usps");
  }

  OpenAPI.BASE = USPS_BASE_URL ?? "https://api.usps.com";
  OpenAPI.TOKEN = USPS_API_KEY;

  log.debug(`USPS ${module} client initialized.`);
}