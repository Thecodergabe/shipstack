/**
 * Request structure for validating and normalizing physical addresses.
 * * This type is used across all carrier adapters to ensure the address
 * conforms to postal standards before attempting to generate rates or labels.
 */
export type AddressValidationRequest = {
  /** The specific carrier API to use for validation (e.g., USPS Address v3) */
  carrier: "usps" | "fedex" | "ups";

  /** * The address details to be verified.
   */
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
 * Normalized result of an address validation attempt.
 * * This format bridges the differences between carrier responses (e.g., USPS 
 * 'DPV' codes vs FedEx 'Effective' status) into a simple boolean and 
 * optional corrected object.
 */
export type NormalizedAddress = {
  /** * Indicates if the address is deliverable and recognized by the carrier's 
   * primary database. 
   */
  isValid: boolean;

  /** * The carrier-corrected version of the address (e.g., fixing typos, 
   * adding ZIP+4, or converting 'Street' to 'ST').
   * * Only returned if the carrier provides a suggested correction.
   */
  corrected?: {
    streetLines: string[];
    city: string;
    stateOrProvinceCode: string;
    postalCode: string;
    countryCode: string;
  };

  /** * The raw response from the carrier (e.g., UspsAddressSdk response) 
   * for access to specific metadata like 'IsCommercial' or 'IsMountainArea'.
   */
  raw?: unknown;
};