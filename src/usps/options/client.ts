import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsShippingOptionsClient() {
  configureUspsClient(OpenAPI, "shipping-options");
  return ResourcesService;
}