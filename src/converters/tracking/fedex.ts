import { NormalizedTracking, NormalizedTrackingEvent } from "../../types/tracking";

/**
 * Normalizes a raw FedEx Tracking response into a Shipstack standard.
 * * FedEx returns a complex nested structure for tracking. This converter:
 * 1. Extracts the primary tracking number and status.
 * 2. Attempts to find the most accurate estimated delivery timestamp.
 * 3. Maps scan events to a flat, readable history.
 * * @param raw - The raw response from the FedEx Tracking SDK.
 * @returns {NormalizedTracking} The standardized tracking data.
 */
export function normalizeFedexTrackingResponse(raw: any): NormalizedTracking {
  /**
   * FedEx tracking responses are deeply nested. We target the first 
   * result in the primary tracking array.
   */
  const result = raw?.output?.completeTrackResults?.[0]?.trackResults?.[0];

  if (!result) {
    return {
      carrier: "fedex",
      trackingNumber: "",
      status: "UNKNOWN",
      events: [],
      raw
    };
  }

  const trackingNumber = result.trackingNumber ?? "";

  /**
   * Status prioritization: 
   * 1. Localized status (e.g., 'Delivered' in user's language)
   * 2. General description
   */
  const status =
    result.latestStatusDetail?.statusByLocale ??
    result.latestStatusDetail?.description ??
    "UNKNOWN";

  /**
   * Delivery timestamps:
   * FedEx provides 'derived' estimates based on real-time transit data.
   */
  const estimatedDelivery =
    result.latestStatusDetail?.derivedEstimatedDeliveryTimestamp ??
    result.estimatedDeliveryTimestamp ??
    undefined;

  /**
   * Map Scan Events to the Shipstack timeline.
   */
  const events: NormalizedTrackingEvent[] =
    result.scanEvents?.map((e: any) => ({
      description: e.eventDescription ?? "",
      dateTime: e.date ?? "",
      city: e.arrivalLocation?.city ?? undefined,
      stateOrProvinceCode: e.arrivalLocation?.stateOrProvinceCode ?? undefined,
      postalCode: e.arrivalLocation?.postalCode ?? undefined,
      countryCode: e.arrivalLocation?.countryCode ?? undefined
    })) ?? [];

  return {
    carrier: "fedex",
    trackingNumber,
    status,
    estimatedDelivery,
    events,
    raw
  };
}