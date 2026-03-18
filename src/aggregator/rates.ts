/**
 * Shipstack Rates Aggregator
 * * Orchestrates parallel shipping rate lookups across all enabled carriers.
 * This service manages the concurrency layer, ensuring that a single carrier 
 * failure does not prevent other rates from being returned.
 */

import { RateRequest, NormalizedRate } from "@/types/index";
import { 
  getEnabledCarriers, 
  getUspsConfig, 
  getFedexConfig, 
  getUpsConfig 
} from "../config";

// Client Factories
import { createUspsRatesClient } from "../usps/rates/client";
import { createFedexRatesClient } from "@/fedex/rates/client";
import { createUpsRatesClient } from "@/ups/rating/client";

// Request Builders
import { buildUspsRateRequest } from "../usps/rates/request";
import { buildFedexRateRequest } from "@/fedex/rates/request";
import { buildUpsRateRequest } from "@/ups/rating/request";

// Response Converters
import { convertUspsRateResponse } from "@/converters/rates/usps";
import { convertFedexRateResponse } from "@/converters/rates/fedex";
import { convertUpsRateResponse } from "@/converters/rates/ups";

/**
 * Executes a global rate lookup across USPS, FedEx, and UPS.
 * * * Logic Flow:
 * 1. Parallelizes requests using Promise.all for minimum latency.
 * 2. Uses Shipstack Clients to abstract away OAuth and Header management.
 * 3. Aggregates, flattens, and sorts results by price (ascending).
 * * @param {RateRequest} req - Agnostic shipping parameters.
 * @returns {Promise<NormalizedRate[]>} A sorted list of available shipping options.
 * @public
 */
export async function getRates(req: RateRequest): Promise<NormalizedRate[]> {
  const enabledCarriers = getEnabledCarriers();
  const tasks: Promise<NormalizedRate[]>[] = [];

  /**
   * USPS Rate Implementation
   */
  if (enabledCarriers.includes("usps")) {
    tasks.push((async () => {
      try {
        const config = getUspsConfig();
        const client = createUspsRatesClient(config);
        const uspsRequest = buildUspsRateRequest(req);
        const raw = await client.getRates(uspsRequest);
        return convertUspsRateResponse(raw);
      } catch (err) {
        console.error("Shipstack [USPS]: Rate fetch failed", err);
        return [];
      }
    })());
  }

  /**
   * FedEx Rate Implementation
   * * Note: Uses client.getRates() to hide 'application/json' and 'en_US' details.
   */
  if (enabledCarriers.includes("fedex")) {
    tasks.push((async () => {
      try {
        const config = getFedexConfig();
        const client = createFedexRatesClient(config);
        await client.init(); 
        
        const fedexRequest = buildFedexRateRequest(req, config.accountNumber);
        const raw = await client.getRates(fedexRequest); // Fixed method call
        
        return convertFedexRateResponse(raw);
      } catch (err) {
        console.error("Shipstack [FedEx]: Rate fetch failed", err);
        return [];
      }
    })());
  }

  /**
   * UPS Rate Implementation
   * * Note: The client internally handles the 'v2409' and 'Shop' flags.
   */
  if (enabledCarriers.includes("ups")) {
    tasks.push((async () => {
      try {
        const config = getUpsConfig();
        const client = createUpsRatesClient(config);
        
        const upsRequest = buildUpsRateRequest(req, config.accountNumber ?? "");
        const raw = await client.getRates(upsRequest); // Fixed method call
        
        return convertUpsRateResponse(raw);
      } catch (err) {
        console.error("Shipstack [UPS]: Rate fetch failed", err);
        return [];
      }
    })());
  }

  // Execute all tasks in parallel
  const results = await Promise.all(tasks);
  const flattened = results.flat();

  // Return sorted by cost (Cheapest First)
  return flattened.sort((a, b) => a.cost.amount - b.cost.amount);
}