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

import { createShipment } from "@teralabs/shipstack";
import { config } from "../config.example";

async function exampleActualShipment() {
  const shipment = await createShipment(
    {
      carrier: "ups",
      serviceCode: "UPS_GROUND",

      fromAddress: {
        name: "Sender Name",
        streetLines: ["123 Warehouse Rd"],
        city: "Los Angeles",
        stateOrProvinceCode: "CA",
        postalCode: "90001",
        countryCode: "US"
      },

      toAddress: {
        name: "Customer Name",
        streetLines: ["55 W 46th St"],
        city: "New York",
        stateOrProvinceCode: "NY",
        postalCode: "10036",
        countryCode: "US"
      },

      package: {
        weightOz: 48,
        lengthInches: 14,
        widthInches: 10,
        heightInches: 6
      }
    },
    config
  );

  console.log("Carrier:", shipment.carrier);
  console.log("Tracking Number:", shipment.trackingNumber);
  console.log("Service Code:", shipment.serviceCode);
  console.log("Charges:", shipment.charges);

  // Label is returned as base64
  console.log("Label Format:", shipment.label.format);
  console.log("Label Base64 (first 100 chars):", shipment.label.base64.slice(0, 100));
}

exampleActualShipment();
