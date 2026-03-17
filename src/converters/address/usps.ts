import type { AddressResponse } from "../../usps/address/generated/models/AddressResponse";

/**
 * Standardized Address format for the Shipstack library.
 * This interface is shared across all carrier converters to ensure
 * the end-user receives a consistent object structure.
 */
export interface NormalizedAddress {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  /** Format: 12345 or 12345-6789 */
  postalCode: string;
  country: string;
  /** Delivery Point Validation: Confirms if the address is a deliverable location */
  isValid: boolean;
  /** Indicates if the address is a PO Box, affecting carrier service availability */
  isPoBox: boolean;
  /** Optional raw response for carrier-specific attributes like Residential/Commercial flags */
  raw?: any;
}

/**
 * Transforms USPS v3 AddressResponse into a NormalizedAddress.
 * Handles string normalization, ZIP+4 concatenation, and DPV validation logic.
 */
export class UspsAddressConverter {
  /**
   * Maps raw USPS SDK response to the Shipstack NormalizedAddress.
   * * @param response - The raw object returned from the USPS address validation endpoint.
   * @returns A clean, agnostic address object.
   */
  static fromResponse(response: AddressResponse): NormalizedAddress {
    const addr = response.address;

    /**
     * USPS v3 Validation Logic:
     * 'isValid' should reflect Delivery Point Validation (DPV). 
     * In the v3 API, an address is typically considered valid if the response 
     * code is 'Y' or 'S'. If the API returns an error or a blank ZIP, it's invalid.
     */
    const dpvConfirmed = (response as any).dpvConfirmation === 'Y' || (response as any).dpvConfirmation === 'S';
    const hasBaseZip = !!addr?.ZIPCode;

    return {
      street1: addr?.streetAddress?.trim() || "",
      street2: addr?.secondaryAddress?.trim() || undefined,
      city: addr?.city?.trim() || "",
      state: addr?.state?.trim() || "",
      postalCode: addr?.ZIPPlus4 
        ? `${addr.ZIPCode}-${addr.ZIPPlus4}` 
        : addr?.ZIPCode || "",
      country: "US", // USPS v3 Domestic Address API is strictly US-based
      
      /** * isValid is true only if the address is confirmed as a delivery point 
       * and contains at least a base ZIP code.
       */
      isValid: dpvConfirmed && hasBaseZip, 
      
      /** * Simple string check for PO Box. 
       * Note: Some USPS responses include a 'poBoxFlag' which we prioritize if available.
       */
      isPoBox: (response as any).poBoxFlag === 'Y' || 
               addr?.streetAddress?.toLowerCase().includes("po box") || 
               false,
      
      raw: response
    };
  }
}