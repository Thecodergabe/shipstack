# Shipstack

[![npm version](https://badge.fury.io/js/shipstack.svg)](https://badge.fury.io/js/shipstack)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)

> Typed, modular shipping API wrapper supporting USPS and FedEx with auto-generated clients from official OpenAPI specs

Shipstack provides a clean, type-safe interface to USPS and FedEx APIs. It's built with:
- **OpenAPI-generated clients** for guaranteed API compliance
- **Built-in logging & error handling** with structured error messages
- **Runtime configuration** for flexible deployment
- **Multi-platform support** - Node.js, Cloudflare Workers, Azure Functions, and more

## Features

- 📦 USPS and FedEx API clients
- 🔒 Full TypeScript support with type definitions
- 🌍 Cross-platform runtime (Node.js, edge functions, etc.)
- ⚙️ Runtime configuration without rebuilding
- 📝 Comprehensive logging and error handling
- 🔄 Auto-generated from official OpenAPI specs

## Installation

```bash
npm install shipstack
```

## Quick Start

### Configuration

```javascript
import { setConfig, setLogger, setLogLevel } from "shipstack";

setConfig({
  USPS_API_KEY: "your-usps-api-key",
  USPS_BASE_URL: "https://sandbox.api.usps.com" // optional
});

setLogger(console); // optional
setLogLevel("info"); // optional - one of: debug, info, warn, error
```

### USPS Example

```javascript
import { createUspsClient } from "shipstack";

const usps = createUspsClient();

// Get OAuth token
const token = await usps.oauth2Token({ 
  grant_type: "client_credentials" 
});

// Get rates
const rates = await usps.rates({
  // ... rate parameters
});
```

### FedEx Example

```javascript
import {
  createFedexAddressClient,
  createFedexRateClient,
When the API specs change, regenerate the clients:

```bash
npm run generate:usps      # Regenerate USPS client
npm run generate:fedex     # Regenerate FedEx clients
npm run generate:all       # Regenerate all clients
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed information on extending the library.

## Testing

```bash
npm test                   # Run all tests
npm test -- --watch       # Watch mode
```

## Building

```bash
npm run build             # Build ESM and CommonJS
```

Output is in the `dist/` directory with TypeScript definitions included.

## License

[ISC License](LICENSE) - See LICENSE file for details.

## Support

- 📖 [GitHub Issues](https://github.com/yourusername/shipstack/issues)
- 📝 [Contributing](./CONTRIBUTING.md)
- 📋 [Changelog](./CHANGELOG.md)

## Related Links
- [OpenAPI Specification](https://learn.openapis.org/)
- [USPS Developer Documentation](https://developers.usps.com/)
- [FedEx Developer Portal](https://developer.fedex.com/)
} from "shipstack";

const fedexAddress = createFedexAddressClient();
const fedexRates = createFedexRateClient();
const fedexShip = createFedexShipClient();
const fedexAvailability = createFedexAvailabilityClient();

// Validate address
const validation = await fedexAddress.addressValidation({
  // ... address parameters
});

// Get rates
const rates = await fedexRates.rateRequest({
  // ... rate parameters
});
```

## API Documentation

### USPS
- [Authentication](https://developers.usps.com/getting-started)
- [Domestic Pricing](https://developers.usps.com/apis/shipping/domestic-prices)
- [Address Validation](https://developers.usps.com/apis/addresses)
- [Tracking](https://developers.usps.com/apis/tracking)
- [Labels](https://developers.usps.com/apis/labels)
- [International Pricing](https://developers.usps.com/apis/shipping/international-prices)

### FedEx
- [Developer Resources](https://developer.fedex.com/)
- [Address Validation](https://developer.fedex.com/api/en-us/catalog/address-validation.html)
- [Rate Shopping](https://developer.fedex.com/api/en-us/catalog/rate.html)
- [Ship](https://developer.fedex.com/api/en-us/catalog/ship.html)
- [Service Availability](https://developer.fedex.com/api/en-us/catalog/service-availability.html)

## Configuration

Configuration via `setConfig()` supports:

```typescript
interface ShipstackConfig {
  USPS_API_KEY?: string;
  USPS_BASE_URL?: string;
  FEDEX_API_KEY?: string;
  FEDEX_SECRET_KEY?: string;
  FEDEX_ACCOUNT_ID?: string;
  FEDEX_METER_NUMBER?: string;
}
```

## Error Handling

```javascript
import { ShipstackError } from "shipstack";

try {
  const rates = await usps.rates({...});
} catch (error) {
  if (error instanceof ShipstackError) {
    console.error(error.message); // Formatted error
    console.error(error.originalError); // Original API error
  }
}
```

## Logging

Control logging output:

```javascript
setLogLevel("debug"); // Detailed logs
setLogLevel("info");  // General info
setLogLevel("warn");  // Warnings only
setLogLevel("error"); // Errors only
```

## Development

### Prerequisites
- Node.js 16+
- npm 7+

### Setup

```bash
npm install
npm run build
npm test
```

### Regenerating Clients

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for regenerating clients and extending the library.
