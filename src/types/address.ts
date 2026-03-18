/**
 * Request structure for validating and normalizing physical addresses.
 * 
 * This type is used across all carrier adapters to ensure the address
 * conforms to postal standards before attempting to generate rates or labels.
 * 
 * @category Address
 */
export type AddressValidationRequest = {
  /** The specific carrier API to use for validation. */
  carrier: "usps" | "fedex" | "ups";

  /** The address details to be verified. */
  address: {
    /** Array of street lines; most carriers support up to 2 lines for domestic. */
    streetLines: string[];
    /** Full city name. */
    city: string;
    /** 2-character state or province code (e.g., 'NY', 'CA'). */
    stateOrProvinceCode: string;
    /** 5 or 9-digit postal code. */
    postalCode: string;
    /** ISO-3166-1 alpha-2 country code (e.g., 'US', 'CA'). */
    countryCode: string;
  };
};

/**
 * Classification of an address location type.
 * 
 * Used primarily for rate calculation, as residential deliveries 
 * often incur surcharges from carriers like FedEx and UPS.
 */
export type AddressClassification = "RESIDENTIAL" | "COMMERCIAL" | "UNKNOWN";

/**
 * Standardized Address format for the Shipstack library.
 * 
 * This interface is shared across all carrier converters (USPS, FedEx, UPS) 
 * to ensure the end-user receives a consistent object structure regardless 
 * of the underlying carrier API used.
 * 
 * @category Address
 */
export interface NormalizedAddress {
  /** Primary delivery address line (e.g., '123 Main St'). */
  street1: string;
  /** Secondary address line (e.g., 'Apt 4B'). */
  street2?: string;
  /** Full city name. */
  city: string;
  /** 2-character state or province code. */
  state: string;
  /** Postal code in format: 12345 or 12345-6789. */
  postalCode: string;
  /** ISO-3166-1 alpha-2 country code. */
  country: string;
  /** 
   * Delivery Point Validation (DPV): 
   * Confirms if the address is a deliverable location recognized by the carrier. 
   */
  isValid: boolean;
  /** Indicates if the location type is residential or commercial. */
  classification?: AddressClassification;
  /** Indicates if the address is a PO Box, which may restrict certain services. */
  isPoBox: boolean;
  /** 
   * The original raw response from the carrier SDK. 
   * Useful for debugging or accessing carrier-specific metadata. 
   */
  raw?: any;
}

/**
 * The final output of the Address Aggregator.
 * 
 * This structure explicitly separates the validation status from the 
 * suggested (corrected) address data.
 * 
 * @category Address
 */
export interface AddressValidationResult {
  /** Global indicator of whether the input address was resolved successfully. */
  isValid: boolean;
  /** The standardized version of the address returned by the carrier. */
  normalizedAddress?: NormalizedAddress;
  /** Any warnings or footnotes returned (e.g., 'Missing Apartment Number'). */
  messages?: string[];
  /** The raw payload from the carrier for auditing. */
  raw?: any;
}