import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";

export function createUspsAppointmentsClient() {
  configureUspsClient(OpenAPI, "appointments");
  return ResourcesService;
}