/**
 * Generic request structure for retrieving shipping rates from specific carriers.
 * * This type acts as a bridge between the ShipStack core and carrier-specific 
 * logic, housing both universal logistics data (weight/dims) and specific 
 * flags like USPS 'nonStandard' or FedEx 'pickupType'.
 */
export type RateRequest = {
  /** The carrier to query (e.g., 'usps' triggers the Domestic Prices v3 API). */
  carrier: "fedex" | "usps" | "ups";

  /* --- Common Logistics Fields --- */
  
  /** 5-digit origin postal code. */
  originZip: string;
  /** 5-digit destination postal code. */
  destZip: string;
  /** Package weight in Ounces (converted to Pounds internally for USPS). */
  weightOz: number;
  /** Physical length in inches. */
  lengthInches: number;
  /** Physical width in inches. */
  widthInches: number;
  /** Physical height in inches. */
  heightInches: number;

  /** * Destination Country Code (ISO-3166-1 alpha-2). 
   * Essential for International Rates to determine zone and service availability.
   * Defaults to 'US' in most builder implementations.
   */
  destCountryCode?: string;

  /* --- USPS Specific Service Flags --- */
  
  /** Indicates irregular/non-machinable characteristics. */
  nonStandard?: boolean;
  /** The date the package is intended to be mailed. */
  mailingDate?: string;
  /** Specific mail class filter (e.g., 'PRIORITY_MAIL'). */
  mailClass?: string;
  /** USPS payment account category. */
  accountType?: "EPS" | "PERMIT" | "METER";
  /** The unique USPS account string. */
  accountNumber?: string;

  /* --- FedEx Specific Service Flags --- */
  
  /** FedEx-specific packaging (e.g., 'FEDEX_ENVELOPE'). */
  packagingType?: string; 
  /** Instructions for package collection. */
  pickupType?: string; 
  /** Instructions for package drop-off. */
  dropoffType?: string; 
  /** Requested rate calculation types (e.g., ['LIST', 'ACCOUNT']). */
  rateRequestType?: string[]; 
  /** Optional correlation ID for FedEx logs. */
  transactionId?: string;
  /** BCP-47 language tag (e.g., 'en-US'). */
  locale?: string;
};

/**
 * Normalized shipping rate returned to the consuming application.
 * * This object removes carrier-specific nesting, providing a flat structure 
 * optimized for UI components like checkout tables or shipping calculators.
 */
export type NormalizedRate = {
  /** The carrier that provided this specific rate. */
  carrier: "usps" | "fedex" | "ups";
  /** The machine-readable service identifier (e.g., 'USPS_GROUND_ADVANTAGE'). */
  serviceCode: string;
  /** The customer-facing service name (e.g., 'Ground Advantage'). */
  serviceName: string;
  /** Estimated business days for transit. */
  deliveryDays?: number;
  /** ISO-8601 formatted date for predicted arrival. */
  estimatedArrival?: string;
  /** Flag for the fastest available option in a multi-rate response. */
  isFastest?: boolean;
  /** Flag for the lowest-cost option in a multi-rate response. */
  isCheapest?: boolean;
  /** Indicates if the delivery time is carrier-guaranteed. */
  guaranteed?: boolean;
  /** * Financial breakdown of the rate. 
   */
  cost: {
    /** Total price including base postage and requested extra services. */
    amount: number;
    /** Three-letter currency code (e.g., 'USD'). */
    currency: string;
  };
  /** * The original, unformatted response from the carrier. 
   * Useful for auditing or accessing vendor-specific metadata.
   */
  raw?: unknown;
};