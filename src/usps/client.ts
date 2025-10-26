import { getConfig } from "../config";
import { getLogger } from "../logger";
import { ResourcesService, OpenAPI } from "./generated/index";
import { ShipstackError } from "../errors";

export function createUspsClient() {
  const { USPS_API_KEY, USPS_BASE_URL } = getConfig();
  const log = getLogger();

  if (!USPS_API_KEY) {
    log.error("USPS_API_KEY is missing.");
    throw new ShipstackError("Missing USPS API key", "usps");
  }

  try {
    log.debug("Creating USPS client...");
    OpenAPI.BASE = USPS_BASE_URL ?? "https://api.usps.com";
    OpenAPI.TOKEN = USPS_API_KEY;

    if (USPS_BASE_URL) {
      log.warn(`Using custom USPS base URL: ${USPS_BASE_URL}`);
    }

    log.info("USPS client initialized.");
    return ResourcesService;
  } catch (err) {
    log.error("Failed to initialize USPS client", err);
    throw new ShipstackError("USPS client initialization failed", "usps", err);
  }
}