/**
 * Basic Shipstack Examples
 *
 * Demonstrates:
 * - Fetching rates
 * - Tracking shipments
 * - Validating addresses
 * - Using both the ShippingClient and functional API
 */

import {
  ShippingClient,
  getRates,
  trackShipment,
  validateAddress
} from "shipstack";

import { config } from "../config.example";

// ---------------------------------------------
// Stateful API (ShippingClient)
// ---------------------------------------------

const shipstack = new ShippingClient(config);

async function exampleStateful() {
  // 1. Get Rates
  const rates = await shipstack.getRates({
    carrier: "usps",
    fromPostalCode: "90210",
    toPostalCode: "10001",
    weightOz: 16
  });

  console.log("USPS Rates:", rates);

  // 2. Track a Shipment
  const tracking = await shipstack.track(
    ["9400100000000000000000"],
    "usps"
  );

  console.log("Tracking:", tracking);

  // 3. Validate an Address
  const address = await shipstack.validateAddress({
    carrier: "fedex",
    address: {
      street1: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001"
    }
  });

  console.log("Address Validation:", address);
}

// ---------------------------------------------
// Functional API
// ---------------------------------------------

async function exampleFunctional() {
  // 1. Get Rates
  const rates = await getRates(
    {
      carrier: "ups",
      fromPostalCode: "94103",
      toPostalCode: "10001",
      weightOz: 32
    },
    config
  );

  console.log("UPS Rates:", rates);

  // 2. Track a Shipment
  const tracking = await trackShipment(
    ["1Z9999999999999999"],
    "ups",
    config
  );

  console.log("Tracking:", tracking);

  // 3. Validate an Address
  const address = await validateAddress(
    {
      carrier: "usps",
      address: {
        street1: "1600 Amphitheatre Pkwy",
        city: "Mountain View",
        state: "CA",
        postalCode: "94043"
      }
    },
    config
  );

  console.log("Address Validation:", address);
}

// Run examples
exampleStateful();
exampleFunctional();
