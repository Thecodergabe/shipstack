# Contributing to Shipstack: USPS Module

Thanks for your interest in contributing! This guide will help you regenerate the USPS client and extend the module safely.

## Regenerating the USPS Client

We use [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) to generate a typed USPS client from their OpenAPI spec.

### 1. Install Dev Dependencies
npm install

### 2. Run the Generator
npm run generate:usps
This pulls the latest USPS OAuth spec and regenerates the client in src/usps/generated/

FedEx OpenAPI specs are stored locally in specs/fedex/ as .json files. These were downloaded manually from the FedEx Developer Portal. To regenerate the FedEx clients, run:
npm run generate:fedex

This will regenerate:
- Address → src/fedex/address/generated/
- Availability → src/fedex/availability/generated/
- Rate → src/fedex/rates/generated/
- Ship → src/fedex/ship/generated/


### 3. Verify Changes
- Check for breaking changes in method names or types.
- Update createUspsClient() if needed.
- Run tests or example usage.
- Confirm method names and types are stable.
- Update wrapper logic in src/fedex/[module]/client.ts if needed.

### 4. Extending the Wrapper
USPS
You can add new methods to src/usps/client.ts that wrap generated endpoints with:
- Config injection
- Logging (getLogger())
- Error wrapping (ShipstackError)

Extend FedEx Wrappers
Each wrapper uses DefaultService from its generated module. You can add custom logic to:
- Inject config
- Log lifecycle events
- Wrap errors with ShipstackError

### 5. Testing Locally
You can test the USPS client in any Node.js or edge environment. Just import and configure:
import { setConfig, createUspsClient } from "shipstack";

setConfig({ USPS_API_KEY: "your-key" });
const usps = createUspsClient();


### 6. Code Style
- TypeScript strict mode is enabled
- Use tsup for builds
- Keep USPS logic isolated in src/usps/

### 7. Thank You
We appreciate your contributions! Feel free to open issues or PRs for new carriers, improvements, or bug fixes.

