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
npm install @teralabs/shipstack
```

---

## Quick Start

```ts
import { ShippingClient, ShippingManager } from "@teralabs/shipstack";

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

---

## Configuration

Shipstack does not rely on environment variables.  
All configuration is passed as plain objects.

See `docs/config.example.ts` for a complete template.

---

## Usage Examples

### Get Rates

```ts
const rates = await client.getRates({
  carrier: "usps",
  originZip: "90210",
  destZip: "10001",
  weightOz: 16,
  lengthInches: 10,
  widthInches: 5,
  heightInches: 5
});
```

### Rank Rates Across Carriers

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
```

### Track Shipments

```ts
const tracking = await client.track(["9400100000000000000000"], "usps");
```

### Validate Address

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

### Direct Carrier Access

```ts
import { createUspsRatesClient } from "@teralabs/shipstack";

const usps = createUspsRatesClient(config.usps);
const raw = await usps.getRates({ ... });
```

---

## Advanced Workflows

### Functional API

```ts
import { getRates, validateAddress, trackShipment } from "@teralabs/shipstack";

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
```

### ShippingManager

`ShippingManager` is the class-only helper for ranked multi-carrier checkout workflows.

```ts
const ranked = await manager.getRankedRates(
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
```

### Staged Shipments (Safe Mode)

Generates a carrier‑specific payload without purchasing a label.

```ts
import { buildShipment } from "@teralabs/shipstack";

const staged = await buildShipment({ /* ShipmentRequest */ }, config);
```

### Actual Shipments (Backend Only)

Purchases a real label.

```ts
import { createShipment } from "@teralabs/shipstack";

const shipment = await createShipment({ /* ShipmentRequest */ }, config);
```

---

## Error Handling

All errors are standardized as `ShipstackError`.

```ts
import { ShipstackError } from "@teralabs/shipstack";

try {
  await client.getRates({
    carrier: "usps",
    originZip: "90210",
    destZip: "10001",
    weightOz: 16,
    lengthInches: 10,
    widthInches: 5,
    heightInches: 5
  });
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