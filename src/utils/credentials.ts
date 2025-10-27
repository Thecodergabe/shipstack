import { ClientCredentials } from "../usps/generated/models/ClientCredentials";
import { TokenRequest } from "../usps/generated/models/TokenRequest";

export function getUspsCredentials(): ClientCredentials {
  const client_id = process.env.USPS_CLIENT_ID;
  const client_secret = process.env.USPS_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    throw new Error("Missing USPS credentials in environment");
  }

  return {
    grant_type:  TokenRequest.grant_type.CLIENT_CREDENTIALS,
    client_id,
    client_secret
  };
}

export function getFedexCredentials(): { apiKey: string; baseUrl: string } {
  const apiKey = process.env.FEDEX_API_KEY;
  const baseUrl = process.env.FEDEX_BASE_URL ?? "https://apis.fedex.com";

  if (!apiKey) {
    throw new Error("Missing FedEx API key in environment");
  }

  return { apiKey, baseUrl };
}