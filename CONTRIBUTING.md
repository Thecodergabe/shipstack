# Contributing to Shipstack: USPS & FedEx Modules

Thanks for your interest in contributing! This guide explains how to regenerate the USPS and FedEx clients, extend the wrappers safely, and work within the project structure.

## Regenerating the USPS Client

We use openapi-typescript-codegen to generate a typed USPS client from their OpenAPI spec.

### Install Dev Dependencies

```bash
npm install
```

### Run the Generator

```bash
npm run generate:usps
```

This pulls the latest USPS OAuth spec and regenerates the client in `src/usps/generated/`.

## Regenerating the FedEx Clients

FedEx OpenAPI specs are stored locally in `specs/fedex/*.json`. These were downloaded manually from the FedEx Developer Portal.

To regenerate the FedEx clients, run:

```bash
npm run generate:fedex
```

This will regenerate:

- Address → `src/fedex/address/generated/`
- Availability → `src/fedex/availability/generated/`
- Rate → `src/fedex/rates/generated/`
- Ship → `src/fedex/ship/generated/`

## Verifying Changes

After regeneration:

- Check for breaking changes in method names or types
- Update `createUspsClient()` or FedEx client factories if needed
- Run tests or example usage
- Confirm method names and types are stable
- Update wrapper logic in `src/fedex/[module]/client.ts` if needed

## Extending the Wrapper

### USPS

Add new methods to `src/usps/client.ts` that wrap generated endpoints with:

- Config injection
- Logging (`getLogger()`)
- Error wrapping (`ShipstackError`)

### FedEx

Each wrapper uses `DefaultService` from its generated module. Add custom logic to:

- Inject config
- Log lifecycle events
- Wrap errors with `ShipstackError`

## Testing Locally

Test the USPS client in any Node.js or edge environment:

```javascript
import { setConfig, createUspsClient } from "shipstack";

setConfig({ USPS_API_KEY: "your-key" });

const usps = createUspsClient();
```

## Code Style

- TypeScript strict mode is enabled
- tsup is used for builds
- Keep USPS logic isolated in `src/usps/`
- Keep FedEx logic isolated in `src/fedex/`

## Thank You

We appreciate your contributions! Feel free to open issues or PRs for new carriers, improvements, or bug fixes.
