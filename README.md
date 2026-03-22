# Shipstack

Shipstack is a high-performance, type-safe shipping SDK designed to orchestrate logistics across multiple carriers. By combining auto-generated OpenAPI clients with a unified orchestration layer, Shipstack allows developers to compare rates, validate addresses, and track shipments using a single, framework-agnostic interface.

## Core Capabilities

* **Unified Orchestration**: A single `ShippingClient` to manage USPS, FedEx, and UPS operations.
* **Agnostic Data Models**: Standardized types for Rates, Tracking, and Addresses across all carriers.
* **Smart Ranking**: Built-in logic to identify "Cheapest" and "Fastest" options from a multi-carrier pool.
* **Batch Tracking**: Intelligent tracking aggregator that handles carrier-specific batch limits and concurrency.
* **Compliance First**: Low-level clients are generated directly from official carrier OpenAPI specifications.
* **Runtime Agnostic**: Fully compatible with Node.js, Cloudflare Workers, Bun, and Deno.

---

## Installation

```bash
npm install shipstack
```

## QUICK START

The recommended approach is to use the stateful ShippingClient, which stores configuration once and exposes high‑level workflow methods.
- Initialization (TypeScript) 

```typescript
import { ShippingClient } from "shipstack";

const shipstack = new ShippingClient({ 
  usps: { 
    apiKey: "YOUR_USPS_KEY", 
    apiSecret: "YOUR_USPS_SECRET", 
    baseUrl: "https://sandbox.api.usps.com" 
  }, 
  fedex: { 
    apiKey: "YOUR_FEDEX_KEY", 
    secretKey: "YOUR_FEDEX_SECRET" 
  }, 
  ups: { 
    apiKey: "YOUR_UPS_KEY", 
    apiSecret: "YOUR_UPS_SECRET" 
  } 
});
```
- Multi‑Carrier Rating (TypeScript)

```typescript
const rates = await shipstack.getRankedRates( { 
    originZip: "90210", 
    destZip: "10001", 
    weightOz: 16, 
    lengthInches: 10, 
    widthInches: 5, 
    heightInches: 5 }, 
    ["usps", "fedex", "ups"] );

const cheapest = rates.find(r => r.isCheapest); 

const fastest = rates.find(r => r.isFastest);

console.log("Cheapest: " + cheapest.serviceName + " at $" + cheapest.cost.amount);
```

- Unified Tracking (TypeScript)

```typescript
const tracking = await shipstack.track(["9400100000000000000000", "9400100000000000000001"], "usps" );

tracking.forEach(pkg => { console.log("Status of " + pkg.trackingNumber + ": " + pkg.status.description); });
```

## ADVANCED USAGE

Functional API (TypeScript)

```typescript
import { getRates, validateAddress, trackShipment } from "shipstack";

const rates = await getRates(request, config);
```

Direct Carrier Access (TypeScript)

```typescript
import { createUspsRatesClient } from "shipstack";

const usps = createUspsRatesClient(config.usps); 

const rawResponse = await usps.getRates({ ... });
```

## ERROR HANDLING

Shipstack wraps carrier‑level failures into a standardized ShipstackError.

```typescript
import { ShipstackError } from "shipstack";

try { 
  await shipstack.getRates(req); 
} catch (error) { 
  if (error instanceof ShipstackError) { 
    console.error(error.message); 
    console.error(error carrier);  // usps | fedex | ups 
  } 
}
```

## DEVELOPMENT AND CONTRIBUTION

## Regenerating Clients

**npm run generate:usps**    (sync USPS v3 specs)  

**npm run generate:fedex**  (sync local FedEx specs)  

**npm run generate:ups**     (sync local UPS specs)  

**npm run generate:all**     (sync all carriers)

## DOCUMENTATION LINKS

Changelog
Contributing Guide
USPS Developer Portal
FedEx Developer Portal
UPS Developer Portal

## LICENSE
ISC License
