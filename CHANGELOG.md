# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-15

### Added
- Initial release
- USPS API client with OAuth2 authentication
- USPS endpoints: rates, address validation, labels, tracking, appointments, carrier pickup, adjustments, disputes, service standards, shipping options, subscriptions, international pricing
- FedEx API client with address validation, rate shopping, availability checking, shipment creation
- Built-in logging and error handling
- TypeScript support with type definitions
- ESM and CommonJS builds
- Support for Node.js, Cloudflare Workers, Azure Functions, and more edge runtimes

### Features
- Runtime configuration via `setConfig()`
- Configurable logging with `setLogger()` and `setLogLevel()`
- Generated clients from official OpenAPI specifications
- Full type safety with TypeScript
- Cross-platform runtime support
