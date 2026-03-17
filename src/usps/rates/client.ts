import { UspsRatesSdk } from "./generated/UspsRatesSdk";
import { UspsConfig } from "../../config";
import type { TotalRatesQuery } from "./generated/models/TotalRatesQuery";
import { configureUspsClient } from "../clientFactory";
import { OpenAPI } from "./generated/core/OpenAPI";

/**
 * Service wrapper for the USPS Domestic Prices (Rates) API.
 * * This class encapsulates the generated UspsRatesSdk to provide a thread-safe,
 * instance-based client. It isolates configuration state to prevent credential
 * leakage in multi-tenant or concurrent environments, ensuring compatibility 
 * across Node.js, Browser, and Edge runtimes.
 */
export class UspsRatesClient {
    /**
     * Initializes the USPS client by configuring the global OpenAPI settings.
     * * Fetches a fresh OAuth2 access token, sets the base URL from config, 
     * and attaches global interceptors for logging and 2026 rate-limit (429) handling.
     * * @throws {ShipstackError} If the authentication token cannot be retrieved.
     * @throws {ThrottlingError} If the initialization request is rate-limited by USPS.
     */
    async init() {
      await configureUspsClient(OpenAPI, "Rates");
    }
  
  /** * Isolated instance of the generated OpenAPI fetch client.
   * Maintains local headers and base URL configuration.
   */
  private internalClient: UspsRatesSdk;

  /**
   * Initializes the USPS Rates client with provided credentials.
   * * @param config - Configuration object containing the mandatory `apiKey` and optional `baseUrl`.
   */
  constructor(config: UspsConfig) {
    this.internalClient = new UspsRatesSdk({
      HEADERS: {
        'X-API-Key': config.apiKey
      },
      BASE: config.baseUrl || 'https://api.usps.com/prices/v3'
    });
  }

  /**
   * Retrieves eligible shipping rates and services based on package ingredients.
   * * Maps to the USPS v3 'Total Rates Search' endpoint which returns base prices 
   * plus requested extra services.
   * * @param uspsRequest - The USPS-specific request body containing dimensions, weight, and ZIP codes.
   * @returns A promise resolving to the total rates search result including price details.
   */
  async getRates(uspsRequest: TotalRatesQuery) {
    return this.internalClient.resources.postTotalRatesSearch(uspsRequest);
  }
}

/**
 * Factory function to create a new instance of the UspsRatesClient.
 * * This provides a clean interface for the aggregator to instantiate the client
 * without direct class manipulation.
 * * @param config - The USPS specific configuration slice.
 * @returns An initialized UspsRatesClient.
 */
export const createUspsRatesClient = (config: UspsConfig) => new UspsRatesClient(config);