import { ResourcesService } from "./generated/index";
import { TokenRequest } from "./generated/models/TokenRequest";

export async function requestUspsToken({
  clientId,
  clientSecret,
  scope = "uspsapis",
}: {
  clientId: string;
  clientSecret: string;
  scope?: string;
}) {
  const formData = {
    grant_type: TokenRequest.grant_type.CLIENT_CREDENTIALS,
    client_id: clientId,
    client_secret: clientSecret,
    scope,
  };

  const response = await ResourcesService.postToken(formData);

  if (!("access_token" in response)) {
    throw new Error("USPS token response missing access_token");
  }

  return {
    token: response.access_token,
    expiresIn: response.expires_in,
    type: response.token_type,
  };
}