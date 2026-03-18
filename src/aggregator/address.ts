/**
 * Shipstack Internal Address Aggregator
 * * Orchestrates carrier-specific address validation and normalization.
 * * This module serves as the private bridge between the public-facing API 
 * and the individual carrier service clients. It ensures that incoming 
 * requests are mapped to the correct SDK and that responses are 
 * standardized into the universal Shipstack format.
 * * @module Aggregator/Address
 */

import { NormalizedAddress, AddressValidationRequest } from "@/types/index";
import { ShippingConfig } from "@/config";
import { ShipstackError } from "@/errors";

import { createUspsAddressClient } from "@/usps/address/client";
import { buildUspsAddressParams } from "@/usps/address/request";

import { createFedexAddressClient } from "@/fedex/address/client";
import { buildFedexAddressRequest } from "@/fedex/address/request";

import { createUpsAddressClient } from "@/ups/address/client";
import { buildUpsAddressRequest } from "@/ups/address/request";

/**
 * Handles USPS-specific validation logic using the Domestic Prices/Address v3 API.
 * * @param {AddressValidationRequest["address"]} address - The universal Shipstack address object.
 * @param {ShippingConfig} config - Global configuration containing USPS credentials.
 * @returns {Promise<NormalizedAddress>} A standardized verified address.
 * @throws {ShipstackError} If USPS credentials are missing or the API call fails.
 * @private
 */
async function handleUspsValidation(
  address: AddressValidationRequest["address"], 
  config: ShippingConfig
): Promise<NormalizedAddress> {
  if (!config.usps) {
    throw new ShipstackError("USPS configuration missing in ShippingConfig.", "usps");
  }

  const client = createUspsAddressClient(config.usps);
  await client.init();
  
  const params = buildUspsAddressParams(address);
  return await client.verifyAddress(params);
}

/**
 * Handles FedEx-specific validation logic using the FedEx Address Validation API.
 * * @param {AddressValidationRequest["address"]} address - The universal Shipstack address object.
 * @param {ShippingConfig} config - Global configuration containing FedEx credentials.
 * @returns {Promise<NormalizedAddress>} A standardized verified address.
 * @throws {ShipstackError} If FedEx credentials are missing.
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
  return await client.validateAddress(payload);
}

/**
 * Handles UPS-specific Extended Address Validation (XAV).
 * * UPS XAV is utilized to provide high-precision validation and to distinguish 
 * between Residential and Commercial classifications, which is essential 
 * for accurate rating and label generation.
 * * @param {AddressValidationRequest["address"]} address - The universal Shipstack address object.
 * @param {ShippingConfig} config - Global configuration containing UPS credentials.
 * @returns {Promise<NormalizedAddress>} A standardized verified address.
 * @throws {ShipstackError} If UPS credentials are missing.
 * @private
 */
async function handleUpsValidation(
  address: AddressValidationRequest["address"],
  config: ShippingConfig
): Promise<NormalizedAddress> {
  if (!config.ups) {
    throw new ShipstackError("UPS configuration missing in ShippingConfig.", "ups");
  }

  const client = createUpsAddressClient(config.ups);
  
  // Note: UPS Client handles OAuth2 initialization internally based on provided config
  const payload = buildUpsAddressRequest(address);
  
  return await client.validateAddress(payload);
}

export { handleUspsValidation, handleFedexValidation, handleUpsValidation };