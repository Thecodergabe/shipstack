import { NormalizedTracking } from "../types/index";

/**
 * USPS Tracking Layer
 */
import { UspsTrackingClient } from "../usps/tracking/client";
import { convertUspsTrackingResponse } from "../converters/tracking/usps";

/**
 * FedEx Tracking Layer
 */
import { createFedexTrackingClient } from "../fedex/tracking/client";
import { normalizeFedexTrackingResponse } from "../converters/tracking/fedex";

import { getUspsConfig, getFedexConfig } from "../config";

/**
 * High-level aggregator for multi-carrier tracking operations.
 * 
 * This service provides a unified interface for tracking lookups, abstracting 
 * carrier-specific constraints like batch sizes (35 for USPS, 30 for FedEx) 
 * and varying response schemas. It handles initialization and parallel 
 * execution of batch requests.
 * 
 * @category Aggregators
 */
export class TrackingAggregator {
  /**
   * Orchestrates parallel tracking lookups for multiple USPS packages.
   * 
   * USPS v3.2 enforces a maximum of 35 tracking numbers per request. 
   * This method partitions the input array into compliant batches and 
   * executes them concurrently to optimize performance.
   * 
   * @param trackingNumbers - An array of valid USPS tracking identifier strings.
   * @returns {Promise<NormalizedTracking[]>} Standardized tracking objects.
   * @public
   */
  async trackUspsBatch(trackingNumbers: string[]): Promise<NormalizedTracking[]> {
    const BATCH_SIZE = 35; 
    const chunks: string[][] = [];

    for (let i = 0; i < trackingNumbers.length; i += BATCH_SIZE) {
      chunks.push(trackingNumbers.slice(i, i + BATCH_SIZE));
    }

    const config = getUspsConfig();
    const client = new UspsTrackingClient(config);
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
        } catch (error) {
          // Suppress batch errors to allow partial success
          return [];
        }
      })
    );

    return results.flat();
  }

  /**
   * Orchestrates tracking lookups for FedEx packages.
   * 
   * FedEx Track API v1 supports batching, but to ensure detailed scan 
   * history is retrieved correctly via the 'trackByTrackingNumber' endpoint, 
   * this method executes concurrent individual lookups.
   * 
   * @param trackingNumbers - An array of FedEx tracking numbers.
   * @returns {Promise<NormalizedTracking[]>} Standardized tracking objects.
   * @public
   */
  async trackFedexBatch(trackingNumbers: string[]): Promise<NormalizedTracking[]> {
    const BATCH_SIZE = 30; // FedEx batch limit for safety
    const config = getFedexConfig();
    const client = createFedexTrackingClient(config);
    await client.init();

    const results = await Promise.all(
      trackingNumbers.slice(0, BATCH_SIZE).map(async (num) => {
        try {
          /** 
           * Calling 'getStatus' to match the method name defined 
           * in FedexTrackingClient.
           */
          const raw = await client.getStatus(num);
          return normalizeFedexTrackingResponse(raw);
        } catch (e) {
          return null;
        }
      })
    );

    return results.filter((r): r is NormalizedTracking => r !== null);
  }
}