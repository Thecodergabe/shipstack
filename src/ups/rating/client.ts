// src/ups/rates/client.ts
import { RatingService } from "./generated/services/RatingService";
import { OpenAPI } from "./generated/core/OpenAPI";
import { getConfig } from "../../config";

export function createUpsRatesClient() {
  const { UPS_CLIENT_ID, UPS_CLIENT_SECRET, UPS_BASE_URL } = getConfig();

  OpenAPI.BASE = UPS_BASE_URL ?? "https://onlinetools.ups.com";
  OpenAPI.USERNAME = UPS_CLIENT_ID;
  OpenAPI.PASSWORD = UPS_CLIENT_SECRET;

  return RatingService;
}