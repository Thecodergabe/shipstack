# Error Handling in Shipstack

Shipstack provides a unified, predictable error-handling system across USPS, FedEx, and UPS.  
All Shipstack-specific errors extend from `ShipstackError`.

---

## Overview

Shipstack errors fall into two main categories:

1. **ShipstackError** for normalized library failures
2. **ThrottlingError** when a carrier enforces rate limits

Carrier-specific details are preserved on the error's `cause` property when available.

---

## Base Error: `ShipstackError`

```ts
class ShipstackError extends Error {
  carrier: "usps" | "fedex" | "ups";
  cause?: unknown;
}
```

### Fields

| Field | Description |
|-------|-------------|
| `message` | Human-readable error message |
| `carrier` | The carrier associated with the failure |
| `cause` | Raw upstream error, response, or context when available |

---

## Example: Catching Errors

```ts
try {
  await client.getRates(request);
} catch (err) {
  if (err instanceof ShipstackError) {
    console.error("Carrier:", err.carrier);
    console.error("Message:", err.message);
    console.error("Cause:", err.cause);
  }
}
```

---

## `ThrottlingError`

UPS and FedEx may enforce rate limits. Shipstack throws a `ThrottlingError` when this happens.

```ts
class ThrottlingError extends ShipstackError {
  retryAfter?: number;
}
```

### When It Occurs

- Too many UPS tracking requests in a short period
- FedEx rate-limit enforcement
- Carrier-side retry-after signals

### Example

```ts
try {
  await trackShipment(numbers, "ups", config);
} catch (err) {
  if (err instanceof ThrottlingError) {
    console.log("Carrier is rate limiting. Retry after:", err.retryAfter);
  }
}
```

---

## Error Behavior by Workflow

### Rates

- Missing or invalid ZIP codes
- Unsupported service combinations
- Carrier downtime

### Tracking

- Invalid tracking numbers
- Carrier throttling
- Upstream authentication or network failures

### Address Validation

- Missing required fields
- Invalid postal codes
- Ambiguous addresses

### Shipments

#### Staged Shipments
Errors occur only if request data is incomplete or invalid.

#### Actual Shipments
Errors may occur due to authentication failures, invalid shipment payloads, carrier downtime, or billing issues.

---

## Best Practices

### Always Catch `ShipstackError`

```ts
try {
  await createShipment(request, config);
} catch (err) {
  if (err instanceof ShipstackError) {
    // handle gracefully
  }
}
```

### Log `carrier` and `cause`

These are the most useful fields for debugging carrier-specific failures.

### Do Not Expose Raw Upstream Errors to End Users
Prefer logging `cause` internally and returning a safe application-level message to the frontend.

Use `message` for user‑facing output.  
Use `cause` for internal logging.

---

## Summary

Shipstack’s error system provides:

- A unified error interface  
- Normalized carrier errors  
- Specialized throttling detection  
- Consistent behavior across all workflows  
- Strong typing for safe error handling  

---