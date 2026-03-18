/**
 * Shipstack Global Rates Aggregator
 * Orchestrates multi-carrier rate lookups using carrier-specific builders and clients.
 */

import { RateRequest, NormalizedRate } from "../types/index";
import { ShippingConfig } from "../config";
import { ShipstackError } from "../errors";

// 1. IMPORT THE BUILDERS (Where your FedEx builder lives)
import { buildFedexRateRequest } from "../fedex/rates/request";
import { buildUspsRateRequest } from "../usps/rates/request";

// 2. IMPORT THE CLIENTS
import { createFedexRatesClient } from "../fedex/rates/client";
import { createUspsRatesClient } from "../usps/rates/client";

// 3. IMPORT THE CONVERTERS
import { convertFedexRateResponse } from "../converters/rates/fedex";
import { convertUspsRateResponse } from "../converters/rates/usps";

/**
 * The core getRates function. 
 * Note: It takes the global config to pass down specific slices to the clients.
 */
export async function getRates(req: RateRequest, config: ShippingConfig): Promise<NormalizedRate[]> {
  const carrier = req.carrier.toLowerCase();

  switch (carrier) {
    case "fedex": {
      if (!config.fedex) {
        throw new ShipstackError("FedEx configuration missing.", "fedex");
      }

      // Instantiate the client with the config slice
      const client = createFedexRatesClient(config.fedex);
      await client.init();

      // EXECUTE THE BUILDER: This is why the import above is critical
      const fedexPayload = buildFedexRateRequest(req, config.fedex.accountNumber);
      
      const rawResponse = await client.getRates(fedexPayload);

      return convertFedexRateResponse(rawResponse);
    }

    case "usps": {
      if (!config.usps) {
        throw new ShipstackError("USPS configuration missing.", "usps");
      }

      const client = createUspsRatesClient(config.usps);
      await client.init();

      const uspsPayload = buildUspsRateRequest(req);
      const rawResponse = await client.getRates(uspsPayload);

      return convertUspsRateResponse(rawResponse);
    }

    default:
      throw new ShipstackError(`Carrier '${req.carrier}' not supported.`, "fedex");
  }
}