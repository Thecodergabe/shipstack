import { AddressValidationRequest, NormalizedAddress } from "../types/index";
import { createUspsAddressClient } from "../usps/address/client";
import { UspsAddressConverter } from "../converters/address/usps";

/**
 * Orchestrates address validation across multiple shipping carriers.
 * * This aggregator provides a single entry point for the library, allowing 
 * users to validate addresses without needing to know carrier-specific 
 * SDK implementations.
 */
export async function validateAddress(request: AddressValidationRequest): Promise<NormalizedAddress> {
  const { carrier, address } = request;

  switch (carrier.toLowerCase()) {
    case "usps":
      return handleUspsValidation(address);

    case "fedex":
      // Future implementation: src/fedex/address/
      throw new Error("FedEx address validation is not yet implemented.");

    default:
      throw new Error(`Carrier '${carrier}' is not supported for address validation.`);
  }
}

/**
 * Internal logic for USPS validation. 
 * Extracts raw data from the SDK and passes it to the centralized converter.
 */
async function handleUspsValidation(address: any): Promise<NormalizedAddress> {
  /**
   * Initialize the USPS client. Credentials must be provided via 
   * global configuration before calling this.
   */
  const client = createUspsAddressClient();
  await client.init();

  /**
   * The client.validateAddress call returns the raw 'AddressResponse' 
   * generated from the OpenAPI spec.
   */
  const rawResponse = await client.validateAddress(address);

  /**
   * We pass the raw response to the converter to get our 
   * standardized 'NormalizedAddress' format.
   */
  return UspsAddressConverter.fromResponse(rawResponse);
}