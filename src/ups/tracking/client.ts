/**
 * UPS Tracking Client
 * * Bridges the generated OpenAPI configuration with the TrackingService class.
 */

import { OpenAPI, TrackingService } from "./generated/index";
import { FetchHttpRequest } from "./generated/core/FetchHttpRequest"; // Or AxiosHttpRequest depending on your generator settings
import { configureUpsClient } from "../clientFactory";
import { UpsConfig } from "@/config";

/**
 * Factory function to create a UPS Tracking Client instance.
 * @param {UpsConfig} config - The user-provided UPS credentials.
 * @returns {TrackingService} An instance of the TrackingService.
 */
export function createUpsTrackingClient(config: UpsConfig): TrackingService {
  /**
   * 1. Update the static OpenAPI config (Base URL, etc.)
   */
  configureUpsClient(OpenAPI, "tracking", config);
  
  /**
   * 2. Instantiate the Request handler.
   * Your generated TrackingService requires a BaseHttpRequest. 
   * We pass the OpenAPI config into the specific Implementation (Fetch/Axios).
   */
  const httpRequest = new FetchHttpRequest(OpenAPI);

  /**
   * 3. Return the service instance
   */
  return new TrackingService(httpRequest);
}

/**
 * Standardized Tracking Execution Wrapper
 */
export async function getTrackingDetail(trackingNumber: string, config: UpsConfig) {
  const service = createUpsTrackingClient(config);

  return await service.getSingleTrackResponseUsingGet(
    trackingNumber,
    `Shipstack-${Date.now()}`, 
    "en_US",                   
    "false",                   
    "false",                   
    "false",                   
    "Shipstack-v1"             
  );
}