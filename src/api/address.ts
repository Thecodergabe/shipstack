/**
 * Shipstack Address API
 * * Provides a unified interface for physical address validation and normalization 
 * across USPS, FedEx, and UPS. This module handles carrier-specific client 
 * initialization and parameter mapping.
 */

import { 
  AddressValidationRequest, 
  AddressValidationResult 
} from "@/types/index";
import { ShippingConfig } from "@/config";
import { ShipstackError } from "@/errors";

import { createUspsAddressClient } from "@/usps/address/client";
import { buildUspsAddressParams } from "@/usps/address/request";

import { createFedexAddressClient } from "@/fedex/address/client";
import { buildFedexAddressRequest } from "@/fedex/address/request";

import { createUpsAddressClient } from "@/ups/address/client";
import { buildUpsAddressRequest } from "@/ups/address/request";

/**
 * Validates and standardizes a physical address using the specified carrier.
 * * This method orchestrates the full validation lifecycle:
 * 1. Verifies carrier-specific credentials in the provided configuration.
 * 2. Maps the agnostic Shipstack address format to the carrier's required schema.
 * 3. Executes the remote validation call.
 * 4. Returns a standardized result including the normalization status.
 * * @param {AddressValidationRequest} req - The universal address request payload.
 * @param {ShippingConfig} config - The library configuration containing carrier credentials.
 * @returns {Promise<AddressValidationResult>} The validation status and normalized address data.
 * @throws {ShipstackError} If configuration is missing or the carrier API rejects the request.
 * @public
 */
export async function validateAddress(
  req: AddressValidationRequest,
  config: ShippingConfig
): Promise<AddressValidationResult> {
  const carrier = req.carrier.toLowerCase();

  switch (carrier) {
    case "usps": {
      if (!config.usps) {
        throw new ShipstackError("USPS configuration missing in ShippingConfig.", "usps");
      }

      const client = createUspsAddressClient(config.usps);
      const params = buildUspsAddressParams(req.address);
      
      /** * USPS v3.2 API uses the 'verifyAddress' workflow. 
       */
      const normalized = await client.verifyAddress(params);

      return {
        isValid: normalized.isValid,
        normalizedAddress: normalized,
        raw: normalized.raw
      };
    }

    case "fedex": {
      if (!config.fedex) {
        throw new ShipstackError("FedEx configuration missing in ShippingConfig.", "fedex");
      }

      const client = createFedexAddressClient(config.fedex);
      await client.init(); 

      const payload = buildFedexAddressRequest(req.address);
      const normalized = await client.validateAddress(payload);

      return {
        isValid: normalized.isValid,
        normalizedAddress: normalized,
        raw: normalized.raw
      };
    }

    case "ups": {
      if (!config.ups) {
        throw new ShipstackError("UPS configuration missing in ShippingConfig.", "ups");
      }

      const client = createUpsAddressClient(config.ups);
      const payload = buildUpsAddressRequest(req.address);
      
      /**
       * UPS Extended Address Validation (XAV) provides both 
       * validation and residential/commercial classification.
       */
      const normalized = await client.validateAddress(payload);

      return {
        isValid: normalized.isValid,
        normalizedAddress: normalized,
        raw: normalized.raw
      };
    }

    default:
      throw new ShipstackError(
        `Address validation for carrier '${carrier}' is not yet supported.`, 
        "ups"
      );
  }
}