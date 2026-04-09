# Staged Shipment Example

This example demonstrates Shipstack's safe shipment builder. It generates a carrier-specific payload without purchasing a label.

```ts
import { buildShipment } from "@teralabs/shipstack";
import { config } from "../config.example";

async function exampleStagedShipment() {
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

  console.log("Carrier:", staged.carrier);
  console.log("Service Code:", staged.serviceCode);
  console.log("Payload:", staged.payload);
}

exampleStagedShipment();
```
