import type { AddressResponse } from "../../usps/address/generated/models/AddressResponse";
import { AddressAdditionalInfo } from "../../usps/address/generated/models/AddressAdditionalInfo";
import { NormalizedAddress } from "../../types/address";

/**
 * Transforms a raw USPS AddressResponse into a NormalizedAddress.
 * * Extracts DPV (Delivery Point Validation) markers and business flags 
 * to determine deliverability and location classification.
 * * @param response - The raw payload from the USPS Address v3 API.
 * @returns {NormalizedAddress} A cleansed, carrier-agnostic address object.
 */
export function normalizeUspsAddressResponse(response: any): NormalizedAddress {
  const addr = response?.address;
  const info = response?.additionalInfo as AddressAdditionalInfo;

  /**
   * DPV Logic per USPS v3 Docs:
   * Y: Confirmed (Primary & Secondary)
   * S: Primary confirmed, Secondary present but not confirmed
   * D: Primary confirmed, Secondary missing
   */
  const validDpv = [
    AddressAdditionalInfo.DPVConfirmation.Y,
    AddressAdditionalInfo.DPVConfirmation.S,
    AddressAdditionalInfo.DPVConfirmation.D,
  ];

  const isValid = info?.DPVConfirmation ? validDpv.includes(info.DPVConfirmation) : false;

  return {
    street1: addr?.streetAddress?.trim() || "",
    street2: addr?.secondaryAddress?.trim() || undefined,
    city: addr?.city?.trim() || "",
    state: addr?.state?.trim() || "",
    postalCode: addr?.ZIPPlus4 
      ? `${addr.ZIPCode}-${addr.ZIPPlus4}` 
      : addr?.ZIPCode || "",
    country: "US",
    isValid,
    isPoBox: addr?.streetAddress?.toLowerCase().includes("po box") || 
             response?.firm?.toLowerCase().includes("po box") || 
             false,
    /**
     * Map USPS business flag to our internal classification.
     */
    classification: info?.business === AddressAdditionalInfo.business.Y 
      ? "COMMERCIAL" 
      : "RESIDENTIAL",
    raw: response
  };
}