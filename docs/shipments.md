# Shipments in Shipstack

Shipstack supports two distinct shipment workflows:

1. **Staged Shipments (Safe Mode)**
2. **Actual Shipments (Advanced Mode)**

Understanding the difference is essential for building secure and flexible shipping systems.

---

## 1. Staged Shipments (Safe Mode)

Staged shipments generate a **carrier-specific shipment payload** without calling the carrier API or purchasing a label.

This mode is ideal for:

- Storefronts
- Serverless and edge environments
- Email-based label workflows
- Custom dashboards
- Platforms where merchants finalize labels later
- Any environment where you cannot expose carrier credentials

### Example

```ts
import { buildShipment } from "shipstack";

const staged = await buildShipment(
  {
    carrier: "fedex",
    serviceCode: "FEDEX_GROUND",
    fromAddress: {
      name: "Sender Name",
      streetLines: ["123 Warehouse Rd"],
      city: "Los Angeles",
      stateOrProvinceCode: "CA",
      postalCode: "90001",
      countryCode: "US"
    },
    toAddress: {
      name: "Customer Name",
      streetLines: ["55 W 46th St"],
      city: "New York",
      stateOrProvinceCode: "NY",
      postalCode: "10036",
      countryCode: "US"
    },
    package: {
      weightOz: 32,
      lengthInches: 12,
      widthInches: 8,
      heightInches: 4
    }
  },
  config
);

console.log(staged.payload);
```

### What Staged Shipments Provide

```ts
type StagedShipment = {
  carrier: "usps" | "fedex" | "ups";
  serviceCode: string;
  payload: unknown;
};
```

### What Staged Shipments Do Not Do

- Do not call USPS, FedEx, or UPS
- Do not purchase postage
- Do not generate a label
- Do not require backend security

This makes staged shipments safe for any environment, including the browser.

---

## 2. Actual Shipments (Advanced Mode)

Actual shipments call the carrier API and purchase a real label.  
This workflow must only be used in secure backend environments.

### Example

```ts
import { createShipment } from "shipstack";

const shipment = await createShipment(request, config);

console.log(shipment.label.base64);
console.log(shipment.trackingNumber);
```

### What Actual Shipments Provide

```ts
type NormalizedShipment = {
  carrier: "usps" | "fedex" | "ups";
  trackingNumber: string;
  serviceCode: string;
  serviceName: string;
  label: {
    format: "PDF" | "PNG" | "ZPL" | "GIF";
    base64: string;
  };
  charges?: {
    amount: number;
    currency: string;
  };
  raw?: unknown;
};
```

### What Actual Shipments Require

- Secure backend environment
- Valid carrier credentials
- Merchant authorization to purchase labels

---

## Safe vs Advanced Comparison

| Feature | Staged (`buildShipment`) | Actual (`createShipment`) |
|--------|---------------------------|---------------------------|
| Generates carrier payload | Yes | Yes |
| Purchases a label | No | Yes |
| Safe for frontend | Yes | No |
| Requires backend | No | Yes |
| Calls carrier API | No | Yes |
| Good for email workflows | Yes | Limited |
| Good for automation | Limited | Yes |

---

## When to Use Each Mode

### Use **Staged Shipments** when:
- You want to preview or store the carrier payload
- You want to send the payload to a merchant for approval
- You are running in a serverless or edge environment
- You want to avoid accidental label purchases
- You are building a storefront or checkout flow

### Use **Actual Shipments** when:
- You are ready to purchase a label
- You are running in a secure backend
- You need a real tracking number and label file
- You are automating fulfillment

---