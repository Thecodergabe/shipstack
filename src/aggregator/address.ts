import { AddressValidationRequest, NormalizedAddress } from "../types/address";
import { createUspsAddressClient } from "../usps/address/client";
import { normalizeUspsAddressResponse } from "../converters/address/usps";
import { createFedexAddressClient } from "../fedex/address/client";
import { normalizeFedexAddressResponse } from "../converters/address/fedex";
import { getFedexConfig } from "../config";

/**
 * Universal Address Validation Aggregator.
 * 
 * Orchestrates address validation requests across supported carriers. 
 * This is the primary library entry point for verifying deliverability 
 * and retrieving carrier-suggested address corrections.
 * 
 * @param request - The agnostic AddressValidationRequest containing the carrier and address.
 * @returns {Promise<NormalizedAddress>} A standardized validation result.
 * @throws {Error} If the specified carrier is unsupported or the API request fails.
 */
export async function validateAddress(request: AddressValidationRequest): Promise<NormalizedAddress> {
  const { carrier, address } = request;

  switch (carrier.toLowerCase()) {
    case "usps":
      return handleUspsValidation(address);

    case "fedex":
      return handleFedexValidation(address);

    default:
      throw new Error(`Carrier '${carrier}' is not supported for address validation.`);
  }
}

/**
 * Handles USPS-specific validation logic.
 * 
 * @param address - The raw address object from the request.
 * @returns {Promise<NormalizedAddress>}
 * @private
 */
async function handleUspsValidation(address: any): Promise<NormalizedAddress> {
  const client = createUspsAddressClient();
  await client.init();
  
  // The USPS Client returns a raw 'AddressResponse'
  const rawResponse = await client.validateAddress(address);

  // Use the converter to transform 'AddressResponse' -> 'NormalizedAddress'
  return normalizeUspsAddressResponse(rawResponse);
}

/**
 * Handles FedEx-specific validation logic.
 * 
 * @param address - The raw address object from the request.
 * @returns {Promise<NormalizedAddress>}
 * @private
 */
async function handleFedexValidation(address: any): Promise<NormalizedAddress> {
  const config = getFedexConfig();
  const client = createFedexAddressClient(config);
  await client.init();

  // Mapping agnostic address to FedEx resolvedAddress format
  const rawResponse = await client.validateAddress({
    addressesToValidate: [
      {
        address: {
          streetLines: address.streetLines,
          city: address.city,
          stateOrProvinceCode: address.stateOrProvinceCode,
          postalCode: address.postalCode,
          countryCode: address.countryCode,
        },
      },
    ],
  });

  // Use the converter to transform 'AdvcResponseVO' -> 'NormalizedAddress'
  return normalizeFedexAddressResponse(rawResponse);
}