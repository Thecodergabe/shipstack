import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsAdjustmentsClient() {
  configureUspsClient(OpenAPI, "adjustments");
  return ResourcesService;
}