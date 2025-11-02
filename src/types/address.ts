export type AddressValidationRequest = {
  carrier: "usps" | "fedex" | "ups";
  address: {
    streetLines: string[];
    city: string;
    stateOrProvinceCode: string;
    postalCode: string;
    countryCode: string;
  };
};

export type NormalizedAddress = {
  isValid: boolean;
  corrected?: {
    streetLines: string[];
    city: string;
    stateOrProvinceCode: string;
    postalCode: string;
    countryCode: string;
  };
  raw?: unknown;
};