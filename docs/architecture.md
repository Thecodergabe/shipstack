# Shipstack Architecture

Shipstack is built around a layered, modular architecture designed for reliability, type‑safety, and framework‑agnostic operation.  
This document explains how the system is structured internally and how each layer interacts with the others.

---

## Overview

Shipstack consists of four major layers:

1. **Generated Clients** (OpenAPI‑based, carrier‑specific)  
2. **API Layer** (request builders + converters)  
3. **Aggregators** (unified workflows)  
4. **Public API** (stateful + functional interfaces)

This structure ensures:

- Strong type‑safety  
- Predictable behavior  
- Easy extensibility  
- Clear separation of concerns  
- Zero framework assumptions  

---

## 1. Generated Clients

Location:  
```
src/usps/generated/
src/fedex/generated/
src/ups/generated/
```

These clients are auto‑generated from official OpenAPI specifications.

### Responsibilities

- Define raw request/response types  
- Handle low‑level HTTP calls  
- Match carrier API behavior exactly  
- Never contain business logic  

### Notes

- These files should never be edited manually.  
- Regenerate using `npm run generate:*`.

---

## 2. API Layer

Location:  
```
src/usps/
src/fedex/
src/ups/
src/api/
```

This layer wraps the generated clients and provides:

### Request Builders
Convert normalized Shipstack requests into carrier‑specific formats.

Examples:
- `buildUspsRateRequest`
- `buildFedexShipRequest`
- `buildUpsTrackingRequest`

### Converters
Normalize carrier responses into Shipstack’s unified types.

Examples:
- `convertUspsRateResponse`
- `convertFedexTrackingResponse`
- `convertUpsShipResponse`

### Responsibilities

- Authentication  
- Request shaping  
- Response normalization  
- Error mapping  
- Carrier‑specific quirks  

This layer ensures all carriers behave consistently from the outside.

---

## 3. Aggregators

Location:  
```
src/aggregator/
```

Aggregators orchestrate multi‑step workflows and unify behavior across carriers.

### Types of Aggregators

#### Address Aggregator
- Calls the correct carrier validation API  
- Normalizes results  
- Handles corrections and messages  

#### Rates Aggregator
- Calls the correct carrier rate API  
- Normalizes rates  
- Supports ranking helpers  

#### Tracking Aggregator
- Handles batching (USPS 35, FedEx 30)  
- Handles UPS single‑inquiry limits  
- Normalizes tracking events  

#### Shipment Aggregator
- **Staged mode** → builds carrier payloads  
- **Actual mode** → purchases labels  
- Normalizes shipment results  

### Responsibilities

- Multi‑carrier orchestration  
- Concurrency control  
- Error handling  
- Workflow consistency  

Aggregators are the “brains” of Shipstack.

---

## 4. Public API

Shipstack exposes two public interfaces:

### Stateful API

```ts
const client = new ShippingClient(config);
const manager = new ShippingManager(config);

client.getRates(...)
client.track(...)
client.buildShipment(...)
client.createShipment(...)
manager.getRankedRates(...)
```

### Functional API

```ts
getRates(request, config)
validateAddress(request, config)
trackShipment(numbers, carrier, config)
buildShipment(request, config)
createShipment(request, config)
```

Both APIs call into the same aggregator layer.

---

## Data Flow

Here’s how a typical request moves through the system:

```
User Request
   ↓
Public API (stateful or functional)
   ↓
Aggregator (rates, tracking, address, shipment)
   ↓
API Layer (request builder + converter)
   ↓
Generated Client (raw HTTP)
   ↓
Carrier API (USPS/FedEx/UPS)
   ↓
Response normalized and returned
```

---

## Why This Architecture?

### Predictability
Every carrier behaves differently — Shipstack makes them behave the same.

### Extensibility
Adding a new carrier only requires:
- Generated client  
- Request builders  
- Converters  
- Aggregator hooks  

### Safety
Staged shipments allow safe, frontend‑compatible workflows.

### Performance
Batching, concurrency limits, and request shaping ensure efficient API usage.

### Portability
No reliance on Node.js APIs — works in any JS runtime.

---

## Summary

Shipstack’s architecture provides:

- A clean separation between raw carrier APIs and normalized workflows  
- A consistent developer experience across USPS, FedEx, and UPS  
- Safe and advanced shipment modes  
- Strong type‑safety at every layer  
- A runtime‑agnostic design suitable for modern web platforms  

---