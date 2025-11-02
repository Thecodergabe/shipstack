import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsSubscriptionsClient() {
  configureUspsClient(OpenAPI, "subscriptions");
  return ResourcesService;
}