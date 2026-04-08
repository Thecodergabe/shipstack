import { AddressValidationRequest } from "@/types/index";

/**
 * FedEx Address Validation Request Builder
 * * Transforms a standardized Shipstack address object into the specific 
 * JSON schema required by the FedEx v1 Address Validation API.
 * * @param {AddressValidationRequest["address"]} address - The agnostic address slice from the request.
 * @returns {any} A formatted FedEx 'addressesToValidate' payload.
 * @category Builders
 * @public
 */
export function buildFedexAddressRequest(
  address: AddressValidationRequest["address"]
): any {
  const streetLines = (address as any).streetLinesToken || address.streetLines || [];
  return {
    /**
     * FedEx v1 supports batch validation, but for standard library 
     * use, we wrap a single address in the required array format.
     */
    addressesToValidate: [
      {
        address: {
          streetLines: Array.isArray(streetLines) ? streetLines : [streetLines],
          city: address.city,
          stateOrProvinceCode: address.stateOrProvinceCode,
          postalCode: address.postalCode,
          countryCode: address.countryCode,
        },
      },
    ],
  };
}