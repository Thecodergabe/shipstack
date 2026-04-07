# Shipstack Documentation

Welcome to Shipstack. This documentation will help you get started, integrate, and extend Shipstack in any JavaScript or TypeScript environment.

---

## Table of Contents
- [What is Shipstack?](#what-is-shipstack)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Advanced Workflows](#advanced-workflows)
- [Error Handling](#error-handling)
- [API Reference](#api-reference)
- [Testing](#testing)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## What is Shipstack?

Shipstack is a high‑performance, type‑safe, and framework‑agnostic shipping SDK for orchestrating logistics across USPS, FedEx, and UPS.  
It provides a unified API for:

- Address validation  
- Rate comparison  
- Tracking  
- Staged shipment generation  
- Actual label creation (backend‑only)

Shipstack works in Node.js, Deno, Bun, Cloudflare Workers, and any modern JavaScript runtime.

---

## Features

- Unified orchestration for USPS, FedEx, and UPS  
- Standardized data models for rates, tracking, and addresses  
- Batch tracking with automatic carrier‑specific chunking  
- Staged shipment system for safe, frontend‑compatible workflows  
- Actual shipment creation for backend automation  
- Auto‑generated OpenAPI clients for accuracy and compliance  
- Fully framework‑agnostic and open source  

---

## Installation

```bash
npm install shipstack
```

---

## Quick Start

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

## Configuration

Shipstack does not rely on environment variables.  
All configuration is passed as plain objects.

See `docs/config.example.ts` for a complete template.

---

## Usage Examples

### Get Rates

```ts
const rates = await shipstack.getRates({
  carrier: "usps",
  fromPostalCode: "90210",
  toPostalCode: "10001",
  weightOz: 16
});
```

### Track Shipments

```ts
const tracking = await shipstack.trackShipment(
  ["9400100000000000000000"],
  "usps",
  config
);
```

### Validate Address

```ts
const result = await shipstack.validateAddress({
  carrier: "fedex",
  address: { ... }
});
```

### Direct Carrier Access

```ts
import { createUspsRatesClient } from "shipstack";

const usps = createUspsRatesClient(config.usps);
const raw = await usps.getRates({ ... });
```

---

## Advanced Workflows

### Functional API

```ts
import { getRates, validateAddress, trackShipment } from "shipstack";

const rates = await getRates(request, config);
```

### Staged Shipments (Safe Mode)

Generates a carrier‑specific payload without purchasing a label.

```ts
import { buildShipment } from "shipstack";

const staged = await buildShipment(request, config);
```

### Actual Shipments (Backend Only)

Purchases a real label.

```ts
import { createShipment } from "shipstack";

const shipment = await createShipment(request, config);
```

---

## Error Handling

All errors are standardized as `ShipstackError`.

```ts
try {
  await shipstack.getRates(req);
} catch (error) {
  if (error instanceof ShipstackError) {
    // handle
  }
}
```

---

## API Reference

See `API.md` for detailed type and method documentation.

---

## Testing

Shipstack uses Vitest for unit and integration tests.

Run tests:

```bash
npm run test
```

---

## Contributing

See `CONTRIBUTING.md` for guidelines.

---

## Changelog

See `CHANGELOG.md`.

---

## License

ISC License

---