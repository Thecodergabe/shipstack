/**
 * Shipstack Global Rates Aggregator
 * * Orchestrates multi-carrier rate lookups using carrier-specific builders, 
 * authenticated clients, and standardized response converters.
 */

import { RateRequest, NormalizedRate } from "@/types/index";
import { ShippingConfig } from "../config";
import { ShipstackError } from "../errors";

// 1. IMPORT THE BUILDERS
import { buildFedexRateRequest } from "@/fedex/rates/request";
import { buildUspsRateRequest } from "../usps/rates/request";
import { buildUpsRateRequest } from "@/ups/rating/request"; // Added UPS

// 2. IMPORT THE CLIENTS
import { createFedexRatesClient } from "@/fedex/rates/client";
import { createUspsRatesClient } from "../usps/rates/client";
import { createUpsRatesClient } from "@/ups/rating/client"; // Added UPS

// 3. IMPORT THE CONVERTERS
import { convertFedexRateResponse } from "@/converters/rates/fedex";
import { convertUspsRateResponse } from "@/converters/rates/usps";
import { convertUpsRateResponse } from "@/converters/rates/ups"; // Added UPS

/**
 * The core getRates function. 
 * * This service acts as the central router for the Shipstack library. 
 * It ensures that carrier-specific credentials are provided, payloads 
 * are correctly transformed, and responses are normalized.
 * * @param {RateRequest} req - The agnostic rating request from the user.
 * @param {ShippingConfig} config - The library configuration object containing credentials.
 * @returns {Promise<NormalizedRate[]>} An array of standardized rates across available services.
 * @throws {ShipstackError} If carrier-specific configuration is missing or the carrier is unsupported.
 * @public
 */
export async function getRates(req: RateRequest, config: ShippingConfig): Promise<NormalizedRate[]> {
  const carrier = req.carrier.toLowerCase();

  switch (carrier) {
    case "fedex": {
      if (!config.fedex) {
        throw new ShipstackError("FedEx configuration missing in ShippingConfig.", "fedex");
      }

      const client = createFedexRatesClient(config.fedex);
      await client.init();

      const fedexPayload = buildFedexRateRequest(req, config.fedex.accountNumber);
      const rawResponse = await client.getRates(fedexPayload);

      return convertFedexRateResponse(rawResponse);
    }

    case "usps": {
      if (!config.usps) {
        throw new ShipstackError("USPS configuration missing in ShippingConfig.", "usps");
      }

      const client = createUspsRatesClient(config.usps);
      await client.init();

      const uspsPayload = buildUspsRateRequest(req);
      const rawResponse = await client.getRates(uspsPayload);

      return convertUspsRateResponse(rawResponse);
    }

    case "ups": {
      if (!config.ups) {
        throw new ShipstackError("UPS configuration missing in ShippingConfig.", "ups");
      }

      /**
       * UPS Rating Implementation:
       * 1. Create the authenticated Rating Client.
       * 2. Build the payload using the required 6-digit ShipperNumber.
       * 3. Fetch rates (Token management is handled internally by the client).
       * 4. Convert the complex RATEResponseWrapper to NormalizedRate[].
       */
      const client = createUpsRatesClient(config.ups);
      
      const upsPayload = buildUpsRateRequest(
        req, 
        config.ups.accountNumber ?? ""
      );
      
      const rawResponse = await client.getRates(upsPayload);

      return convertUpsRateResponse(rawResponse);
    }

    default:
      throw new ShipstackError(`Carrier '${req.carrier}' is not supported for rating.`, "ups");
  }
}