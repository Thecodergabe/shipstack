import { getConfig } from "../../config";
import { getLogger } from "../../logger";
import { ShipstackError } from "../../errors";
import { OpenAPI, DefaultService } from "./generated/index";

export function createFedexAvailabilityClient() {
  const { FEDEX_API_KEY, FEDEX_BASE_URL } = getConfig();
  const log = getLogger();

  if (!FEDEX_API_KEY) {
    log.error("FEDEX_API_KEY is missing.");
    throw new ShipstackError("Missing FedEx API key", "fedex");
  }

  try {
    log.debug("Creating FedEx Availability client...");
    OpenAPI.BASE = FEDEX_BASE_URL ?? "https://apis.fedex.com";
    OpenAPI.TOKEN = FEDEX_API_KEY;

    log.info("FedEx Availability client initialized.");
    return DefaultService;
  } catch (err) {
    log.error(`Failed to initialize FedEx Availability client`, err);
    throw new ShipstackError(`FedEx Availability client initialization failed`, "fedex", err);
  }
}