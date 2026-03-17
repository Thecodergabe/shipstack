import { OpenAPI, AddressValidationService } from "./generated/index";
import { configureUpsClient } from "../clientFactory";

export function createUpsAddressClient() {
  configureUpsClient(OpenAPI, "address");
  return AddressValidationService;
}