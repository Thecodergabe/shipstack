// src/converters/address/fedex.ts
import { NormalizedAddress } from "../../types/index";

export function convertFedexAddressResponse(raw: any): NormalizedAddress {
  const output = raw?.output;
  const resolved = output?.resolvedAddresses?.[0];

  // If FedEx could not resolve the address
  if (!resolved || !resolved.address) {
    return {
      isValid: false,
      raw
    };
  }

  const addr = resolved.address;

  return {
    isValid: true,
    corrected: {
      streetLines: addr.streetLines ?? [],
      city: addr.city ?? "",
      stateOrProvinceCode: addr.stateOrProvinceCode ?? "",
      postalCode: addr.postalCode ?? "",
      countryCode: addr.countryCode ?? "US"
    },
    raw
  };
}