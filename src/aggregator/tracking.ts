/**
 * Shipstack Tracking Aggregator
 * * Standardized batch tracking for USPS, FedEx, and UPS.
 * * This service abstracts away carrier-specific batch limits and response formats,
 * handling concurrency and chunking logic for high-volume inquiries.
 * * @module Aggregator/Tracking
 */

import { NormalizedTracking } from "@/types/index";
import { ShippingConfig, getUspsConfig, getFedexConfig, getUpsConfig } from "@/config";

/** --- USPS Internal --- */
import { UspsTrackingClient } from "@/usps/tracking/client";
import { convertUspsTrackingResponse } from "@/converters/tracking/usps";

/** --- FedEx Internal --- */
import { createFedexTrackingClient } from "@/fedex/tracking/client";
import { normalizeFedexTrackingResponse } from "@/converters/tracking/fedex";

/** --- UPS Internal --- */
import { fetchUpsTracking } from "@/ups/tracking/request";
import { normalizeUpsTrackingResponse } from "@/converters/tracking/ups";

/**
 * Orchestrates tracking requests across multiple carriers.
 * @public
 */
export class TrackingAggregator {
  /**
   * Initializes the aggregator with an optional configuration.
   * * By accepting 'config' here, we ensure the library remains framework-agnostic
   * and can support multiple instances with different credentials.
   * @param {ShippingConfig} [config] - The configuration containing carrier credentials.
   */
  constructor(private config?: ShippingConfig) {}

  /**
   * Orchestrates parallel tracking lookups for multiple UPS packages.
   * * UPS v1 is single-inquiry; we handle concurrency limits here to avoid throttles.
   * @param {string[]} trackingNumbers - UPS tracking identifiers.
   * @returns {Promise<NormalizedTracking[]>} Standardized tracking objects.
   */
  async trackUpsBatch(trackingNumbers: string[]): Promise<NormalizedTracking[]> {
    const upsConfig = this.config?.ups || getUpsConfig();
    const CONCURRENCY_LIMIT = 25; 
    const targets = trackingNumbers.slice(0, CONCURRENCY_LIMIT);

    const results = await Promise.all(
      targets.map(async (num) => {
        try {
          const raw = await fetchUpsTracking(num, upsConfig);
          return normalizeUpsTrackingResponse(raw);
        } catch {
          return null;
        }
      })
    );

    return results.filter((r): r is NormalizedTracking => r !== null);
  }

  /**
   * USPS v3.2 Batch Tracking (35 numbers per request limit).
   * @param {string[]} trackingNumbers - Array of USPS tracking identifiers.
   */
  async trackUspsBatch(trackingNumbers: string[]): Promise<NormalizedTracking[]> {
    const BATCH_SIZE = 35; 
    const chunks: string[][] = [];

    for (let i = 0; i < trackingNumbers.length; i += BATCH_SIZE) {
      chunks.push(trackingNumbers.slice(i, i + BATCH_SIZE));
    }

    const uspsConfig = this.config?.usps || getUspsConfig();
    const client = new UspsTrackingClient(uspsConfig);
    await client.init();

    const results = await Promise.all(
      chunks.map(async (chunk) => {
        try {
          const rawResponse = await client.getBulkStatus(chunk);
          const details = rawResponse?.trackingDetails || rawResponse?.trackingDetail || [];
          const normalizedBatch = Array.isArray(details) ? details : [details];

          return normalizedBatch.map((detail: any) => 
            convertUspsTrackingResponse(detail)
          );
        } catch {
          return [];
        }
      })
    );

    return results.flat();
  }

  /**
   * FedEx Batch Tracking (30 numbers per request limit).
   * @param {string[]} trackingNumbers - Array of FedEx tracking identifiers.
   */
  async trackFedexBatch(trackingNumbers: string[]): Promise<NormalizedTracking[]> {
    const BATCH_SIZE = 30; 
    const fedexConfig = this.config?.fedex || getFedexConfig();
    const client = createFedexTrackingClient(fedexConfig);
    await client.init();

    const results = await Promise.all(
      trackingNumbers.slice(0, BATCH_SIZE).map(async (num) => {
        try {
          const raw = await client.getStatus(num);
          return normalizeFedexTrackingResponse(raw);
        } catch {
          return null;
        }
      })
    );

    return results.filter((r): r is NormalizedTracking => r !== null);
  }
}