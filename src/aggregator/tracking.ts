import { UspsTrackingClient } from "../usps/tracking/client";
import { convertUspsTrackingResponse } from "../converters/tracking/usps";
import { NormalizedTracking } from "../types/index";
import type { TrackingRequest } from "../usps/tracking/generated/index";

/**
 * High-level aggregator for multi-carrier tracking operations.
 * * This service provides a unified interface for bulk tracking, abstracting 
 * carrier-specific constraints like batch sizes, concurrency limits, 
 * and varying response schemas.
 */
export class TrackingAggregator {
  /**
   * @param uspsClient - An initialized instance of the UspsTrackingClient.
   */
  constructor(private uspsClient: UspsTrackingClient) {}

  /**
   * Orchestrates parallel tracking lookups for multiple USPS packages.
   * * USPS v3.2 enforces a maximum of 35 tracking numbers per request. 
   * This method partitions the input array into compliant batches and 
   * executes them concurrently to optimize performance.
   * * @param trackingNumbers - An array of valid USPS tracking identifier strings.
   * @returns A promise resolving to a flattened array of NormalizedTracking objects.
   */
  async trackUspsBatch(trackingNumbers: string[]): Promise<NormalizedTracking[]> {
    /** * Batch size limit per USPS v3.2 JSON schema. 
     * Exceeding 35 results in a 400 Bad Request.
     */
    const BATCH_SIZE = 35; 
    const chunks: string[][] = [];

    // Partition tracking numbers into compliant chunks
    for (let i = 0; i < trackingNumbers.length; i += BATCH_SIZE) {
      chunks.push(trackingNumbers.slice(i, i + BATCH_SIZE));
    }

    /**
     * Execute batch requests in parallel using Promise.all.
     * We map each chunk to the TrackingRequest format required by the USPS SDK.
     */
    const results = await Promise.all(
      chunks.map(async (chunk) => {
        try {
          /**
           * Construct the TrackingRequest array for this specific batch.
           */
          const requestBody: TrackingRequest = chunk.map(num => ({
            trackingNumber: num
          }));

          /**
           * Execute via the tracking client.
           * Note: Ensure getBulkStatus is defined in src/usps/tracking/client.ts
           * to avoid 'any' casting.
           */
          const rawResponse = await this.uspsClient.getBulkStatus(chunk);
          
          /**
           * Standardize each detail object within the batch response.
           * USPS v3 usually returns trackingDetails as an array.
           */
          const details = rawResponse?.trackingDetails || rawResponse?.trackingDetail || [];
          const normalizedBatch = Array.isArray(details) ? details : [details];

          return normalizedBatch.map((detail: any) => 
            convertUspsTrackingResponse(detail)
          );
        } catch (error) {
          /**
           * Fail-safe: Individual batch failures (like a single 404 or 500) 
           * are suppressed to ensure partial results are returned for the 
           * remaining numbers in the global request.
           */
          return [];
        }
      })
    );

    /**
     * Merge all parallel batch results into a single flat array of 
     * NormalizedTracking objects.
     */
    return results.flat();
  }
}