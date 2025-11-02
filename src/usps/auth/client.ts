import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsAuthClient() {
  configureUspsClient(OpenAPI, "auth");
  return ResourcesService;
}