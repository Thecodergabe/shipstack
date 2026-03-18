/**
 * UPS Address Validation (XAV) Request Builder
 * * This module transforms the agnostic Shipstack AddressValidationRequest into the 
 * specific nested structure required by the UPS XAV (Address Validation & Classification) API.
 */

import { XAVRequestWrapper } from "./generated/index";
import { AddressValidationRequest } from "@/types/index";

/**
 * Transforms a standardized Shipstack address into the UPS-specific XAVRequestWrapper.
 * * * Note: This implementation follows the strict 'XAVRequest' schema which 
 * only accepts 'AddressKeyFormat' as a valid property.
 * * @param {AddressValidationRequest["address"]} address - The agnostic address slice.
 * @returns {XAVRequestWrapper} The formatted UPS address validation payload.
 * @category Builders
 * @public
 */
export function buildUpsAddressRequest(
  address: AddressValidationRequest["address"]
): XAVRequestWrapper {
  return {
    XAVRequest: {
      /**
       * UPS AddressKeyFormat Mapping:
       * - PoliticalDivision2 maps to City.
       * - PoliticalDivision1 maps to State/Province Code.
       * - PostcodePrimaryLow maps to ZIP/Postal Code.
       */
      AddressKeyFormat: {
        AddressLine: address.streetLines,
        PoliticalDivision2: address.city,
        PoliticalDivision1: address.stateOrProvinceCode,
        PostcodePrimaryLow: address.postalCode,
        CountryCode: address.countryCode,
      },
    },
  };
}