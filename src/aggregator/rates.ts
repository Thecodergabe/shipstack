import { createUspsRatesClient } from "../usps/rates/client";
import { createFedexRatesClient } from "../fedex/rates/client";
import { createUpsRatesClient } from "../ups/rating/client";

import { buildUspsRateRequest } from "../usps/rates/request";
import { buildUpsRateRequest } from "../ups/rating/request";
// Note: buildFedexRateRequest logic is currently handled inline or via local helper
import { buildFedexRateRequest } from "../fedex/rates/request"; 

import { convertUspsRateResponse } from "../converters/rates/usps";
import { convertFedexRateResponse } from "../converters/rates/fedex";
import { convertUpsRateResponse } from "../converters/rates/ups";

import { RateRequest, NormalizedRate } from "../types/index";
import { 
  getEnabledCarriers, 
  getUspsConfig, 
  getFedexConfig, 
  getUpsConfig 
} from "../config";

/**
 * Orchestrates shipping rate lookups across all enabled carriers.
 * * * Operation Flow:
 * 1. Identifies active carriers via the global configuration state.
 * 2. Initializes carrier-specific clients using their respective configuration slices.
 * 3. Transforms the agnostic Shipstack RateRequest into carrier-specific schemas.
 * 4. Executes all requests in parallel to minimize total latency.
 * 5. Normalizes responses and sorts results by price (ascending).
 * * @param req - The standardized shipping parameters (origin, destination, dimensions, weight).
 * @returns A promise resolving to a sorted array of NormalizedRate objects.
 */
export async function getRates(req: RateRequest): Promise<NormalizedRate[]> {
  const enabledCarriers = getEnabledCarriers();
  const tasks: Promise<NormalizedRate[]>[] = [];

  /**
   * USPS Domestic Prices v3
   */
  if (enabledCarriers.includes("usps")) {
    tasks.push((async () => {
      try {
        const config = getUspsConfig();
        const client = createUspsRatesClient(config);
        
        await client.init(); 
        const uspsRequest = buildUspsRateRequest(req);
        const raw = await client.getRates(uspsRequest);
        
        return convertUspsRateResponse(raw);
      } catch (err) {
        console.error("Shipstack [USPS]: Failed to retrieve rates", err);
        return [];
      }
    })());
  }

  /**
   * FedEx Rate and Transit Times v3
   */
  if (enabledCarriers.includes("fedex")) {
    tasks.push((async () => {
      try {
        const config = getFedexConfig();
        const client = createFedexRatesClient(config);
        
        // Transform Shipstack request to FedEx-specific schema
        const fedexRequest = buildFedexRateRequest(req, config.accountNumber);
        
        const raw = await client.rateAndTransitTimes(
          "application/json",
          config.clientId, // Required as API-Key in some SDK versions
          undefined,
          "en_US",
          fedexRequest
        );
        
        return convertFedexRateResponse(raw);
      } catch (err) {
        console.error("Shipstack [FedEx]: Failed to retrieve rates", err);
        return [];
      }
    })());
  }

  /**
   * UPS Rating API v2409
   */
  if (enabledCarriers.includes("ups")) {
    tasks.push((async () => {
      try {
        const config = getUpsConfig();
        const client = createUpsRatesClient(config);
        
        const upsRequest = buildUpsRateRequest(req);
        
        const raw = await client.rate(
          "Shop",           // Request option to return all valid services
          upsRequest,
          undefined,
          "shipstack",      // Transaction source identifier
          undefined,
          "v2409"           // Schema subversion
        );
        
        return convertUpsRateResponse(raw);
      } catch (err) {
        console.error("Shipstack [UPS]: Failed to retrieve rates", err);
        return [];
      }
    })());
  }

  /**
   * Execution Layer:
   * We use Promise.all to ensure that a slow carrier doesn't block 
   * others, though the total wait time is governed by the slowest response.
   */
  const allResults = await Promise.all(tasks);
  const flattenedResults = allResults.flat();

  /**
   * Sort results by amount to provide a 'Cheapest First' view for checkout.
   */
  return flattenedResults.sort((a, b) => a.cost.amount - b.cost.amount);
}