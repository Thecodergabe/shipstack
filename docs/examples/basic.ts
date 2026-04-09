/**
 * Basic Shipstack Examples
 *
 * Demonstrates:
 * - Fetching rates
 * - Ranking rates across carriers
 * - Tracking shipments
 * - Validating addresses
 * - Using ShippingClient, ShippingManager, and the functional API
 */

import {
  ShippingClient,
  ShippingManager,
  getRates,
  trackShipment,
  validateAddress
} from "@teralabs/shipstack";

import { config } from "../config.example";

// ---------------------------------------------
// Stateful API (ShippingClient + ShippingManager)
// ---------------------------------------------

const client = new ShippingClient(config);
const manager = new ShippingManager(config);

async function exampleStateful() {
  // 1. Get Rates
  const rates = await client.getRates({
    carrier: "usps",
    originZip: "90210",
    destZip: "10001",
    weightOz: 16,
    lengthInches: 10,
    widthInches: 5,
    heightInches: 5
  });

  console.log("USPS Rates:", rates);

  // 2. Rank Rates Across Carriers
  const rankedRates = await manager.getRankedRates(
    {
      originZip: "90210",
      destZip: "10001",
      weightOz: 16,
      lengthInches: 10,
      widthInches: 5,
      heightInches: 5
    },
    ["usps", "fedex", "ups"]
  );

  console.log("Ranked Rates:", rankedRates);

  // 3. Track a Shipment
  const tracking = await client.track(
    ["9400100000000000000000"],
    "usps"
  );

  console.log("Tracking:", tracking);

  // 4. Validate an Address
  const address = await client.validateAddress({
    carrier: "fedex",
    address: {
      streetLines: ["123 Main St"],
      city: "New York",
      stateOrProvinceCode: "NY",
      postalCode: "10001",
      countryCode: "US"
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
      originZip: "94103",
      destZip: "10001",
      weightOz: 32,
      lengthInches: 12,
      widthInches: 8,
      heightInches: 6
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
        streetLines: ["1600 Amphitheatre Pkwy"],
        city: "Mountain View",
        stateOrProvinceCode: "CA",
        postalCode: "94043",
        countryCode: "US"
      }
    },
    config
  );

  console.log("Address Validation:", address);
}

// Run examples
exampleStateful();
exampleFunctional();
