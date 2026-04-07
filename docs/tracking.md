# Tracking in Shipstack

Shipstack provides a unified tracking interface for USPS, FedEx, and UPS.  
All tracking responses are normalized into a consistent structure, regardless of carrier‑specific formats.

---

## Tracking Request

```ts
trackShipment(
  trackingNumbers: string[],
  carrier: "usps" | "fedex" | "ups",
  config: ShippingConfig
)
```

You may track one or many tracking numbers at once.

---

## Example

```ts
import { trackShipment } from "shipstack";

const tracking = await trackShipment(
  ["9400100000000000000000"],
  "usps",
  config
);

console.log(tracking[0].status.description);
```

---

## Using the ShippingClient

```ts
const tracking = await shipstack.trackShipment(
  ["1Z9999999999999999"],
  "ups"
);
```

---

## Normalized Tracking Structure

```ts
type NormalizedTracking = {
  trackingNumber: string;
  status: {
    code: string;
    description: string;
    date: string | null;
  };
  events: Array<{
    description: string;
    location: string | null;
    date: string;
  }>;
};
```

### Field Notes

- `status.code` is a normalized status (e.g., `"IN_TRANSIT"`, `"DELIVERED"`).
- `status.description` is a human‑readable message.
- `events` are sorted chronologically (oldest → newest).
- `location` may be `null` if the carrier does not provide it.

---

## Carrier Batch Limits

Shipstack automatically handles batching and concurrency rules:

| Carrier | Limit | Behavior |
|--------|--------|----------|
| USPS | 35 per request | Automatically chunks requests |
| FedEx | 30 per request | Automatically chunks requests |
| UPS | Single‑inquiry only | Concurrency‑limited to avoid lockouts |

You do not need to manually chunk tracking numbers — Shipstack handles it for you.

---

## Notes on Carrier Behavior

### USPS
- Bulk tracking supports up to 35 items.
- Some statuses may not include timestamps.

### FedEx
- Provides detailed event history.
- Supports up to 30 items per request.

### UPS
- Only supports single‑inquiry tracking.
- Too many rapid requests may trigger rate limiting.
- Shipstack automatically throttles UPS tracking calls.

---

## Summary

Shipstack’s tracking system provides:

- A unified request format  
- A normalized response structure  
- Automatic batching and concurrency control  
- Full support for USPS, FedEx, and UPS  
- Compatibility with both stateful and functional APIs  

---