/**
 * UPS Rating Service Client
 * * Interacts with the generated RatingService to fetch shipping quotes.
 */

import { RatingService, RATERequestWrapper } from "./generated/index";
import { UpsConfig } from "@/config";
import { UpsTokenManager } from "../oauth/manager";
import { ShipstackError } from "@/errors";
import { FetchHttpRequest } from "./generated/core/FetchHttpRequest";

export class UpsRatingClient {
  private tokenManager: UpsTokenManager;
  private ratingService: RatingService;

  /**
   * Initializes the UPS Rating Client and its internal service instance.
   * * @param {UpsConfig} config - UPS-specific configuration.
   */
  constructor(private config: UpsConfig) {
    this.tokenManager = new UpsTokenManager(config);

    /**
     * RatingService must be instantiated with a request handler.
     * We map the global OpenAPI/Config settings to a new FetchHttpRequest.
     */
    const requestHandler = new FetchHttpRequest({
      BASE: config.baseUrl ?? "https://onlinetools.ups.com",
      VERSION: '1.0.0',           // Required by OpenAPIConfig
      WITH_CREDENTIALS: false,    // Required by OpenAPIConfig
      CREDENTIALS: 'include',     // Required by OpenAPIConfig
    });

    this.ratingService = new RatingService(requestHandler);
  }

  /**
   * Fetches available shipping rates.
   * * @param {RATERequestWrapper} payload - The UPS-formatted request body.
   * @returns {Promise<any>} The raw UPS RATEResponseWrapper.
   */
  async getRates(payload: RATERequestWrapper): Promise<any> {
    try {
      const token = await this.tokenManager.getToken();

      /**
       * Matching your generated 'rate' signature:
       * 1. requestoption: 'Shop' (to get all available services)
       * 2. requestBody: payload
       * 3. transId: Optional ID
       * 4. transactionSrc: defaults to 'testing'
       * 5. additionalinfo: undefined
       * 6. version: 'v2409'
       */
      
      // We manually update the token in the request handler before the call
      (this.ratingService.httpRequest.config as any).TOKEN = token;

      return await this.ratingService.rate(
        "Shop",        // requestoption
        payload,       // requestBody
        undefined,     // transId
        "shipstack",   // transactionSrc
        undefined,     // additionalinfo
        "v2409"        // version
      );
    } catch (error: any) {
      throw new ShipstackError(
        `UPS Rating Failed: ${error.message}`,
        "ups",
        error.status
      );
    }
  }
}

export const createUpsRatesClient = (config: UpsConfig): UpsRatingClient => 
  new UpsRatingClient(config);