import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsLabelsClient() {
  configureUspsClient(OpenAPI, "labels");
  return ResourcesService;
}