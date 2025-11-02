import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsAddressClient() {
  configureUspsClient(OpenAPI, "address");
  return ResourcesService;
}