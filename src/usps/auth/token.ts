import { getUspsConfig } from "@/config";

export async function requestUspsToken({
  clientId,
  clientSecret,
}: {
  clientId: string;
  clientSecret: string;
}) {
  const config = getUspsConfig();
  const baseUrl = config.authUrl || "https://apis.usps.com/oauth2/v3";

  // USPS requires application/json for the OAuth2 token request
  const response = await fetch(`${baseUrl}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`USPS Token Error [${response.status}]: ${errText}`);
  }

  const data = await response.json();

  if (!data || !data.access_token) {
    throw new Error("USPS token response missing access_token");
  }

  return {
    token: data.access_token,
    expiresIn: data.expires_in || 28799,
  };
}
