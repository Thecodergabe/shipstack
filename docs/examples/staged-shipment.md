/**
 * Staged Shipment Example
 *
 * Demonstrates how to use Shipstack's safe-mode shipment builder.
 * This generates a carrier-specific payload WITHOUT purchasing a label.
 *
 * Ideal for:
 * - Storefront checkout flows
 * - Serverless and edge environments
 * - Email-based label workflows
 * - Merchant approval flows
 */

import { buildShipment } from "shipstack";
import { config } from "./config.example";

async function exampleStagedShipment() {
  const staged = await buildShipment(
    {
      carrier: "fedex",
      serviceCode: "FEDEX_GROUND",

      fromAddress: {
        name: "Sender Name",
        street1: "123 Warehouse Rd",
        city: "Los Angeles",
        state: "CA",
        postalCode: "90001"
      },

      toAddress: {
        name: "Customer Name",
        street1: "55 W 46th St",
        city: "New York",
        state: "NY",
        postalCode: "10036"
      },

      package: {
        weightOz: 32,
        dimensions: {
          length: 12,
          width: 8,
          height: 4
        }
      }
    },
    config
  );

  console.log("Carrier:", staged.carrier);
  console.log("Service Code:", staged.serviceCode);
  console.log("Payload:", staged.payload); // FedEx Ship API request body
}

exampleStagedShipment();
