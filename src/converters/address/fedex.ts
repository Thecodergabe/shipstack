import { NormalizedAddress, AddressClassification } from "@/types/address";

/**
 * Normalizes a raw FedEx Address Resolution response into a Shipstack NormalizedAddress.
 * * Maps FedEx 'resolvedAddresses' to the flat NormalizedAddress structure.
 * * Handles the conversion of FedEx classification strings to Shipstack types.
 */
export function normalizeFedexAddressResponse(raw: any): NormalizedAddress {
  const resolved = raw?.output?.resolvedAddresses?.[0];

  // If no resolution found, return a valid object structure with isValid: false
  if (!resolved) {
    return {
      street1: "",
      city: "",
      state: "",
      postalCode: "",
      country: "US", // Matches your 'country' field
      isValid: false,
      isPoBox: false,
      classification: "UNKNOWN",
      raw
    };
  }

  return {
    // FedEx resolved address lines
    street1: resolved.streetLines?.[0] || "",
    street2: resolved.streetLines?.[1] || undefined,
    city: resolved.city || "",
    state: resolved.stateOrProvinceCode || "",
    postalCode: resolved.postalCode || "",
    country: resolved.countryCode || "US",
    
    // Logic for validity and PO Box
    isValid: resolved.classification !== "UNDETERMINED",
    isPoBox: !!resolved.attributes?.poBox, // FedEx usually provides this in attributes
    
    // Map FedEx classification string to Shipstack AddressClassification
    classification: mapFedexClassification(resolved.classification),
    
    raw
  };
}

/**
 * Helper to map FedEx-specific classification strings to our standard types.
 */
function mapFedexClassification(fedexClass: string): AddressClassification {
  switch (fedexClass) {
    case "RESIDENTIAL":
      return "RESIDENTIAL";
    case "BUSINESS":
      return "COMMERCIAL";
    default:
      return "UNKNOWN";
  }
}