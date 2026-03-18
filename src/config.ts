/**
 * Individual Carrier Configurations
 */
export interface UspsConfig {
  /** If false, the aggregator will skip USPS during multi-carrier lookups */
  enabled: boolean;
  /** Consumer Key from USPS Developer Portal (v3) */
  clientId: string; 
  /** Consumer Secret from USPS Developer Portal (v3) */
  clientSecret: string;
  /** Optional API Key for legacy headers or specific v3 requirements */
  apiKey?: string;
  baseUrl?: string;
  /** The OAuth2 endpoint (e.g., https://apis.usps.com/oauth2/v3) */
  authUrl?: string; 
  /** Specific override for the Labels v3 endpoint */
  labelsBaseUrl?: string; 
}

export interface FedexConfig {
  enabled: boolean;
  clientId: string;
  clientSecret: string;
  accountNumber: string;
  baseUrl?: string;
}

export interface UpsConfig {
  enabled: boolean;
  clientId: string;
  clientSecret: string;
  /** 
   * The 6-character UPS Account Number. 
   * Maps to 'ShipperNumber' in the UPS Shipping API.
   */
  accountNumber: string;
  baseUrl?: string;
}

/**
 * Root configuration for the Shipstack library.
 */
export interface ShippingConfig {
  usps?: UspsConfig;
  fedex?: FedexConfig;
  ups?: UpsConfig;
  /** Toggle between sandbox (TEM) and production environments. Defaults to 'sandbox'. */
  environment?: "sandbox" | "production";
}

/* --- Agnostic State Management --- */

let globalConfig: ShippingConfig | null = null;

/**
 * Initializes the Shipstack library with user-provided credentials.
 * This should be called once at the start of the application lifecycle.
 */
export function setShipstackConfig(config: ShippingConfig) {
  globalConfig = config;
}

/**
 * Aggregator: Retrieves a list of carrier keys that are explicitly enabled.
 * @returns Array of strings: ["usps", "fedex", "ups"]
 */
export function getEnabledCarriers(): string[] {
  if (!globalConfig) return [];
  
  const enabled: string[] = [];
  if (globalConfig.usps?.enabled) enabled.push("usps");
  if (globalConfig.fedex?.enabled) enabled.push("fedex");
  if (globalConfig.ups?.enabled) enabled.push("ups");
  
  return enabled;
}

/**
 * Internal helper to retrieve USPS specific configs.
 * @throws Error if USPS is not configured.
 */
export function getUspsConfig(): UspsConfig {
  if (!globalConfig?.usps) {
    throw new Error("Shipstack: USPS configuration is missing. Call setShipstackConfig() first.");
  }
  return globalConfig.usps;
}

/**
 * Internal helper to retrieve FedEx specific configs.
 */
export function getFedexConfig(): FedexConfig {
  if (!globalConfig?.fedex) {
    throw new Error("Shipstack: FedEx configuration is missing. Call setShipstackConfig() first.");
  }
  return globalConfig.fedex;
}

/**
 * Internal helper to retrieve UPS specific configs.
 */
export function getUpsConfig(): UpsConfig {
  if (!globalConfig?.ups) {
    throw new Error("Shipstack: UPS configuration is missing. Call setShipstackConfig() first.");
  }
  return globalConfig.ups;
}

/**
 * Helper to check the current environment for URL resolution.
 */
export function getEnvironment(): "sandbox" | "production" {
  return globalConfig?.environment || "sandbox";
}