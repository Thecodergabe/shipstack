import { AddressValidationRequest } from "@/types/index";

/**
 * Transforms a normalized Shipstack address into the specific schema 
 * required by the USPS Addresses v3 API.
 * * * Handles the mapping of generic `streetLines` to USPS `streetAddress` 
 * and `secondaryAddress` (Apt, Suite, etc.).
 * * Provides placeholders for USPS-specific fields like `firm` and `urbanization` 
 * to ensure schema compatibility with the generated SDK.
 * * @param req - The address portion of a standardized AddressValidationRequest.
 * @returns An object compatible with the USPS Address v3 validation endpoint.
 */
export function buildUspsAddressParams(req: AddressValidationRequest["address"]) {
  return {
    /** Primary delivery address line (e.g., '123 Main St') */
    streetAddress: req.streetLines[0] || "",
    
    /** 2-character State code (e.g., 'NY') */
    state: req.stateOrProvinceCode,
    
    /** City name */
    city: req.city,
    
    /** Secondary address line (e.g., 'Apt 4B', 'Suite 100') */
    secondaryAddress: req.streetLines[1] || "", 
    
    /** 5-digit Base ZIP Code */
    zipCode: req.postalCode,

    /* --- USPS v3 Positional Placeholders --- */
    
    /** Optional Business/Firm name associated with the address */
    firm: undefined,
    
    /** Required for Puerto Rico addresses to identify specific areas */
    urbanization: undefined,
    
    /** The 4-digit ZIP extension (if already known) */
    zipPlus4: undefined,
  };
}