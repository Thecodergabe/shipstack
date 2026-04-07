# Address Validation in Shipstack

Shipstack provides a unified interface for validating addresses across USPS, FedEx, and UPS.  
All carrier responses are normalized into a consistent structure, regardless of the underlying API.

---

## Request Structure

```ts
type AddressValidationRequest = {
  carrier: "usps" | "fedex" | "ups";
  address: {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string; // defaults to "US"
  };
};
```

### Notes

- `country` defaults to `"US"` if omitted.
- USPS may return corrected addresses.
- FedEx and UPS may return validation messages or suggestions.

---

## Example

```ts
const result = await shipstack.validateAddress({
  carrier: "fedex",
  address: {
    street1: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001"
  }
});
```

---

## Using the Functional API

```ts
import { validateAddress } from "shipstack";

const result = await validateAddress(request, config);
```

---

## Normalized Address Structure

```ts
type NormalizedAddress = {
  isValid: boolean;

  corrected?: {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    postalCode: string;
  };

  messages?: string[];
};
```

### Field Notes

- `isValid` indicates whether the carrier considers the address deliverable.
- `corrected` is included when the carrier suggests a standardized version.
- `messages` may include warnings, suggestions, or error descriptions.

---

## Carrier‑Specific Behavior

### USPS
- Often returns corrected addresses.
- May normalize abbreviations (e.g., “ST” → “Street”).
- Strongest validation for residential addresses.

### FedEx
- Provides detailed validation messages.
- May return multiple suggestions for ambiguous addresses.

### UPS
- Strict validation rules.
- May require full ZIP+4 for certain regions.

---

## Summary

Shipstack’s address validation system provides:

- A unified request format  
- A normalized response structure  
- Carrier‑specific corrections and messages  
- Support for USPS, FedEx, and UPS  
- Compatibility with both stateful and functional APIs  

---