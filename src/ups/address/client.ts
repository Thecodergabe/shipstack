/**
 * UPS Address Service Client
 * * A wrapper for the generated UPS Address SDK.
 */

import { UpsAddressSdk, XAVRequestWrapper } from "./generated/index";
import { UpsConfig } from "@/config";
import { ShipstackError } from "@/errors";
import { NormalizedAddress } from "@/types/index";
import { normalizeUpsAddressResponse } from "@/converters/address/ups";
import { UpsTokenManager } from "../oauth/manager";

export class UpsAddressClient {
  private sdk: UpsAddressSdk;
  private tokenManager: UpsTokenManager;

  constructor(private config: UpsConfig) {
    this.tokenManager = new UpsTokenManager(config);
    this.sdk = new UpsAddressSdk({
      BASE: config.baseUrl ?? "https://onlinetools.ups.com"
    });
  }

  async init(): Promise<void> {
    if (!this.config.clientId || !this.config.clientSecret) {
      throw new ShipstackError("UPS credentials (clientId/clientSecret) are required.", "ups");
    }
  }

  /**
   * Validates a physical address using the UPS XAV service.
   * * RENAMED to 'validateAddress' to match the aggregator's expectation.
   */
  async validateAddress(payload: XAVRequestWrapper): Promise<NormalizedAddress> {
    await this.init();

    try {
      const token = await this.tokenManager.getToken();
      (this.sdk.request.config as any).TOKEN = token;

      /**
       * UPS OpenAPI Method Signature:
       * requestoption: 3 (Validation + Classification)
       * regionalrequestindicator: 'False' (Standard domestic/international)
       * maximumcandidatelistsize: 1 (Return only the best match)
       */
      const rawResponse = await this.sdk.addressValidation.addressValidation(
        3,         // requestoption
        payload,   // requestBody
        "False",   // regionalrequestindicator
        1,         // maximumcandidatelistsize
        "v2"       // version
      );

      return normalizeUpsAddressResponse(rawResponse);
    } catch (error: any) {
      throw new ShipstackError(
        `UPS Address Validation Failed: ${error.message || 'Unknown Error'}`,
        "ups",
        error.status
      );
    }
  }
}

export const createUpsAddressClient = (config: UpsConfig): UpsAddressClient => 
  new UpsAddressClient(config);