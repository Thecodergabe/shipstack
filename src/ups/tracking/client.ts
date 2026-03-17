import { OpenAPI, TrackingService } from "./generated/index";
import { configureUpsClient } from "../clientFactory";

export function createUpsTrackingClient() {
  configureUpsClient(OpenAPI, "tracking");
  return TrackingService;
}