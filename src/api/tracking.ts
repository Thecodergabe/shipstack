/**
 * Shipstack Tracking API
 * * The public-facing interface for tracking operations.
 * * This module serves as the primary entry point for tracking shipments. 
 * It orchestrates the underlying TrackingAggregator to handle carrier-specific 
 * batch limits, concurrency, and response normalization.
 * * @module API/Tracking
 */

import { TrackingAggregator } from "@/aggregator/tracking";
import { NormalizedTracking } from "@/types/index";
import { ShippingConfig } from "@/config";
import { ShipstackError } from "@/errors";

/**
 * Retrieves standardized tracking information for one or more packages.
 * * This is a high-level method designed for ease of use in UIs and backend 
 * workflows. It automatically handles the transition from single strings 
 * to arrays and initializes the necessary aggregator logic.
 * * @param {string | string[]} trackingNumbers - A single string or array of tracking IDs.
 * @param {"usps" | "fedex" | "ups"} carrier - The carrier service to query.
 * @param {ShippingConfig} config - The library configuration containing credentials.
 * @returns {Promise<NormalizedTracking[]>} An array of normalized tracking objects.
 * @throws {ShipstackError} If the carrier is unsupported or the request fails.
 * @public
 */
export async function trackShipment(
  trackingNumbers: string | string[],
  carrier: "usps" | "fedex" | "ups",
  config: ShippingConfig
): Promise<NormalizedTracking[]> {
  /**
   * Initialize the aggregator with the provided configuration.
   * This ensures the tracking logic remains framework-agnostic.
   */
  const aggregator = new TrackingAggregator(config);
  
  // Ensure we are always working with an array for the aggregator
  const targets = Array.isArray(trackingNumbers) ? trackingNumbers : [trackingNumbers];
  const carrierKey = carrier.toLowerCase();

  switch (carrierKey) {
    case "ups":
      return await aggregator.trackUpsBatch(targets);
    case "usps":
      return await aggregator.trackUspsBatch(targets);
    case "fedex":
      return await aggregator.trackFedexBatch(targets);
    default:
      throw new ShipstackError(
        `Tracking for carrier '${carrier}' is not yet supported.`, 
        "ups"
      );
  }
}