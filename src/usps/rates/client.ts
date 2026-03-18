/**
 * USPS Rates Service Client
 * * A specialized wrapper for the USPS Domestic Prices v3 API.
 * This client manages the configuration and execution of rate lookups, 
 * utilizing the generated OpenAPI SDK for standardized data fetching.
 */

import { UspsRatesSdk, OpenAPI } from "@/usps/rates/generated/index";
import { configureUspsClient } from "@/usps/clientFactory";
import { UspsConfig } from "@/config";

/**
 * Client for fetching real-time USPS domestic shipping rates.
 * @public
 */
export class UspsRatesClient {
  private config: UspsConfig;

  /**
   * Initializes the USPS Rates Client with provided configuration.
   * @param {UspsConfig} config - USPS-specific credentials and environment settings.
   */
  constructor(config: UspsConfig) {
    this.config = config;
  }

  /**
   * Synchronizes the OpenAPI configuration singleton with the library's 
   * global client factory settings.
   * @returns {Promise<void>}
   */
  async init(): Promise<void> {
    await configureUspsClient(OpenAPI, "rates");
  }

  /**
   * Queries the USPS API for available services and prices based on 
   * package weight, dimensions, and destination.
   * 
   * * Executes against the /base-rates/search endpoint.
   * 
   * @param {any} requestBody - The search parameters (BaseRatesQuery schema).
   * @returns {Promise<any>} A collection of available shipping rates and service levels.
   * @throws {Error} If the API request fails or the configuration is invalid.
   */
  async getRates(requestBody: any): Promise<any> {
    await this.init();
    
    /**
     * The SDK instance is initialized with the configured OpenAPI 
     * singleton to ensure correct Base URL and Auth headers.
     */
    const sdk = new UspsRatesSdk(OpenAPI);
    
    return await sdk.resources.postBaseRatesSearch(requestBody);
  }
}

/**
 * Factory function to create a new UspsRatesClient instance.
 */
export const createUspsRatesClient = (config: UspsConfig): UspsRatesClient => {
  return new UspsRatesClient(config);
};