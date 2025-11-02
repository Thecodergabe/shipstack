import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsDisputesClient() {
  configureUspsClient(OpenAPI, "disputes");
  return ResourcesService;
}