// api/getRates.ts
import { RateRequest, NormalizedRate } from "../types/index";

import { createUpsRatesClient } from "../ups/index";
import { createUspsRatesClient } from "../usps/index";
import { createFedexRatesClient } from "../fedex/index";
import { ShippingConfig } from "../config";

// IMPORT YOUR BUILDERS
import { buildUspsRateRequest } from "../usps/rates/request";
import { buildFedexRateRequest } from "../fedex/rates/request";
// import { buildUpsRateRequest } from "../ups/rates/request"; // Add when ready

import { convertUpsRateResponse } from "../converters/rates/ups";
import { convertUspsRateResponse } from "../converters/rates/usps";
import { convertFedexRateResponse } from "../converters/rates/fedex";

export async function getRates(req: RateRequest, config: ShippingConfig): Promise<NormalizedRate[]> {
  switch (req.carrier) {
    case "ups": {
      const client = createUpsRatesClient();
      // Add builder here once UPS is ready
      const raw = await client.getRates(req as any); 
      return convertUpsRateResponse(raw);
    }

    case "usps": {
      // Pass the specific USPS config from our master config object
      const client = createUspsRatesClient(config.usps); 
      const uspsRequest = buildUspsRateRequest(req);
      const raw = await client.getRates(uspsRequest);
      return convertUspsRateResponse(raw);
    }

    case "fedex": {
      const client = createFedexRatesClient();
      // 1. TRANSFORM the request using the builder
      const fedexRequest = buildFedexRateRequest(req);
      // 2. PASS the transformed request
      const raw = await client.getRates(fedexRequest);
      return convertFedexRateResponse(raw);
    }

    default:
      throw new Error(`Unsupported carrier: ${req.carrier}`);
  }
}