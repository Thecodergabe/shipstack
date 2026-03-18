/**
 * Shipstack: The Universal Shipping SDK
 * * Primary entry point for the Shipstack library. 
 * Provides a stateful 'ShippingClient' for persistent configuration,
 * and stateless functional exports for serverless integrations.
 * * @module Shipstack
 */

import { ShippingConfig } from "@/config";
import { 
  RateRequest, 
  NormalizedRate, 
  AddressValidationRequest, 
  AddressValidationResult,
  NormalizedTracking
} from "@/types/index";

/**
 * Internal API Orchestrators
 */
import { getRates as _getRates } from "@/api/getRates";
import { validateAddress as _validateAddress } from "@/api/address";
import { trackShipment as _trackShipment } from "@/api/tracking";
import { 
  getBestValueRate as _getBestValueRate, 
  getFastestService as _getFastestService, 
  predictCarrier as _predictCarrier 
} from "@/api/shipping";

/**
 * 1. CLASS-BASED API (The SDK Pattern)
 * * Ideal for applications where configuration is initialized once.
 * @category Core
 */
export class ShippingClient {
  /**
   * Initializes the Shipstack client with carrier credentials.
   * @param {ShippingConfig} config - The global library configuration.
   */
  constructor(private config: ShippingConfig) {}

  /**
   * Retrieves all available shipping rates across configured carriers.
   */
  async getRates(request: RateRequest): Promise<NormalizedRate[]> {
    return _getRates(request, this.config);
  }

  /**
   * Validates and normalizes a physical address using a specified carrier.
   */
  async validateAddress(request: AddressValidationRequest): Promise<AddressValidationResult> {
    return _validateAddress(request, this.config);
  }

  /**
   * Standardized tracking for one or more packages.
   * @param {string | string[]} trackingNumbers - Identifiers for the packages.
   * @param {"usps" | "fedex" | "ups"} carrier - The target carrier.
   */
  async track(
    trackingNumbers: string | string[], 
    carrier: "usps" | "fedex" | "ups"
  ): Promise<NormalizedTracking[]> {
    return _trackShipment(trackingNumbers, carrier, this.config);
  }

  /**
   * Identifies the single cheapest shipping option.
   */
  async getBestValue(request: RateRequest): Promise<NormalizedRate | null> {
    return _getBestValueRate(request, this.config);
  }

  /**
   * Identifies the service with the shortest transit time.
   */
  async getFastest(request: RateRequest): Promise<NormalizedRate | null> {
    return _getFastestService(request, this.config);
  }

  /**
   * Static utility to predict the carrier based on tracking number patterns.
   */
  static predict(trackingNumber: string): "usps" | "fedex" | "ups" | "unknown" {
    return _predictCarrier(trackingNumber);
  }
}

/**
 * 2. FUNCTIONAL API (Direct Exports)
 * * Stateless versions for dynamic configuration or tree-shaking.
 */
export const getRates = _getRates;
export const validateAddress = _validateAddress;
export const trackShipment = _trackShipment;
export const getBestValueRate = _getBestValueRate;
export const getFastestService = _getFastestService;
export const predictCarrier = _predictCarrier;

/**
 * 3. CORE EXPORTS
 * * Essential types, errors, and configuration models.
 */
export * from "@/types/index";
export * from "@/config";
export * from "@/errors";

/**
 * 4. CARRIER BUILDERS (Internal Mapping Logic)
 */
export { buildFedexRateRequest } from "@/fedex/rates/request";
export { buildUspsRateRequest } from "@/usps/rates/request";
export { buildUpsRateRequest } from "@/ups/rating/request";

/**
 * 5. CARRIER CLIENTS (Direct SDK Access)
 */
export { createFedexRatesClient } from "@/fedex/rates/client";
export { createUspsRatesClient } from "@/usps/rates/client";
export { createUpsRatesClient } from "@/ups/rating/client";