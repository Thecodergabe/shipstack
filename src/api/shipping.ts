/**
 * Shipstack High-Level Shipping API
 * Standardized convenience methods for common logistics workflows.
 */

import { RateRequest, NormalizedRate, ShipmentRequest, NormalizedShipment } from "@/types/index";
import { ShippingConfig } from "../config";
import { getRates } from "./getRates";
/** 
 * Importing the aggregator as 'aggregatorCreateShipment' to avoid 
 * collision with this file's exported 'createShipment' function.
 */
import { createShipment as aggregatorCreateShipment } from "@/aggregator/shipment";
import { ShipstackError } from "../errors";

/**
 * Creates a shipping label and returns a normalized shipment object.
 * * This is the primary entry point for generating labels across all carriers.
 * * @param {ShipmentRequest} req - The agnostic shipment request payload.
 * @param {ShippingConfig} config - The global library configuration.
 * @returns {Promise<NormalizedShipment>} The generated label and tracking info.
 * @throws {ShipstackError} If configuration is missing or carrier API fails.
 * @category Core API
 * @public
 */
export async function createShipment(
  req: ShipmentRequest,
  config: ShippingConfig
): Promise<NormalizedShipment> {
  // 1. Validate config for the requested carrier
  validateCarrierConfig(req.carrier, config);

  try {
    // 2. Delegate to the aggregator using the aliased import
    return await aggregatorCreateShipment(req);
  } catch (error: any) {
    throw new ShipstackError(
      `Failed to create shipment for ${req.carrier}: ${error.message}`,
      req.carrier,
      error
    );
  }
}

/**
 * Retrieves the single lowest-cost shipping option across all configured carriers.
 */
export async function getBestValueRate(
  req: RateRequest,
  config: ShippingConfig
): Promise<NormalizedRate | null> {
  validateCarrierConfig(req.carrier, config);

  const allRates = await getRates(req, config);

  if (!allRates || allRates.length === 0) {
    return null;
  }

  return allRates.sort((a, b) => a.cost.amount - b.cost.amount)[0];
}

/**
 * Identifies the shipping option with the shortest estimated transit time.
 */
export async function getFastestService(
  req: RateRequest,
  config: ShippingConfig
): Promise<NormalizedRate | null> {
  validateCarrierConfig(req.carrier, config);

  const allRates = await getRates(req, config);
  const validRates = allRates.filter(r => r.deliveryDays !== undefined);

  if (validRates.length === 0) {
    return null;
  }

  return validRates.sort((a, b) => (a.deliveryDays || 99) - (b.deliveryDays || 99))[0];
}

/**
 * Heuristic utility to predict a carrier based on standard tracking number patterns.
 */
export function predictCarrier(trackingNumber: string): "usps" | "fedex" | "ups" | "unknown" {
  const clean = trackingNumber.replace(/\s+/g, "").toUpperCase();

  if (/^1Z[A-Z0-9]{16}$/.test(clean)) return "ups";
  if (/^\d{12}$|^\d{15}$|^\d{20}$/.test(clean)) return "fedex";
  if (/^(94|93|92|91)\d{18,20}$/.test(clean) || /^[A-Z]{2}\d{9}[A-Z]{2}$/.test(clean)) return "usps";

  return "unknown";
}

/**
 * Internal helper to ensure the user has provided necessary credentials.
 */
function validateCarrierConfig(carrier: string, config: ShippingConfig): void {
  const c = carrier.toLowerCase() as keyof ShippingConfig;
  
  if (!config[c] || (config[c] as any).enabled === false) {
    throw new ShipstackError(
      `Configuration missing or disabled for carrier: ${carrier}.`,
      carrier as any
    );
  }
}