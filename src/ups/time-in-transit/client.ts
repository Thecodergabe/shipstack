import { OpenAPI, TimeInTransitService } from "./generated/index";
import { configureUpsClient } from "../clientFactory";

export function createUpsTransitClient() {
  configureUpsClient(OpenAPI, "time-in-transit");
  return TimeInTransitService;
}