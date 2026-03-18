/**
 * Shipstack Internal Address Aggregator
 * * Handles the orchestration of carrier-specific address validation.
 * This file contains private helpers to keep the main 'validateAddress' API clean.
 */

import { NormalizedAddress, AddressValidationRequest } from "../types/index";
import { ShippingConfig } from "../config";
import { ShipstackError } from "../errors";

// USPS Internal Modules
import { createUspsAddressClient } from "../usps/address/client";
import { buildUspsAddressParams } from "../usps/address/request";

// FedEx Internal Modules
import { createFedexAddressClient } from "../fedex/address/client";
import { buildFedexAddressRequest } from "../fedex/address/request";

/**
 * Handles USPS-specific validation logic.
 * * This helper ensures the USPS client is initialized with library-agnostic config
 * and maps the standardized Shipstack address to the USPS v3 schema.
 * * @param {AddressValidationRequest["address"]} address - The agnostic address object.
 * @param {ShippingConfig} config - The global library configuration.
 * @returns {Promise<NormalizedAddress>} A standardized Shipstack address object.
 * @throws {ShipstackError} If USPS configuration is missing or the API call fails.
 * @private
 */
async function handleUspsValidation(
  address: AddressValidationRequest["address"], 
  config: ShippingConfig
): Promise<NormalizedAddress> {
  if (!config.usps) {
    throw new ShipstackError("USPS configuration missing in ShippingConfig.", "usps");
  }

  /** * FIX: Pass the config slice to the factory (Expected 1 argument)
   */
  const client = createUspsAddressClient(config.usps);
  
  /** * Initialization sets up the OpenAPI context without process.env
   */
  await client.init();
  
  /** * MAPPING: Transform agnostic address to USPS params.
   */
  const params = buildUspsAddressParams(address);

  /** * FIX: Call the correct method name 'verifyAddress' 
   */
  return await client.verifyAddress(params);
}

/**
 * Handles FedEx-specific validation logic.
 * * @param {AddressValidationRequest["address"]} address - The agnostic address object.
 * @param {ShippingConfig} config - The global library configuration.
 * @returns {Promise<NormalizedAddress>} A standardized Shipstack address object.
 * @throws {ShipstackError} If FedEx configuration is missing.
 * @private
 */
async function handleFedexValidation(
  address: AddressValidationRequest["address"],
  config: ShippingConfig
): Promise<NormalizedAddress> {
  if (!config.fedex) {
    throw new ShipstackError("FedEx configuration missing in ShippingConfig.", "fedex");
  }

  const client = createFedexAddressClient(config.fedex);
  await client.init();

  const payload = buildFedexAddressRequest(address);
  
  /**
   * FedEx validation returns a NormalizedAddress via its internal converter.
   */
  return await client.validateAddress(payload);
}

/**
 * Exporting helpers for the main API index
 */
export { handleUspsValidation, handleFedexValidation };