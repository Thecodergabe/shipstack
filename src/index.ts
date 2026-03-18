/**
 * Shipstack: The Universal Shipping SDK
 * * This is the primary entry point for the Shipstack library. 
 * It provides a stateful 'ShippingClient' class for persistent configuration,
 * and stateless functional exports for lightweight or serverless integrations.
 */

import { RateRequest, NormalizedRate } from "./types/index";
import { ShippingConfig } from "./config";

/**
 * Internal Logic Imports
 * Paths assume this file is located at 'src/index.ts'
 */
import { getRates as _getRates } from "./api/getRates";
import { 
  getBestValueRate as _getBestValueRate, 
  getFastestService as _getFastestService, 
  predictCarrier as _predictCarrier 
} from "./api/shipping";

/**
 * 1. CLASS-BASED API (The SDK Pattern)
 * Ideal for stateful applications where configuration is initialized once.
 */
export class ShippingClient {
  private config: ShippingConfig;

  constructor(config: ShippingConfig) {
    this.config = config;
  }

  /**
   * Retrieves all available shipping rates across configured carriers.
   * @param request - The agnostic RateRequest.
   * @returns A promise resolving to standardized rates.
   */
  async getRates(request: RateRequest): Promise<NormalizedRate[]> {
    return _getRates(request, this.config);
  }

  /**
   * Identifies the single cheapest shipping option.
   */
  async getBestValue(request: RateRequest): Promise<NormalizedRate | null> {
    return _getBestValueRate(request, this.config);
  }

  /**
   * Identifies the shipping service with the shortest transit time.
   */
  async getFastest(request: RateRequest): Promise<NormalizedRate | null> {
    return _getFastestService(request, this.config);
  }

  /**
   * Static utility to predict carrier from tracking strings.
   */
  static predict(trackingNumber: string): "usps" | "fedex" | "ups" | "unknown" {
    return _predictCarrier(trackingNumber);
  }
}

/**
 * 2. FUNCTIONAL API (Direct Exports)
 * Stateless versions for dynamic configuration or tree-shaking.
 */
export const getRates = _getRates;
export const getBestValueRate = _getBestValueRate;
export const getFastestService = _getFastestService;
export const predictCarrier = _predictCarrier;

/**
 * 3. CORE EXPORTS
 * Essential types, errors, and configuration models.
 */
export * from "./types/index";
export * from "./config";
export * from "./errors";

/**
 * 4. CARRIER BUILDERS (Advanced Use)
 */
export { buildFedexRateRequest } from "./fedex/rates/request";
export { buildUspsRateRequest } from "./usps/rates/request";