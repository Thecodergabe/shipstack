import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsCarrierPickupClient() {
  configureUspsClient(OpenAPI, "carrier-pickup");
  return ResourcesService;
}