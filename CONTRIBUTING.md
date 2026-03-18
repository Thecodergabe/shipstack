# Contributing to Shipstack

First off, thank you for taking the time to contribute! Shipstack aims to be the most reliable, typed, and agnostic shipping SDK in the ecosystem. 

This project operates in **Library Mode**, meaning we prioritize framework agnosticism, strict TypeScript definitions, and zero reliance on global environment variables.

---

## Project Architecture

Shipstack is organized into three distinct layers. Understanding these is key to ensuring your contribution fits the design pattern:

1.  **Generated Layer (`src/[carrier]/generated`)**: Low-level clients generated directly from carrier OpenAPI specs. **Do not edit these files manually.**
2.  **API Layer (`src/api`, `src/[carrier]`)**: Hand-written wrappers that inject configuration, handle authentication, and wrap carrier-specific errors into a unified `ShipstackError`.
3.  **Aggregator Layer (`src/aggregator`, `src/core`)**: The "Brain" of the SDK. This is where multi-carrier orchestration, batching (e.g., USPS 35-limit chunking), and ranking logic live.

---

## Development Workflow

### 1. Regenerating Carrier Clients
If a carrier updates their API spec, we use `openapi-typescript-codegen` to sync our internal types.

* **USPS**: Pulls directly from the official USPS Developer Portal.
    ```bash
    npm run generate:usps
    ```
* **FedEx & UPS**: Uses local specs stored in `specs/[carrier]/*.yaml` or `.json`.
    ```bash
    npm run generate:fedex
    npm run generate:ups
    ```
* **Mass Update**:
    ```bash
    npm run generate:all
    ```

### 2. Extending Carrier Logic
When adding a new feature (e.g., "Saturday Delivery" or "Hazardous Materials"):
1.  **Update the Request Builder**: Modify the carrier's request file (e.g., `src/fedex/rates/request.ts`).
2.  **Update the Converter**: Ensure the carrier's raw response is mapped to our universal `NormalizedRate` or `NormalizedTracking` types in `src/converters/`.
3.  **Update the Aggregator**: Ensure the `ShippingClient` can access the new data via the aggregator layer.

### 3. Working with Path Aliases
We use TypeScript path aliases to keep imports clean and maintainable. Always use the `@/` prefix for internal imports:
* **✅ Correct**: `import { ShipstackError } from "@/errors";`
* **❌ Incorrect**: `import { ShipstackError } from "../../errors";`

---

## Testing & Verification

We use **Vitest** for unit and integration testing.

* **Unit Tests**: Should mock carrier API responses using raw data samples found in `tests/fixtures`.
* **Integration Tests**: Ensure the `ShippingClient` correctly orchestrates calls across multiple carriers and respects the `ShippingConfig`.

```bash
npm run test