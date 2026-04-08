import { ShipstackError } from "../errors";
import { FedexConfig } from "../config";

/**
 * Configures the FedEx OpenAPI client with a fresh OAuth2 session.
 * @param openApiConfig - The OpenAPI configuration object from the generated SDK.
 * @param config - The specific FedEx configuration object to use for this session.
 * @param serviceName - The specific FedEx service being initialized (e.g., 'Tracking', 'Rates').
 * @throws {ShipstackError} If credentials are missing or the token request fails.
 */
export async function configureFedexClient(
  openApiConfig: any,
  config: FedexConfig,
  serviceName: string
) {
  if (!config.clientId || !config.clientSecret) {
    throw new ShipstackError(
      `FedEx ${serviceName} requires both clientId and clientSecret.`,
      "fedex"
    );
  }

  const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
  if (isBrowser) {
    throw new ShipstackError(
      `FedEx ${serviceName} OAuth cannot be performed directly from a browser. Use a server-side or edge proxy for authentication and avoid CORS/exposed secret issues.`,
      "fedex"
    );
  }

  try {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", config.clientId);
    params.append("client_secret", config.clientSecret);

    const baseUrl = config.baseUrl || "https://apis.fedex.com";
    
    const response = await fetch(`${baseUrl}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0]?.message || "Failed to authenticate with FedEx");
    }

    const data = await response.json();
    
    // Inject the token into the SDK's global configuration
    openApiConfig.TOKEN = data.access_token;
    openApiConfig.BASE = baseUrl;

  } catch (err: any) {
    throw new ShipstackError(
      `FedEx Auth Failed: ${err.message}`,
      "fedex",
      err
    );
  }
}