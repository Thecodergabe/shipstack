import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsTrackingClient() {
  configureUspsClient(OpenAPI, "tracking");
  return ResourcesService;
}