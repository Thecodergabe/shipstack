# Shipstack API Reference

This document provides a complete reference for all public Shipstack APIs, including the stateful `ShippingClient`, the functional API, direct carrier clients, and all core types.

---

## ShippingClient

The `ShippingClient` is a stateful orchestrator that stores configuration and exposes high‑level workflow methods.

### Constructor

```ts
new ShippingClient(config: ShippingConfig)
```

### Methods

#### `getRates(request: RateRequest): Promise<NormalizedRate[]>`
Fetches normalized rates from the specified carrier.

#### `getBestValueRate(request: RateRequest): Promise<NormalizedRate>`
Returns the cheapest rate based on total cost.

#### `getFastestService(request: RateRequest): Promise<NormalizedRate>`
Returns the fastest rate based on estimated delivery days.

#### `validateAddress(request: AddressValidationRequest): Promise<NormalizedAddress>`
Validates an address using the selected carrier.

#### `trackShipment(trackingNumbers: string[], carrier: Carrier): Promise<NormalizedTracking[]>`
Tracks one or more shipments with automatic batching and normalization.

#### `buildShipment(request: ShipmentRequest): Promise<StagedShipment>`
Generates a carrier‑specific shipment payload **without purchasing a label**.

Safe for storefronts, serverless, and email workflows.

#### `createShipment(request: ShipmentRequest): Promise<NormalizedShipment>`
Creates an actual shipment and purchases a real label.

Backend‑only.

---

## Functional API

The functional API provides stateless equivalents to the `ShippingClient` methods.

### Rates

```ts
getRates(request: RateRequest, config: ShippingConfig): Promise<NormalizedRate[]>
```

### Address Validation

```ts
validateAddress(request: AddressValidationRequest, config: ShippingConfig): Promise<NormalizedAddress>
```

### Tracking

```ts
trackShipment(trackingNumbers: string[], carrier: Carrier, config: ShippingConfig): Promise<NormalizedTracking[]>
```

### Staged Shipments

```ts
buildShipment(request: ShipmentRequest, config: ShippingConfig): Promise<StagedShipment>
```

### Actual Shipments

```ts
createShipment(request: ShipmentRequest, config: ShippingConfig): Promise<NormalizedShipment>
```

---

## Direct Carrier Clients

These provide low‑level access to the raw carrier APIs.  
They return the carrier’s native response format.

### USPS

```ts
createUspsRatesClient(config: UspsConfig)
createUspsTrackingClient(config: UspsConfig)
createUspsAddressClient(config: UspsConfig)
createUspsLabelsClient(config: UspsConfig)
```

### FedEx

```ts
createFedexRatesClient(config: FedexConfig)
createFedexTrackingClient(config: FedexConfig)
createFedexShipClient(config: FedexConfig)
```

### UPS

```ts
createUpsRatesClient(config: UpsConfig)
createUpsTrackingClient(config: UpsConfig)
createUpsShipClient(config: UpsConfig)
```

---

## Types

### `ShippingConfig`
Carrier credentials and configuration.

```ts
type ShippingConfig = {
  usps?: {
    apiKey: string;
    apiSecret: string;
    baseUrl: string;
  };
  fedex?: {
    apiKey: string;
    secretKey: string;
    accountNumber: string;
  };
  ups?: {
    apiKey: string;
    apiSecret: string;
    accountNumber: string;
  };
};
```

### `RateRequest`
Origin, destination, and parcel details.

### `NormalizedRate`
Unified rate object returned by all carriers.

### `AddressValidationRequest`
Address fields for validation.

### `NormalizedAddress`
Standardized address validation result.

### `NormalizedTracking`
Normalized tracking event and status.

### `ShipmentRequest`
Details required to create a shipment.

### `StagedShipment`
Carrier‑specific payload returned by `buildShipment`.

### `NormalizedShipment`
Unified shipment result returned by `createShipment`.

---

## Error Types

### `ShipstackError`
Base error type for all Shipstack operations.

Properties include:

- `message`
- `carrier` (usps | fedex | ups)
- `code`
- `details`

### `ThrottlingError`
Thrown when a carrier enforces rate limits (e.g., UPS tracking).

---

## Full Type Definitions

See the `src/types/` directory for complete TypeScript definitions.

---