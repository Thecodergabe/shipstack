/**
 * Represents a single point-in-time update in the journey of a package.
 * * This type normalizes diverse carrier event structures (e.g., USPS 'statusDetails' 
 * vs FedEx 'scanEvents') into a standard chronological log.
 */
export type NormalizedTrackingEvent = {
  /** A human-readable description of the event (e.g., 'Arrived at Post Office'). */
  description: string;
  /** ISO-8601 formatted date and time of the event occurrence. */
  dateTime: string;
  /** The city where the scan occurred. */
  city?: string;
  /** 2-character state or province code (e.g., 'TX'). */
  stateOrProvinceCode?: string;
  /** The postal code of the scanning facility. */
  postalCode?: string;
  /** ISO-3166-1 alpha-2 country code. */
  countryCode?: string;
};

/**
 * Normalized tracking state for a specific package.
 * * This structure provides a unified view of a shipment's progress across 
 * different carriers, making it ideal for tracking dashboards or automated 
 * status notifications.
 */
export type NormalizedTracking = {
  /** The carrier currently handling the shipment. */
  carrier: "usps" | "fedex" | "ups";
  /** The unique identifier for the package. */
  trackingNumber: string;
  /** The current high-level status (e.g., 'DELIVERED', 'IN_TRANSIT'). */
  status: string;
  /** * Predicted date and time of arrival. 
   * Formatted as an ISO-8601 string.
   */
  estimatedDelivery?: string;
  /** * A chronological list of all scan events associated with this tracking number.
   * Typically ordered from newest to oldest.
   */
  events: NormalizedTrackingEvent[];
  /** * The original raw response from the carrier (e.g., USPS Tracking v3 JSON).
   * Useful for accessing carrier-specific internal codes or raw XML/JSON.
   */
  raw?: unknown;
};