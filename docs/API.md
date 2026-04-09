# Shipstack API Reference

This document covers the public Shipstack surface shipped through the npm entrypoint: `ShippingClient`, `ShippingManager`, the functional API, exported rate clients, and the core types.

---

## ShippingClient

The `ShippingClient` is the primary stateful API for direct per-carrier operations.

### Constructor

```ts
new ShippingClient(config: ShippingConfig)
```

### Methods

#### `getRates(request: RateRequest): Promise<NormalizedRate[]>`
Fetches normalized rates for the carrier specified on `request.carrier`.

#### `validateAddress(request: AddressValidationRequest): Promise<AddressValidationResult>`
Validates an address using the selected carrier.

#### `track(trackingNumbers: string | string[], carrier: Carrier): Promise<NormalizedTracking[]>`
Tracks one or more shipments with automatic batching and normalization.

#### `getBestValue(request: RateRequest): Promise<NormalizedRate | null>`
Returns the cheapest rate for the selected carrier.

#### `getFastest(request: RateRequest): Promise<NormalizedRate | null>`
Returns the fastest rate for the selected carrier.

#### `buildShipment(request: ShipmentRequest): Promise<StagedShipment>`
Builds a carrier-specific shipment payload without purchasing a label.

#### `createShipment(request: ShipmentRequest): Promise<NormalizedShipment>`
Creates an actual shipment and purchases a real label.

#### `ShippingClient.predict(trackingNumber: string): Carrier | "unknown"`
Static helper that predicts the carrier from a tracking number pattern.

---

## ShippingManager

`ShippingManager` is the advanced stateful helper for cross-carrier checkout workflows.

### Constructor

```ts
new ShippingManager(config: ShippingConfig)
```

### Methods

#### `getRankedRates(request: Omit<RateRequest, "carrier">, carriers: Carrier[]): Promise<NormalizedRate[]>`
Queries multiple carriers, merges the results, sorts by price, and marks `isCheapest` and `isFastest` when available.

#### `validateAddress(request: AddressValidationRequest): Promise<AddressValidationResult>`
Convenience wrapper around the address API using the manager's config.

#### `track(trackingNumbers: string | string[], carrier: Carrier): Promise<NormalizedTracking[]>`
Convenience wrapper around the tracking API using the manager's config.

---

## Functional API

The functional API exposes stateless helpers when you do not want to retain a client instance.

```ts
getRates(request: RateRequest, config: ShippingConfig): Promise<NormalizedRate[]>
validateAddress(request: AddressValidationRequest, config: ShippingConfig): Promise<AddressValidationResult>
trackShipment(trackingNumbers: string | string[], carrier: Carrier, config: ShippingConfig): Promise<NormalizedTracking[]>
getBestValueRate(request: RateRequest, config: ShippingConfig): Promise<NormalizedRate | null>
getFastestService(request: RateRequest, config: ShippingConfig): Promise<NormalizedRate | null>
predictCarrier(trackingNumber: string): Carrier | "unknown"
buildShipment(request: ShipmentRequest, config: ShippingConfig): Promise<StagedShipment>
createShipment(request: ShipmentRequest, config: ShippingConfig): Promise<NormalizedShipment>
```

---

## Direct Carrier Access

Only the low-level rate clients are exported directly from the package entrypoint.

```ts
createUspsRatesClient(config: UspsConfig)
createFedexRatesClient(config: FedexConfig)
createUpsRatesClient(config: UpsConfig)
```

---

## Core Types

### `ShippingConfig`

```ts
type ShippingConfig = {
  environment?: "sandbox" | "production";
  usps?: {
    enabled: boolean;
    clientId: string;
    clientSecret: string;
    apiKey?: string;
    baseUrl?: string;
    authUrl?: string;
    labelsBaseUrl?: string;
  };
  fedex?: {
    enabled: boolean;
    clientId: string;
    clientSecret: string;
    accountNumber: string;
    baseUrl?: string;
  };
  ups?: {
    enabled: boolean;
    clientId: string;
    clientSecret: string;
    accountNumber: string;
    baseUrl?: string;
  };
};
```

### `RateRequest`
Origin, destination, weight, and package dimensions for a single-carrier rate lookup.

### `AddressValidationRequest`
Carrier plus a structured postal address using `streetLines`, `stateOrProvinceCode`, and `countryCode`.

### `AddressValidationResult`
Top-level address validation response with `isValid`, optional `normalizedAddress`, and optional `messages`.

### `NormalizedRate`
Unified rate object returned by all carriers.

### `NormalizedTracking`
Normalized tracking status and event history.

### `ShipmentRequest`
Carrier, service, from/to addresses, and package details required to build or purchase a shipment.

### `StagedShipment`
Carrier-specific payload returned by `buildShipment`.

### `NormalizedShipment`
Unified shipment result returned by `createShipment`.

---

## Error Types

### `ShipstackError`
Base error type for Shipstack operations.

Properties include:

- `message`
- `carrier` (`"usps" | "fedex" | "ups"`)
- `cause`

### `ThrottlingError`
Extends `ShipstackError` and adds `retryAfter?: number` when a carrier returns a throttling signal.

---

## Full Type Definitions

The published package exposes its full TypeScript surface through `dist/index.d.ts` and `dist/index.d.mts`.

---