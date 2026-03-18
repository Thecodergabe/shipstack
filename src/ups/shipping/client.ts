/**
 * UPS Shipping Service Client
 * * Handles the generation of shipping labels via the UPS Shipping REST API.
 */

import { ShippingService, SHIPRequestWrapper } from "./generated/index"; // Fixed Type Name
import { FetchHttpRequest } from "./generated/core/FetchHttpRequest";
import { UpsConfig } from "@/config";
import { UpsTokenManager } from "../oauth/manager";
import { ShipstackError } from "@/errors";

export class UpsShippingClient {
  private tokenManager: UpsTokenManager;
  private shippingService: ShippingService;

  /**
   * Initializes the UPS Shipping Client.
   * * @param {UpsConfig} config - UPS-specific configuration.
   */
  constructor(private config: UpsConfig) {
    this.tokenManager = new UpsTokenManager(config);

    const requestHandler = new FetchHttpRequest({
      BASE: config.baseUrl ?? "https://onlinetools.ups.com",
      VERSION: '1.0.0',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include',
    });

    this.shippingService = new ShippingService(requestHandler);
  }

  /**
   * Generates a shipping label and tracking number from UPS.
   * * @param {SHIPRequestWrapper} payload - The UPS-formatted SHIPRequestWrapper.
   * @returns {Promise<any>} The raw SHIPResponseWrapper.
   */
  async createShipment(payload: SHIPRequestWrapper): Promise<any> {
    try {
      const token = await this.tokenManager.getToken();

      /**
       * Match the generated 'shipment' method signature exactly:
       * 1. requestBody: SHIPRequestWrapper
       * 2. transId: string | undefined
       * 3. transactionSrc: string (defaults to 'testing')
       * 4. additionaladdressvalidation: string | undefined
       * 5. version: string (defaults to 'v2409')
       */
      
      // Inject the OAuth token into the configuration
      (this.shippingService.httpRequest.config as any).TOKEN = token;

      return await this.shippingService.shipment(
        payload,           // requestBody (Object, not string)
        undefined,         // transId
        "shipstack",       // transactionSrc
        undefined,         // additionaladdressvalidation
        "v2409"            // version
      );
    } catch (error: any) {
      throw new ShipstackError(
        `UPS Label Generation Failed: ${error.message}`,
        "ups",
        error.status
      );
    }
  }
}

export const createUpsShipClient = (config: UpsConfig): UpsShippingClient => 
  new UpsShippingClient(config);