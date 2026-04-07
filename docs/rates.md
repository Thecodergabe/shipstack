# Rates in Shipstack

Shipstack provides a unified interface for fetching shipping rates from USPS, FedEx, and UPS.  
All rate responses are normalized into a consistent structure, regardless of carrier‑specific formats.

---

## Rate Request Structure

```ts
type RateRequest = {
  carrier: "usps" | "fedex" | "ups";
  fromPostalCode: string;
  toPostalCode: string;
  weightOz: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
};
```

### Notes

- `dimensions` are optional for carriers that support weight‑only services.
- All units are standardized:
  - Weight → ounces  
  - Dimensions → inches  

---

## Fetching Rates

### Using the ShippingClient

```ts
const rates = await shipstack.getRates({
  carrier: "usps",
  fromPostalCode: "90210",
  toPostalCode: "10001",
  weightOz: 16
});
```

### Using the Functional API

```ts
import { getRates } from "shipstack";

const rates = await getRates(request, config);
```

Both methods return the same normalized structure.

---

## Normalized Rate Structure

```ts
type NormalizedRate = {
  carrier: string;
  serviceCode: string;
  serviceName: string;
  deliveryDays: number | null;
  cost: {
    amount: number;
    currency: string;
  };
};
```

### Field Notes

- `deliveryDays` may be `null` if the carrier does not provide an estimate.
- `serviceCode` is the carrier’s internal code (e.g., `"FEDEX_GROUND"`).
- `serviceName` is a human‑readable label (e.g., `"FedEx Ground"`).
- `cost.amount` is always a number, never a string.

---

## Best Value Rate

Returns the cheapest available rate.

```ts
const best = await shipstack.getBestValueRate(request);
```

---

## Fastest Service

Returns the service with the lowest delivery estimate.

```ts
const fastest = await shipstack.getFastestService(request);
```

---

## Multi‑Carrier Workflows

To compare across carriers, call `getRates` for each carrier and merge the results:

```ts
const carriers = ["usps", "fedex", "ups"] as const;

const allRates = (
  await Promise.all(
    carriers.map(carrier =>
      shipstack.getRates({ ...request, carrier })
    )
  )
).flat();
```

Then apply your own ranking logic or use:

- `getBestValueRate`
- `getFastestService`

---

## Carrier‑Specific Notes

### USPS
- Supports weight‑only and dimensional services.
- Delivery estimates may be missing for some services.

### FedEx
- Requires `accountNumber` in config.
- Provides detailed delivery estimates.

### UPS
- Requires `accountNumber` in config.
- Some services require dimensions even for lightweight parcels.

---

## Summary

Shipstack’s rate system provides:

- A unified request format  
- A normalized response structure  
- Optional ranking helpers  
- Full support for USPS, FedEx, and UPS  
- Compatibility with both stateful and functional APIs  

---
