import { getConfig } from "../../config";
import { getLogger } from "../../logger";
import { ShipstackError } from "../../errors";
import { OpenAPI, DefaultService } from "./generated/index";

export function createFedexRatesClient() {
  const { FEDEX_API_KEY, FEDEX_BASE_URL } = getConfig();
  const log = getLogger();

  if (!FEDEX_API_KEY) {
    log.error("FEDEX_API_KEY is missing.");
    throw new ShipstackError("Missing FedEx API key", "fedex");
  }

  try {
    log.debug("Creating FedEx Rates client...");
    OpenAPI.BASE = FEDEX_BASE_URL ?? "https://apis.fedex.com";
    OpenAPI.TOKEN = FEDEX_API_KEY;

    log.info("FedEx Rates client initialized.");
    return DefaultService;
  } catch (err) {
    log.error(`Failed to initialize FedEx Rates client`, err);
    throw new ShipstackError(`FedEx Rates client initialization failed`, "fedex", err);
  }
}