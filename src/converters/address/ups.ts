/**
 * UPS Address Response Converter
 * * Normalizes the complex, nested UPS XAV (Address Validation & Classification) 
 * response into the standardized Shipstack 'NormalizedAddress' format.
 */

import { XAVResponseWrapper, XAVResponse_Candidate } from "@/ups/address/generated/index";
import { NormalizedAddress, AddressClassification } from "@/types/address";

/**
 * Transforms a raw UPS XAVResponseWrapper into a standardized NormalizedAddress.
 * * This converter extracts the primary candidate from the UPS response, 
 * maps the nested 'AddressKeyFormat' to flat fields, and translates 
 * UPS-specific classification codes.
 * * @param {XAVResponseWrapper} response - The raw JSON payload from the UPS XAV API.
 * @returns {NormalizedAddress} A cleansed, carrier-agnostic address object.
 * @category Converters
 * @public
 */
export function normalizeUpsAddressResponse(response: XAVResponseWrapper): NormalizedAddress {
  const xavResponse = response?.XAVResponse;
  
  /**
   * UPS returns an array of candidates. We prioritize the first candidate 
   * as the most statistically likely match provided by the UPS engine.
   */
  const candidate = xavResponse?.Candidate?.[0] as XAVResponse_Candidate | undefined;

  // If no candidates are found, the address is considered invalid.
  if (!candidate) {
    return {
      street1: "",
      city: "",
      state: "",
      postalCode: "",
      country: "US",
      isValid: false,
      isPoBox: false,
      classification: "UNKNOWN",
      raw: response
    };
  }

  const addr = candidate.AddressKeyFormat;

  return {
    /**
     * UPS AddressLine is returned as an array of strings.
     * Index 0 is the primary street, Index 1+ are secondary lines.
     */
    street1: addr?.AddressLine?.[0] || "",
    street2: addr?.AddressLine?.[1] || undefined,
    
    city: addr?.PoliticalDivision2 || "",
    state: addr?.PoliticalDivision1 || "",
    
    /**
     * Map Postal Code and Extension (ZIP+4) to the standard 12345-6789 format.
     */
    postalCode: addr?.PostcodeExtendedLow 
      ? `${addr.PostcodePrimaryLow}-${addr.PostcodeExtendedLow}`
      : addr?.PostcodePrimaryLow || "",
      
    country: addr?.CountryCode || "US",

    /**
     * Logic for validity:
     * UPS considers an address valid if it returns candidates and 
     * doesn't flag a total failure in the ResponseStatus.
     */
    isValid: xavResponse?.Response?.ResponseStatus?.Code === "1",

    /**
     * UPS doesn't always provide an explicit 'isPoBox' flag in the REST XAV response.
     * We perform a secondary check on the address lines for safety.
     */
    isPoBox: addr?.AddressLine?.some(line => line.toLowerCase().includes("po box")) || false,

    /**
     * Map UPS Address Classification to Shipstack types.
     */
    classification: mapUpsClassification(candidate.AddressClassification?.Code),

    raw: response
  };
}

/**
 * Maps UPS-specific Address Classification codes to Shipstack standard types.
 * * UPS Codes:
 * - 0: Unknown
 * - 1: Commercial
 * - 2: Residential
 * * @param {string | undefined} code - The classification code from UPS.
 * @returns {AddressClassification}
 * @private
 */
function mapUpsClassification(code?: string): AddressClassification {
  switch (code) {
    case "1":
      return "COMMERCIAL";
    case "2":
      return "RESIDENTIAL";
    default:
      return "UNKNOWN";
  }
}