import { NormalizedTracking, NormalizedTrackingEvent } from "../../types/index";

/**
 * Interface representing a simplified summary of a tracking event.
 */
export interface TrackingStatusSummary {
  /** Standardized status string for UI/Logic mapping */
  status: "pending" | "in_transit" | "out_for_delivery" | "delivered" | "error";
  /** The human-readable description from the carrier */
  description: string;
  /** Combined location string (e.g., "CHICAGO, IL") */
  location: string;
  /** ISO or Carrier-formatted timestamp of the event */
  timestamp: string;
}

/**
 * Converts a raw USPS v3 Tracking API response into a standardized Shipstack format.
 * * USPS v3 often returns an array of trackingDetails. This converter identifies the 
 * primary detail object and maps its internal event structure to NormalizedTracking.
 *
 * @param raw - The raw JSON response from the USPS tracking endpoint.
 * @returns A NormalizedTracking object containing events and current status.
 */
export function convertUspsTrackingResponse(raw: any): NormalizedTracking {
  // USPS v3 can be deeply nested or return the object directly depending on the SDK wrapper
  const detail =
    raw?.trackingDetails?.[0] ??
    raw?.trackingDetail ??
    raw ??
    {};

  const events: NormalizedTrackingEvent[] = Array.isArray(detail.events)
    ? detail.events.map((e: any) => {
        const locationParts = (e.eventLocation ?? "").split(",").map((s: string) => s.trim());
        const [city, state] = locationParts.length >= 2 ? locationParts : [locationParts[0], ""];

        return {
          description: e.eventDescription ?? "",
          dateTime: e.eventDateTime ?? e.eventDate ?? "",
          city: city || "",
          stateOrProvinceCode: state || "",
          postalCode: e.postalCode ?? undefined,
          countryCode: "US"
        };
      })
    : [];

  return {
    carrier: "usps",
    trackingNumber: detail.trackingNumber ?? "",
    /** * USPS v3 prioritizes 'statusCategory' for high-level status, 
     * falling back to 'status' for specific legacy codes.
     */
    status: detail.statusCategory ?? detail.status ?? "UNKNOWN",
    estimatedDelivery: detail.expectedDeliveryDate ?? undefined,
    events,
    raw // Keep raw data for advanced user troubleshooting
  };
}

/**
 * Maps carrier-specific status categories to a strictly defined set of Shipstack statuses.
 * * @param raw - A single status object or tracking detail from USPS.
 * @returns A TrackingStatusSummary with a normalized status key.
 */
export function normalizeUspsStatus(raw: any): TrackingStatusSummary {
  const event = raw.statusCategory || ""; 
  
  const statusMap: Record<string, TrackingStatusSummary["status"]> = {
    "Delivered": "delivered",
    "Out for Delivery": "out_for_delivery",
    "In Transit": "in_transit",
    "Accepted": "in_transit",
    "Pre-Shipment": "pending",
    "Alert": "error",
    "Return to Sender": "error"
  };

  return {
    status: statusMap[event] || "in_transit",
    description: raw.statusDescription || "Status information unavailable",
    location: raw.location || `${raw.city || ""}, ${raw.state || ""}`.replace(/^,\s*/, "").trim(),
    timestamp: raw.statusDate || new Date().toISOString()
  };
}