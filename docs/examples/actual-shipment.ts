/**
 * Actual Shipment Example
 *
 * Demonstrates how to use Shipstack's advanced shipment workflow.
 * This calls the carrier API and PURCHASES a real shipping label.
 *
 * IMPORTANT:
 * - Only run this in a secure backend environment.
 * - This will generate a real tracking number and label.
 */

import { createShipment } from "shipstack";
import { config } from "./config.example";

async function exampleActualShipment() {
  const shipment = await createShipment(
    {
      carrier: "ups",
      serviceCode: "UPS_GROUND",

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
        weightOz: 48,
        dimensions: {
          length: 14,
          width: 10,
          height: 6
        }
      }
    },
    config
  );

  console.log("Carrier:", shipment.carrier);
  console.log("Tracking Number:", shipment.trackingNumber);
  console.log("Service Code:", shipment.serviceCode);
  console.log("Cost:", shipment.cost);

  // Label is returned as base64
  console.log("Label Format:", shipment.label.format);
  console.log("Label Base64 (first 100 chars):", shipment.label.base64.slice(0, 100));
}

exampleActualShipment();
