/**
 * Shipstack Address Aggregator
 * * The central orchestrator for multi-carrier address validation. 
 * This service maps universal Shipstack types to carrier-specific builders 
 * and returns a standardized 'AddressValidationResult'.
 */

import { 
  AddressValidationRequest, 
  AddressValidationResult 
} from "../types/index";
import { ShippingConfig } from "../config";
import { ShipstackError } from "../errors";

// USPS Internal Modules
import { createUspsAddressClient } from "../usps/address/client";
import { buildUspsAddressParams } from "../usps/address/request";

// FedEx Internal Modules
import { createFedexAddressClient } from "../fedex/address/client";
import { buildFedexAddressRequest } from "../fedex/address/request";

/**
 * Validates and standardizes a physical address using the specified carrier.
 * * * Logic Flow:
 * 1. Validates presence of carrier credentials in the config.
 * 2. Initializes the carrier-specific client (OAuth2/Basic).
 * 3. Maps agnostic 'streetLines' and 'postalCode' to carrier schemas.
 * 4. Executes the remote validation and returns a 'NormalizedAddress'.
 * * @param {AddressValidationRequest} req - The universal address request payload.
 * @param {ShippingConfig} config - The global library configuration (passed from ShippingClient).
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
      
      /**
       * Mapping req.address (the slice) to the USPS builder
       */
      const params = buildUspsAddressParams(req.address);
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
      await client.init(); // FedEx requires OAuth2 token initialization

      /**
       * Mapping req.address to the FedEx builder
       */
      const payload = buildFedexAddressRequest(req.address);
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
        "fedex"
      );
  }
}