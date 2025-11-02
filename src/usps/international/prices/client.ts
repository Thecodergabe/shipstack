import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../../clientFactory";

export function createUspsIntlPricesClient() {
  configureUspsClient(OpenAPI, "intl-prices");
  return ResourcesService;
}