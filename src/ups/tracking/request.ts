/**
 * UPS Tracking Request Handler
 * * Provides a standardized execution wrapper for the UPS v1 Tracking API.
 * This module abstracts the generated OpenAPI method 'getSingleTrackResponseUsingGet'
 * to ensure consistent headers and query parameters across the library.
 */

import { TrackApiResponse } from "./generated/index";
import { createUpsTrackingClient } from "./client";
import { UpsConfig } from "@/config";

/**
 * Options for tracking requests.
 * * Allows the library user to toggle advanced tracking data like
 * Proof of Delivery (POD) or delivery signatures.
 */
export interface UpsTrackingOptions {
  /** If true, returns the delivery signature image (Base64) */
  includeSignature?: boolean;
  /** If true, returns detailed milestone data for the shipment */
  includeMilestones?: boolean;
  /** If true, returns Proof of Delivery (POD) metadata */
  includePod?: boolean;
  /** ISO Language/Country code (e.g., 'en_US') */
  locale?: string;
}

/**
 * Executes a single-package tracking inquiry.
 * * This function instantiates the TrackingService via the provided configuration
 * and handles the mandatory UPS transaction headers.
 * * @param {string} trackingNumber - The 7-34 character UPS tracking identifier.
 * @param {UpsConfig} config - The user-provided UPS credentials.
 * @param {UpsTrackingOptions} options - Optional flags for extra tracking data.
 * @returns {Promise<TrackApiResponse>} The raw response from the UPS Tracking API.
 * @throws {Error} If the tracking number is malformed or the API returns a 4xx/5xx.
 */
export async function fetchUpsTracking(
  trackingNumber: string,
  config: UpsConfig,
  options: UpsTrackingOptions = {}
): Promise<TrackApiResponse> {
  const service = createUpsTrackingClient(config);

  /**
   * UPS v1 Tracking Requirements:
   * 1. transId: Must be unique per request for logging/auditing.
   * 2. transactionSrc: Identifies the library (Shipstack).
   * 3. Booleans must be passed as string 'true'/'false'.
   */
  const transId = `Shipstack-${Date.now()}-${Math.random().toString(36).substring(7)}`;

  return await service.getSingleTrackResponseUsingGet(
    trackingNumber,
    transId,
    options.locale || "en_US",
    options.includeSignature ? "true" : "false",
    options.includeMilestones ? "true" : "false",
    options.includePod ? "true" : "false",
    "Shipstack-v1" // transactionSrc
  );
}