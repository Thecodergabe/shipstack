/**
 * UPS Tracking Response Converter
 * * Transforms the raw 'TrackApiResponse' from the UPS v1 API into the 
 * library-standard 'NormalizedTracking' format.
 * * This converter extracts data from the first package in a shipment, 
 * as UPS handles tracking history and delivery estimates at the package level.
 */

import { TrackApiResponse } from "@/ups/tracking/generated/index";
import { NormalizedTracking, NormalizedTrackingEvent } from "@/types/index";

/**
 * Standardizes a UPS tracking response.
 * * Maps package-level activity and delivery metadata to the Shipstack format.
 * * @param {TrackApiResponse} raw - The raw JSON response from the UPS Tracking SDK.
 * @returns {NormalizedTracking} Standardized tracking object with scan history.
 * @throws {Error} If the response lacks valid shipment or package objects.
 */
export function normalizeUpsTrackingResponse(raw: TrackApiResponse): NormalizedTracking {
  const shipment = raw.trackResponse?.shipment?.[0];
  const pkg = shipment?.package?.[0]; 

  if (!shipment || !pkg) {
    throw new Error("Shipstack Error: UPS Response contains no shipment or package data.");
  }

  const latestActivity = pkg.activity?.[0];

  /**
   * Map UPS Activity history to standardized events.
   * Note: Maps 'stateProvince' from the UPS Address schema to 'stateOrProvinceCode'.
   */
  const events: NormalizedTrackingEvent[] = (pkg.activity || []).map((event) => ({
    description: event.status?.description || "No description provided",
    dateTime: formatUpsDateTime(event.date, event.time),
    city: event.location?.address?.city,
    stateOrProvinceCode: event.location?.address?.stateProvince,
    countryCode: event.location?.address?.countryCode,
    postalCode: event.location?.address?.postalCode,
  }));

  return {
    carrier: "ups",
    trackingNumber: shipment.inquiryNumber || "UNKNOWN",
    status: latestActivity?.status?.description || "UNKNOWN",
    
    /** * Estimated Delivery is pulled from the Package level metadata.
     */
    estimatedDelivery: pkg.deliveryTime?.endTime,

    events: events,
    raw: raw
  };
}

/**
 * Normalizes UPS proprietary date and time strings into ISO-8601.
 * * UPS provides dates as 'YYYYMMDD' and times as 'HHMMSS'.
 * * @param {string} [date] - Date string (expected 8 chars).
 * @param {string} [time] - Time string (expected 4-6 chars).
 * @returns {string} Standardized ISO-8601 timestamp.
 * @private
 */
function formatUpsDateTime(date?: string, time?: string): string {
  // Fallback to current time if date is missing or malformed
  if (!date || date.length !== 8) return new Date().toISOString();
  
  const y = date.substring(0, 4);
  const m = date.substring(4, 6);
  const d = date.substring(6, 8);
  
  // Return start-of-day if time is missing
  if (!time || time.length < 4) return `${y}-${m}-${d}T00:00:00Z`;
  
  const hh = time.substring(0, 2);
  const mm = time.substring(2, 4);
  const ss = time.substring(4, 6) || "00";
  
  return `${y}-${m}-${d}T${hh}:${mm}:${ss}Z`;
}