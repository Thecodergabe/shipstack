# Shipstack

Shipstack is a high‑performance, type‑safe, framework‑agnostic shipping SDK for USPS, FedEx, and UPS.  
It provides unified rates, address validation, tracking, and shipment creation through a consistent, predictable API.

Shipstack is designed for:

- Storefronts (Nuxt, Next.js, SvelteKit, Remix)  
- Serverless functions (Cloudflare, Vercel, Netlify)  
- Node.js backends  
- Edge runtimes  
- Open‑source projects that need reliable logistics tooling  

Shipstack does not assume a backend, database, or dashboard.  
You choose the workflow — Shipstack provides the building blocks.

---

## Features

### Unified Orchestration  
A single API surface for USPS, FedEx, and UPS.

### Multi‑Carrier Rates  
Fetch normalized rates from any carrier and compare them easily.

### Address Validation  
Standardized address verification across all carriers.

### Tracking Aggregator  
Batch tracking with automatic carrier‑specific chunking and concurrency limits.

### Staged Shipments (Safe Mode)  
Generate carrier‑specific shipment payloads without purchasing a label.  
Ideal for storefronts, email workflows, or custom dashboards.

### Actual Label Creation (Advanced Mode)  
Backend‑only method to purchase real labels from USPS, FedEx, or UPS.

### Type‑Safe  
Strict TypeScript definitions for every request, response, and normalized model.

### Runtime Agnostic  
Works in Node.js, Bun, Deno, Cloudflare Workers, and more.

---

## Installation

```bash
npm install shipstack
```

---

## Quick Start

### 1. Initialize the client

```ts
import { ShippingClient } from "shipstack";

const shipstack = new ShippingClient({
  usps: {
    apiKey: "YOUR_USPS_KEY",
    apiSecret: "YOUR_USPS_SECRET",
    baseUrl: "https://api.usps.com"
  },
  fedex: {
    apiKey: "YOUR_FEDEX_KEY",
    secretKey: "YOUR_FEDEX_SECRET",
    accountNumber: "YOUR_FEDEX_ACCOUNT"
  },
  ups: {
    apiKey: "YOUR_UPS_KEY",
    apiSecret: "YOUR_UPS_SECRET",
    accountNumber: "YOUR_UPS_ACCOUNT"
  }
});
```

---

## Get Rates

```ts
const rates = await shipstack.getRates({
  carrier: "usps",
  fromPostalCode: "90210",
  toPostalCode: "10001",
  weightOz: 16,
  dimensions: { length: 10, width: 5, height: 5 }
});
```

### Best Value

```ts
const best = await shipstack.getBestValueRate(request, config);
```

### Fastest Service

```ts
const fastest = await shipstack.getFastestService(request, config);
```

---

## Validate an Address

```ts
const result = await shipstack.validateAddress({
  carrier: "fedex",
  address: {
    street1: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001"
  }
});
```

---

## Track Shipments

```ts
const tracking = await shipstack.trackShipment(
  ["9400100000000000000000", "9400100000000000000001"],
  "usps",
  config
);
```

---

## Staged Shipments (Safe Mode)

Generate a carrier‑specific shipment payload without purchasing a label.

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
    fromAddress: { ... },
    toAddress: { ... },
    package: { ... }
  },
  config
);

console.log(staged.payload); // FedEx Ship API request body
```

This does not call the carrier API.  
This does not purchase postage.

---

## Actual Label Creation (Advanced Mode)

This method purchases a real label and must only be used in secure backend environments.

```ts
import { createShipment } from "shipstack";

const shipment = await createShipment(request, config);

console.log(shipment.label.base64);
console.log(shipment.trackingNumber);
```

Warning:  
Do not call this from the frontend.  
This charges the merchant’s carrier account.

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
import { getRates, validateAddress, trackShipment } from "shipstack";

const rates = await getRates(request, config);
```

---

## Error Handling

```ts
import { ShipstackError } from "shipstack";

try {
  await shipstack.getRates(req);
} catch (err) {
  if (err instanceof ShipstackError) {
    console.error(err.message);
    console.error(err.carrier);
  }
}
```

---

## Development

### Regenerate carrier clients

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
