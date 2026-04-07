# Contributing to Shipstack

Thank you for your interest in contributing to Shipstack.  
This project aims to be the most reliable, type‑safe, and framework‑agnostic shipping SDK in the ecosystem.  
Contributions are welcome, whether they involve bug fixes, new features, documentation, or improvements to developer experience.

Shipstack operates in **Library Mode**, meaning:

- No global environment variables  
- No framework assumptions  
- No runtime assumptions  
- Strict TypeScript typing  
- Predictable, testable behavior  

Understanding the project structure will help you contribute effectively.

---

## Project Architecture

Shipstack is organized into three primary layers:

### 1. Generated Layer (`src/[carrier]/generated`)
- Auto‑generated OpenAPI clients for USPS, FedEx, and UPS  
- These files should **never** be edited manually  
- Regenerated using `openapi-typescript-codegen`  

### 2. API Layer (`src/api`, `src/[carrier]`)
- Hand‑written wrappers around the generated clients  
- Handles:
  - Authentication  
  - Request shaping  
  - Error normalization  
  - Configuration injection  
- Exposes the public functional API (`getRates`, `validateAddress`, `trackShipment`, etc.)

### 3. Aggregator Layer (`src/aggregator`)
- The orchestration layer  
- Combines multiple carrier operations into unified workflows  
- Includes:
  - Address aggregator  
  - Rates aggregator  
  - Tracking aggregator  
  - Shipment aggregator (staged + actual)  
- Converts raw carrier responses into normalized Shipstack types  

---

## Development Workflow

### 1. Regenerating Carrier Clients

USPS pulls directly from the official USPS Developer Portal:

```bash
npm run generate:usps
```

FedEx and UPS use local OpenAPI specs stored in `specs/fedex` and `specs/ups`:

```bash
npm run generate:fedex
npm run generate:ups
```

Regenerate all carriers:

```bash
npm run generate:all
```

---

### 2. Adding or Extending Features

When implementing new functionality (e.g., Saturday delivery, new service codes, new tracking fields):

1. **Update the Request Builder**  
   Modify the appropriate file, such as:  
   - `src/fedex/rates/request.ts`  
   - `src/usps/labels/request.ts`  
   - `src/ups/shipping/request.ts`

2. **Update the Converter**  
   Ensure the raw carrier response is mapped to Shipstack’s normalized types:  
   - `src/converters/rates/*`  
   - `src/converters/tracking/*`  
   - `src/converters/shipment/*`

3. **Update the Aggregator**  
   Make sure the new data flows through the orchestrator layer.

4. **Update the Public API**  
   If the feature should be exposed to users, update:  
   - `src/api/*`  
   - `src/index.ts`

5. **Add Tests**  
   All new features must include unit tests and, when appropriate, integration tests.

---

## Path Aliases

Shipstack uses TypeScript path aliases for clean imports.

Always use:

```ts
import { ShipstackError } from "@/errors";
```

Never use relative paths like:

```ts
import { ShipstackError } from "../../errors";
```

---

## Testing

Shipstack uses **Vitest** for testing.

### Unit Tests
- Should mock carrier responses  
- Use fixtures stored in `tests/fixtures`  
- Test request builders, converters, and error handling

### Integration Tests
- Validate aggregator behavior  
- Ensure multi‑carrier workflows behave consistently  
- Test staged vs actual shipment creation

Run tests:

```bash
npm run test
```

---

## Staged vs Actual Shipment Testing

Shipstack supports two shipment modes:

### Staged Shipments (Safe Mode)
- No API calls  
- No label creation  
- Pure request‑builder logic  
- Must be fully tested with fixtures

### Actual Shipments (Advanced Mode)
- Calls real carrier APIs  
- Should be tested with mocked responses  
- Never hit live carrier endpoints in CI

---

## Pull Request Guidelines

1. Fork the repository  
2. Create a feature branch  
3. Write clear commit messages  
4. Include tests for all new functionality  
5. Update documentation when necessary  
6. Ensure the build passes  
7. Submit a PR with a clear description of the change  

---

## Coding Standards

- TypeScript only  
- No `any` unless absolutely necessary  
- Prefer pure functions  
- Avoid side effects in request builders  
- Use `ShipstackError` for all thrown errors  
- Maintain consistent naming across carriers  
- Keep the public API stable and predictable  

---

## Need Help?

If you’re unsure where to start, feel free to open a GitHub Discussion or Issue.  
We’re happy to help guide contributions of any size.

---