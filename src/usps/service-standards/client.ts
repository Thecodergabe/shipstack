import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsServiceStandardsClient() {
  configureUspsClient(OpenAPI, "service-standards");
  return ResourcesService;
}