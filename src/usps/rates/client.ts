import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsRatesClient() {
  configureUspsClient(OpenAPI, "rates");
  return ResourcesService;
}