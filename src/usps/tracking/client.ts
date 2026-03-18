import { UspsTrackingSdk } from "./generated/UspsTrackingSdk";
import { UspsConfig } from "@/config";
import type { TrackingRequest } from "./generated/index";
import { configureUspsClient } from "../clientFactory";
import { OpenAPI } from "./generated/core/OpenAPI";

/**
 * Client for interacting with the USPS Tracking v3 API.
 * Provides methods to retrieve tracking information for packages.
 */
export class UspsTrackingClient {
  /** Internal SDK instance generated from OpenAPI spec */
  private sdk: UspsTrackingSdk;

  /**
   * Initializes a new instance of the UspsTrackingClient.
   * * @param config - Configuration object containing API credentials and base URL.
   */
  constructor(config: UspsConfig) {
    this.sdk = new UspsTrackingSdk({
      HEADERS: {
        // Fallback to clientId if apiKey is missing, common in USPS v3 setup
        'X-API-Key': config.apiKey || config.clientId || ''
      },
      BASE: config.baseUrl || 'https://api.usps.com/tracking/v3'
    });
  }

  /**
   * Initializes the USPS client by configuring the global OpenAPI settings.
   * * Fetches a fresh OAuth2 access token, sets the base URL from config, 
   * and attaches global interceptors for logging and 2026 rate-limit (429) handling.
   */
  async init() {
    await configureUspsClient(OpenAPI, "Tracking");
  }

  /**
   * Retrieves the status information for a specific tracking number.
   * * @param trackingNumber - The unique identifier for the package.
   * @returns A promise that resolves to the tracking status details.
   */
  async getStatus(trackingNumber: string) {
    const requestBody: TrackingRequest = [
      {
        trackingNumber: trackingNumber,
      }
    ];

    return this.sdk.resources.getPackageTracking(requestBody);
  }

  /**
   * Retrieves statuses for multiple tracking numbers in a single request.
   * * USPS v3 enforces a maximum of 35 tracking numbers per call.
   * * @param trackingNumbers - An array of tracking identifier strings.
   * @returns A promise that resolves to the batch tracking status details.
   */
  async getBulkStatus(trackingNumbers: string[]) {
    /** 
     * Transform the string array into the TrackingRequest object array 
     * required by the generated SDK.
     */
    const requestBody: TrackingRequest = trackingNumbers.map(num => ({
      trackingNumber: num
    }));

    return this.sdk.resources.getPackageTracking(requestBody);
  }
}

/**
 * Factory function to create a new UspsTrackingClient instance.
 * * @param config - Configuration for the USPS API.
 * @returns An initialized UspsTrackingClient.
 */
export const createUspsTrackingClient = (config: UspsConfig) => new UspsTrackingClient(config);