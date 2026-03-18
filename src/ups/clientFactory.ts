/**
 * UPS Client Configuration Factory
 * Maps Shipstack configuration to the generated UPS OpenAPI singleton.
 */

import { UpsConfig } from "../config";
import { getLogger } from "../logger";
import { ShipstackError } from "../errors";

/**
 * Configures the UPS OpenAPI context for a specific service module.
 * 
 * @param OpenAPI - The generated OpenAPI configuration object.
 * @param module - The name of the UPS module (e.g., 'rating', 'address').
 * @param config - The UPS-specific configuration slice.
 */
export function configureUpsClient(OpenAPI: any, module: string, config: UpsConfig) {
  const log = getLogger();

  if (!config.clientId || !config.clientSecret) {
    throw new ShipstackError(
      `Missing UPS credentials (clientId/clientSecret) for the ${module} module.`, 
      "ups"
    );
  }

  // UPS v1/v2 APIs typically use this base, but we allow overrides for sandbox/testing.
  OpenAPI.BASE = config.baseUrl ?? "https://onlinetools.ups.com";
  
  // UPS OAuth2 usually requires ClientID/Secret mapped to USERNAME/PASSWORD 
  // in many OpenAPI generators.
  OpenAPI.USERNAME = config.clientId;
  OpenAPI.PASSWORD = config.clientSecret;

  log.debug(`UPS ${module} client context initialized.`);
}