/**
 * Shipstack Shipping Manager
 * * High-level orchestrator for cross-carrier operations.
 * * This class provides the primary interface for e-commerce checkout logic,
 * such as comparing and ranking rates across all configured carriers.
 * * @module Core/ShippingManager
 */

import { validateAddress } from "@/api/address";
import { getRates } from "@/api/getRates";
import { trackShipment } from "@/api/tracking";
import { ShippingConfig } from "@/config";
import type { 
  RateRequest, 
  NormalizedRate, 
  AddressValidationRequest,
  AddressValidationResult,
  NormalizedTracking
} from "@/types/index";

/**
 * Core manager for multi-carrier shipping operations.
 * @public
 */
export class ShippingManager {
  /**
   * Initializes the Shipping Manager with a specific configuration instance.
   * @param {ShippingConfig} config - The global library configuration.
   */
  constructor(private config: ShippingConfig) {}

  /**
   * Validates a physical address against a specific carrier.
   * @param {AddressValidationRequest} req - The address validation payload.
   */
  async validateAddress(req: AddressValidationRequest): Promise<AddressValidationResult> {
    return await validateAddress(req, this.config);
  }

  /**
   * Retrieves tracking updates for a shipment.
   * @param {string | string[]} trackingNumbers - Identifiers for the packages.
   * @param {"usps" | "fedex" | "ups"} carrier - The target carrier.
   */
  async track(
    trackingNumbers: string | string[], 
    carrier: "usps" | "fedex" | "ups"
  ): Promise<NormalizedTracking[]> {
    return await trackShipment(trackingNumbers, carrier, this.config);
  }

  /**
   * Fetches, flattens, and ranks rates from enabled carriers.
   * * Executes carrier requests in parallel and identifies value-added options.
   * * @param req - The standardized shipment details, excluding the carrier.
   * @param {Array<"usps" | "fedex" | "ups">} carriers - List of carriers to query.
   * @returns {Promise<NormalizedRate[]>} A sorted list of rates by cost (ascending).
   */
  async getRankedRates(
    req: Omit<RateRequest, "carrier">,
    carriers: ("usps" | "fedex" | "ups")[]
  ): Promise<NormalizedRate[]> {
    const promises = carriers.map(c => 
      getRates({ ...req, carrier: c }, this.config).catch(() => [])
    );

    const results = await Promise.all(promises);
    const allRates = results.flat();

    if (!allRates.length) return [];

    /**
     * Ranking Logic:
     * 1. Sort by absolute cost (ascending).
     * 2. Identify the 'isCheapest' option.
     * 3. Identify the 'isFastest' option based on 'deliveryDays'.
     */
    const sorted = allRates.sort((a, b) => a.cost.amount - b.cost.amount);
    
    if (sorted.length > 0) {
      // Mark the absolute lowest cost
      sorted[0].isCheapest = true;
      
      /**
       * Secondary Sort: Fastest Transit
       * Uses 'deliveryDays' from NormalizedRate. We use a high fallback (99) 
       * for services that don't provide an estimate to push them to the bottom.
       */
      const fastest = [...allRates].sort((a, b) => 
        (a.deliveryDays ?? 99) - (b.deliveryDays ?? 99)
      );
      
      if (fastest.length > 0 && fastest[0].deliveryDays !== undefined) {
        fastest[0].isFastest = true;
      }
    }
    
    return sorted;
  }
}