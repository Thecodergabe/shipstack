# Address Validation in Shipstack

Shipstack provides a unified interface for validating addresses across USPS, FedEx, and UPS.  
All carrier responses are normalized into a consistent structure, regardless of the underlying API.

---

## Request Structure

```ts
type AddressValidationRequest = {
  carrier: "usps" | "fedex" | "ups";
  address: {
    streetLines: string[];
    city: string;
    stateOrProvinceCode: string;
    postalCode: string;
    countryCode: string;
  };
};
```

### Notes

- `streetLines` supports multiple address lines.
- `countryCode` should be an ISO-3166-1 alpha-2 code such as `US`.
- USPS, FedEx, and UPS may each return different levels of correction detail, but Shipstack normalizes the top-level response shape.

---

## Example

```ts
const result = await client.validateAddress({
  carrier: "fedex",
  address: {
    streetLines: ["123 Main St"],
    city: "New York",
    stateOrProvinceCode: "NY",
    postalCode: "10001",
    countryCode: "US"
  }
});
```

---

## Using the Functional API

```ts
import { validateAddress } from "@teralabs/shipstack";

const result = await validateAddress(request, config);
```

---

## Address Validation Result

```ts
type AddressValidationResult = {
  isValid: boolean;
  normalizedAddress?: {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    isValid: boolean;
    classification?: "RESIDENTIAL" | "COMMERCIAL" | "UNKNOWN";
    isPoBox: boolean;
    raw?: unknown;
  };
  messages?: string[];
  raw?: unknown;
};
```

### Field Notes

- `isValid` indicates whether the carrier considers the address deliverable.
- `normalizedAddress` is included when the carrier returns a standardized address shape.
- `messages` may include warnings, suggestions, or correction notes.

---

## Carrier-Specific Behavior

### USPS
- Often returns corrected addresses.
- May normalize abbreviations and formatting.

### FedEx
- Provides detailed validation messages.
- May classify an address as residential or commercial.

### UPS
- Uses stricter validation rules for some addresses.
- May require more complete postal information in edge cases.

---

## Summary

Shipstack's address validation system provides:

- A unified request format
- A normalized top-level result
- Optional corrected address data
- Carrier-specific messages when available
- Compatibility with both stateful and functional APIs

---