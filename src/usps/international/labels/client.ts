import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../../clientFactory";

export function createUspsIntlLabelsClient() {
  configureUspsClient(OpenAPI, "intl-labels");
  return ResourcesService;
}