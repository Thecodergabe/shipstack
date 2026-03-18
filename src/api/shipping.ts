/**
 * Shipstack High-Level Shipping API
 * Standardized convenience methods for common logistics workflows.
 */

import { RateRequest, NormalizedRate } from "../types/index";
import { ShippingConfig } from "../config";
import { getRates } from "./getRates";
import { ShipstackError } from "../errors";

/**
 * Retrieves the single lowest-cost shipping option across all configured carriers.
 * * Validation Logic:
 * 1. Checks if the specific carrier requested is configured.
 * 2. If 'all' or multiple carriers are targeted, ensures at least one credential set exists.
 * * @param {RateRequest} req - The agnostic rate request payload.
 * @param {ShippingConfig} config - The global library configuration.
 * @returns {Promise<NormalizedRate | null>} The cheapest rate object or null if no rates are available.
 * @throws {ShipstackError} If the required carrier configuration is missing.
 * @category Convenience API
 * @public
 */
export async function getBestValueRate(
  req: RateRequest,
  config: ShippingConfig
): Promise<NormalizedRate | null> {
  // Production Safeguard: Validate config before making network calls
  validateCarrierConfig(req.carrier, config);

  const allRates = await getRates(req, config);

  if (!allRates || allRates.length === 0) {
    return null;
  }

  /** Sort by cost.amount ascending and return the first element. */
  return allRates.sort((a, b) => a.cost.amount - b.cost.amount)[0];
}

/**
 * Identifies the shipping option with the shortest estimated transit time.
 * * @param {RateRequest} req - The agnostic rate request payload.
 * @param {ShippingConfig} config - The global library configuration.
 * @returns {Promise<NormalizedRate | null>} The fastest rate object or null.
 * @throws {ShipstackError} If configuration for the target carrier is absent.
 * @category Convenience API
 * @public
 */
export async function getFastestService(
  req: RateRequest,
  config: ShippingConfig
): Promise<NormalizedRate | null> {
  validateCarrierConfig(req.carrier, config);

  const allRates = await getRates(req, config);

  // Filter out services that do not provide a delivery window
  const validRates = allRates.filter(r => r.deliveryDays !== undefined);

  if (validRates.length === 0) {
    return null;
  }

  return validRates.sort((a, b) => (a.deliveryDays || 99) - (b.deliveryDays || 99))[0];
}

/**
 * Heuristic utility to predict a carrier based on standard tracking number patterns.
 * * @param {string} trackingNumber - The raw tracking identifier string.
 * @returns {"usps" | "fedex" | "ups" | "unknown"} The predicted carrier identifier.
 * @category Utilities
 * @public
 */
export function predictCarrier(trackingNumber: string): "usps" | "fedex" | "ups" | "unknown" {
  const clean = trackingNumber.replace(/\s+/g, "").toUpperCase();

  if (/^1Z[A-Z0-9]{16}$/.test(clean)) return "ups";
  if (/^\d{12}$|^\d{15}$/.test(clean)) return "fedex";
  if (/^9[1-4]\d{18,20}$/.test(clean)) return "usps";

  return "unknown";
}

/**
 * Internal helper to ensure the user has provided necessary credentials.
 * This prevents the library from failing deep inside a carrier client.
 */
function validateCarrierConfig(carrier: string, config: ShippingConfig): void {
  const c = carrier.toLowerCase() as "fedex" | "usps" | "ups";
  
  if (!config[c]) {
    throw new ShipstackError(
      `Configuration missing for carrier: ${carrier}. Please provide credentials in the ShippingConfig.`,
      c
    );
  }
}