# Error Handling in Shipstack

Shipstack provides a unified, predictable error‑handling system across all carriers (USPS, FedEx, UPS).  
All errors thrown by Shipstack extend from a single base class: `ShipstackError`.

This document explains the error types, their structure, and how to handle them correctly.

---

## Overview

Shipstack errors fall into three categories:

1. **ShipstackError** — the base error for all failures  
2. **Carrier Errors** — normalized errors from USPS, FedEx, or UPS  
3. **ThrottlingError** — raised when a carrier enforces rate limits  

All errors are normalized so you don’t have to deal with inconsistent carrier formats.

---

## Base Error: ShipstackError

All errors thrown by Shipstack extend from this class.

```ts
class ShipstackError extends Error {
  carrier?: "usps" | "fedex" | "ups";
  code?: string;
  details?: unknown;
}
```

### Fields

| Field | Description |
|-------|-------------|
| `message` | Human‑readable error message |
| `carrier` | The carrier that caused the error (if applicable) |
| `code` | Carrier‑specific or normalized error code |
| `details` | Raw carrier response or additional metadata |

---

## Example: Catching Errors

```ts
try {
  await shipstack.getRates(request);
} catch (err) {
  if (err instanceof ShipstackError) {
    console.error("Carrier:", err.carrier);
    console.error("Code:", err.code);
    console.error("Message:", err.message);
  }
}
```

---

## Carrier Errors

Shipstack normalizes carrier‑specific errors into a consistent structure.

### USPS Errors

Common causes:

- Invalid ZIP codes  
- Missing address fields  
- USPS API downtime  
- Invalid credentials  

### FedEx Errors

Common causes:

- Authentication failures  
- Invalid service codes  
- Missing account number  
- Address validation failures  

### UPS Errors

Common causes:

- OAuth token failures  
- Invalid shipper number  
- Rate‑limit enforcement  
- Missing or invalid dimensions  

---

## ThrottlingError

UPS and FedEx may enforce rate limits.  
Shipstack throws a `ThrottlingError` when this happens.

```ts
class ThrottlingError extends ShipstackError {}
```

### When It Occurs

- Too many UPS tracking requests in a short period  
- FedEx rate‑limit enforcement  
- USPS bulk tracking overload  

### Example

```ts
try {
  await trackShipment(numbers, "ups", config);
} catch (err) {
  if (err instanceof ThrottlingError) {
    console.log("Carrier is rate limiting. Try again later.");
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
- Carrier throttling (UPS)  
- Unsupported formats  

### Address Validation

- Missing required fields  
- Invalid postal codes  
- Ambiguous addresses  

### Shipments

#### Staged Shipments
Errors occur only if:
- Required fields are missing  
- Service codes are invalid  

No carrier calls are made.

#### Actual Shipments
Errors may occur due to:
- Authentication failures  
- Invalid shipment payloads  
- Carrier downtime  
- Billing issues  

---

## Best Practices

### Always Catch ShipstackError

```ts
try {
  await createShipment(request, config);
} catch (err) {
  if (err instanceof ShipstackError) {
    // handle gracefully
  }
}
```

### Log `carrier` and `code`

These two fields are the most useful for debugging.

### Never Expose Raw Carrier Errors to Users

Use `message` for user‑facing output.  
Use `details` for internal logging.

---

## Summary

Shipstack’s error system provides:

- A unified error interface  
- Normalized carrier errors  
- Specialized throttling detection  
- Consistent behavior across all workflows  
- Strong typing for safe error handling  

---