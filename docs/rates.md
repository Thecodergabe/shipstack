# Rates in Shipstack

Shipstack provides a unified interface for fetching shipping rates from USPS, FedEx, and UPS.  
All rate responses are normalized into a consistent structure, regardless of carrier-specific formats.

---

## Rate Request Structure

```ts
type RateRequest = {
  carrier: "usps" | "fedex" | "ups";
  originZip: string;
  destZip: string;
  weightOz: number;
  lengthInches: number;
  widthInches: number;
  heightInches: number;
  destCountryCode?: string;
};
```

Carrier-specific optional fields such as `mailClass`, `pickupType`, `packagingType`, and `rateRequestType` are also supported when needed.

---

## Fetching Rates

### Using `ShippingClient`

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

### Using the Functional API

```ts
import { getRates } from "@teralabs/shipstack";

const rates = await getRates(request, config);
```

Both methods return the same normalized structure.

---

## Ranking Across Carriers

Use `ShippingManager` when you want Shipstack to fetch from multiple carriers and rank the results for you.

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

---

## Normalized Rate Structure

```ts
type NormalizedRate = {
  carrier: "usps" | "fedex" | "ups";
  serviceCode: string;
  serviceName: string;
  deliveryDays?: number;
  estimatedArrival?: string;
  isFastest?: boolean;
  isCheapest?: boolean;
  guaranteed?: boolean;
  cost: {
    amount: number;
    currency: string;
  };
  raw?: unknown;
};
```

### Field Notes

- `deliveryDays` is optional when a carrier does not provide an estimate.
- `estimatedArrival` is typically an ISO-8601 string when available.
- `isCheapest` and `isFastest` are added by `ShippingManager#getRankedRates`.
- `cost.amount` is always numeric.

---

## Best Value and Fastest Helpers

These helpers work on a single-carrier `RateRequest`.

```ts
import { getBestValueRate, getFastestService } from "@teralabs/shipstack";

const cheapest = await getBestValueRate(request, config);
const fastest = await getFastestService(request, config);
```

Both helpers return `null` when no valid rates are available.

---

## Carrier-Specific Notes

### USPS
- Delivery estimates may be missing for some services.
- USPS-specific flags such as `mailClass` and `nonStandard` are supported.

### FedEx
- Requires `accountNumber` in config.
- Supports FedEx-specific options such as `pickupType`, `dropoffType`, and `rateRequestType`.

### UPS
- Requires `accountNumber` in config.
- Dimensions are especially important for many UPS services.

---

## Summary

Shipstack's rate system provides:

- A unified request format
- A normalized response structure
- Single-carrier helper methods
- Multi-carrier ranking through `ShippingManager`
- Full support for USPS, FedEx, and UPS

---
