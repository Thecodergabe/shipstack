import { FedexConfig } from "../../config";
import { configureFedexClient } from "../clientFactory";
import { FedexAddressSdk } from "./generated/index";
import { NormalizedAddress } from "../../types/address";
import { normalizeFedexAddressResponse } from "../../converters/address/fedex";

/**
 * Professional Service Client for FedEx Address Validation API v1.
 * * This class provides a thread-safe, framework-agnostic implementation for 
 * resolving and validating physical addresses via FedEx global databases.
 * * @author Shipstack Core Team
 */
export class FedexAddressClient {
  private sdk: FedexAddressSdk;

  constructor(private config: FedexConfig) {
    this.sdk = new FedexAddressSdk({
      BASE: config.baseUrl || "https://apis.fedex.com",
    });
  }

  /**
   * Authorizes the FedEx Address session using OAuth2.
   * Must be called before validateAddress().
   */
  async init(): Promise<void> {
    await configureFedexClient(this.sdk.request.config, "Address");
  }

  /**
   * Validates a physical address and returns a Shipstack-normalized result.
   * * @param requestBody - The FedEx-specific 'body' payload.
   * @returns {Promise<NormalizedAddress>} Standardized address validation result.
   */
  async validateAddress(requestBody: any): Promise<NormalizedAddress> {
    const token = this.sdk.request.config.TOKEN;

    const rawResponse = await this.sdk.default.validateAddress(
      "application/json",
      `Bearer ${token}`,
      undefined,
      undefined,
      requestBody
    );

    return normalizeFedexAddressResponse(rawResponse);
  }
}

export const createFedexAddressClient = (config: FedexConfig) => new FedexAddressClient(config);