# Shipstack

Shipstack is a high-performance, type-safe, framework-agnostic shipping SDK for USPS, FedEx, and UPS.  
It provides unified rates, address validation, tracking, and shipment creation through a consistent, predictable API.

Shipstack is designed for:

- Storefronts (Nuxt, Next.js, SvelteKit, Remix)
- Serverless functions (Cloudflare, Vercel, Netlify)
- Node.js backends
- Edge runtimes
- Open-source projects that need reliable logistics tooling

Shipstack does not assume a backend, database, or dashboard.  
You choose the workflow. Shipstack provides the building blocks.

---

## Features

### Unified Orchestration
A single SDK surface for USPS, FedEx, and UPS.

### Multi-Carrier Rates
Fetch normalized rates from any carrier and rank them for checkout.

### Address Validation
Standardized address verification across all carriers.

### Tracking Aggregator
Batch tracking with automatic carrier-specific chunking and concurrency limits.

### Staged Shipments (Safe Mode)
Generate carrier-specific shipment payloads without purchasing a label.

### Actual Label Creation (Advanced Mode)
Backend-only workflow for purchasing real labels.

### Type-Safe
Strict TypeScript definitions for public request, response, and normalized models.

### Runtime Agnostic
Works in Node.js, Bun, Deno, Cloudflare Workers, and other modern JavaScript runtimes.

---

## Installation

```bash
npm install shipstack
```

---

## Quick Start

### 1. Create your config and clients

```ts
import { ShippingClient, ShippingManager } from "shipstack";

const config = {
  environment: "sandbox",
  usps: {
    enabled: true,
    clientId: "YOUR_USPS_CLIENT_ID",
    clientSecret: "YOUR_USPS_CLIENT_SECRET",
    baseUrl: "https://sandbox.api.usps.com"
  },
  fedex: {
    enabled: true,
    clientId: "YOUR_FEDEX_CLIENT_ID",
    clientSecret: "YOUR_FEDEX_CLIENT_SECRET",
    accountNumber: "YOUR_FEDEX_ACCOUNT_NUMBER"
  },
  ups: {
    enabled: true,
    clientId: "YOUR_UPS_CLIENT_ID",
    clientSecret: "YOUR_UPS_CLIENT_SECRET",
    accountNumber: "YOUR_UPS_ACCOUNT_NUMBER"
  }
};

const client = new ShippingClient(config);
const manager = new ShippingManager(config);
```

Use `ShippingClient` for direct per-carrier operations. Use `ShippingManager` for multi-carrier checkout ranking.

### 2. Compare carriers with `ShippingManager`

```ts
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

const cheapest = rankedRates.find(rate => rate.isCheapest);
const fastest = rankedRates.find(rate => rate.isFastest);

if (cheapest) {
  console.log("Cheapest:", cheapest.serviceName, cheapest.cost.amount);
}

if (fastest) {
  console.log("Fastest:", fastest.serviceName, fastest.deliveryDays);
}
```

### 3. Track with `ShippingClient`

```ts
const tracking = await client.track(
  ["9400100000000000000000", "9400100000000000000001"],
  "usps"
);

tracking.forEach(pkg => {
  console.log("Status of " + pkg.trackingNumber + ": " + pkg.status);
});
```

### Best Value (Functional API)

```ts
import { getBestValueRate } from "shipstack";

const best = await getBestValueRate(
  {
    carrier: "usps",
    originZip: "90210",
    destZip: "10001",
    weightOz: 16,
    lengthInches: 10,
    widthInches: 5,
    heightInches: 5
  },
  config
);
```

### Fastest Service (Functional API)

```ts
import { getFastestService } from "shipstack";

const fastest = await getFastestService(
  {
    carrier: "fedex",
    originZip: "90210",
    destZip: "10001",
    weightOz: 16,
    lengthInches: 10,
    widthInches: 5,
    heightInches: 5
  },
  config
);
```

---

## Validate an Address

```ts
const result = await client.validateAddress({
  carrier: "fedex",
  address: {
    streetLines: ["123 Main St"],
    city: "New York",
    stateOrProvinceCode: "NY",
    postalCode: "10001",
    countryCode: "US"
  }
});
```

---

## Track Shipments

```ts
import { trackShipment } from "shipstack";

const tracking = await trackShipment(
  ["9400100000000000000000", "9400100000000000000001"],
  "usps",
  config
);
```

---

## Staged Shipments (Safe Mode)

Generate a carrier-specific shipment payload without purchasing a label.

This is recommended for:

- Storefronts
- Email workflows
- Serverless environments
- Custom dashboards
- Manual label creation

```ts
import { buildShipment } from "shipstack";

const staged = await buildShipment(
  {
    carrier: "fedex",
    serviceCode: "FEDEX_GROUND",
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
      weightOz: 32,
      lengthInches: 12,
      widthInches: 8,
      heightInches: 4
    }
  },
  config
);

console.log(staged.payload);
```

This does not call the carrier API.  
This does not purchase postage.

---

## Actual Label Creation (Advanced Mode)

This method purchases a real label and must only be used in secure backend environments.

```ts
import { createShipment } from "shipstack";

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

console.log(shipment.label.base64);
console.log(shipment.trackingNumber);
```

Warning:  
Do not call this from the frontend.  
This charges the merchant's carrier account.

---

## Safe vs Advanced Usage

| Feature | buildShipment() | createShipment() |
|--------|-----------------|------------------|
| Generates carrier payload | Yes | Yes |
| Purchases a label | No | Yes |
| Safe for frontend | Yes | No |
| Requires secure backend | No | Yes |
| Good for email workflows | Yes | Limited |
| Good for automation | Limited | Yes |

---

## Functional API (Stateless)

```ts
import {
  getRates,
  getBestValueRate,
  getFastestService,
  predictCarrier,
  validateAddress,
  trackShipment
} from "shipstack";

const rates = await getRates(
  {
    carrier: "usps",
    originZip: "90210",
    destZip: "10001",
    weightOz: 16,
    lengthInches: 10,
    widthInches: 5,
    heightInches: 5
  },
  config
);
const carrier = predictCarrier("1Z9999999999999999");
```

---

## Direct Carrier Access

Only the low-level rate clients are exported directly from the package entrypoint.

```ts
import { createUspsRatesClient } from "shipstack";

const usps = createUspsRatesClient(config.usps);
const rawResponse = await usps.getRates({ /* USPS request payload */ });
```

---

## Error Handling

```ts
import { ShipstackError } from "shipstack";

const request = {
  carrier: "usps",
  originZip: "90210",
  destZip: "10001",
  weightOz: 16,
  lengthInches: 10,
  widthInches: 5,
  heightInches: 5
};

try {
  await client.getRates(request);
} catch (error) {
  if (error instanceof ShipstackError) {
    console.error(error.message);
    console.error(error.carrier);
    console.error(error.cause);
  }
}
```

---

## Development

**npm run generate:usps**    (sync USPS v3 specs)

**npm run generate:fedex**   (sync local FedEx specs)

**npm run generate:ups**     (sync local UPS specs)

**npm run generate:all**     (sync all carriers)

```bash
npm run generate:usps
npm run generate:fedex
npm run generate:ups
npm run generate:all
```

---

## Documentation

- docs/index.md
- docs/API.md
- docs/config.example.ts
- CHANGELOG.md
- CONTRIBUTING.md

---

## License

ISC License  
Copyright (c) 2026

---
