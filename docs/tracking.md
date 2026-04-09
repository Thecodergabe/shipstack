# Tracking in Shipstack

Shipstack provides a unified tracking interface for USPS, FedEx, and UPS.  
All tracking responses are normalized into a consistent structure, regardless of carrier-specific formats.

---

## Tracking Request

```ts
trackShipment(
  trackingNumbers: string | string[],
  carrier: "usps" | "fedex" | "ups",
  config: ShippingConfig
)
```

You may track one or many tracking numbers at once.

---

## Functional Example

```ts
import { trackShipment } from "@teralabs/shipstack";

const tracking = await trackShipment(
  ["9400100000000000000000"],
  "usps",
  config
);

console.log(tracking[0]?.status);
```

---

## Using `ShippingClient`

```ts
const tracking = await client.track(["1Z9999999999999999"], "ups");
```

---

## Normalized Tracking Structure

```ts
type NormalizedTracking = {
  carrier: "usps" | "fedex" | "ups";
  trackingNumber: string;
  status: string;
  estimatedDelivery?: string;
  events: Array<{
    description: string;
    dateTime: string;
    city?: string;
    stateOrProvinceCode?: string;
    postalCode?: string;
    countryCode?: string;
  }>;
  raw?: unknown;
};
```

### Field Notes

- `status` is a normalized high-level tracking state such as `IN_TRANSIT` or `DELIVERED`.
- `estimatedDelivery` is optional when the carrier provides an ETA.
- `events` contain the normalized event history returned by the carrier.

---

## Carrier Batch Limits

Shipstack automatically handles batching and concurrency rules:

| Carrier | Limit | Behavior |
|--------|--------|----------|
| USPS | 35 per request | Automatically chunks requests |
| FedEx | 30 per request | Automatically chunks requests |
| UPS | Single-inquiry only | Concurrency-limited to avoid lockouts |

You do not need to manually chunk tracking numbers. Shipstack handles it for you.

---

## Notes on Carrier Behavior

### USPS
- Bulk tracking supports up to 35 items.
- Some events may not include a full timestamp.

### FedEx
- Provides detailed event history.
- Supports up to 30 items per request.

### UPS
- Only supports single-inquiry tracking.
- Too many rapid requests may trigger rate limiting.
- Shipstack automatically throttles UPS tracking calls.

---

## Summary

Shipstack's tracking system provides:

- A unified request format
- A normalized response structure
- Automatic batching and concurrency control
- Full support for USPS, FedEx, and UPS
- Compatibility with both stateful and functional APIs

---