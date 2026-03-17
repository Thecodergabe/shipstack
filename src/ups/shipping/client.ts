import { OpenAPI, ShippingService } from "./generated/index"
import { configureUpsClient } from "../clientFactory";

export function createUpsShipClient() {
  configureUpsClient(OpenAPI, "shipping");
  return ShippingService;
}