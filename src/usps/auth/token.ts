import { OpenAPI, ResourcesService } from "./generated/index";
import { TokenRequest } from "./generated/models/TokenRequest";
import { getUspsConfig } from "@/config";

export async function requestUspsToken({
  clientId,
  clientSecret,
}: {
  clientId: string;
  clientSecret: string;
}) {
  const config = getUspsConfig();
  
  // Set the auth base URL from config
  OpenAPI.BASE = config.authUrl || "https://apis.usps.com/oauth2/v3";

  const service = new ResourcesService(OpenAPI as any);

  /**
   * We pass the formData object. 
   * The SDK uses 'application/x-www-form-urlencoded' as seen in your ResourcesService.
   */
  const response = await service.postToken({
    grant_type: TokenRequest.grant_type.CLIENT_CREDENTIALS,
    client_id: clientId,
    client_secret: clientSecret,
  });

  if (!("access_token" in response)) {
    throw new Error("USPS token response missing access_token");
  }

  return {
    token: response.access_token,
    expiresIn: response.expires_in,
  };
}