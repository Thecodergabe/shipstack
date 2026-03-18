# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-03-18

### Added
- **Unified `ShippingClient` Orchestrator**: A high-level, stateful class to manage cross-carrier operations (Rates, Tracking, Address Validation) without passing config to every call.
- **Multi-Carrier Tracking Aggregator**: Standardized tracking interface for USPS, FedEx, and UPS with automatic handling of carrier-specific batch limits (USPS: 35, FedEx: 30).
- **Intelligent Rate Ranking**: Added `getRankedRates` to automatically identify `isCheapest` and `isFastest` (via `deliveryDays`) options across all configured carriers.
- **UPS Integration**: Full support for UPS OAuth2, Rating, and Tracking REST APIs.
- **Address Aggregator**: Standardized address validation logic that maps carrier-specific response codes to a unified `AddressValidationResult`.
- **Concurrency Control**: Implemented request throttling and concurrency limits (25 parallel reqs) for single-inquiry endpoints like UPS Tracking to prevent API lockout.
- **Production-Ready Documentation**: Comprehensive JSDoc strings added to all public-facing methods for improved IDE IntelliSense support.

### Changed
- **Library Mode Refactor**: Moved away from `process.env` reliance. All credentials must now be passed via `setShipstackConfig` or during `ShippingClient` instantiation to ensure framework agnosticism.
- **Path Aliasing**: Migrated all internal imports to `@/` aliases for cleaner module resolution and better build performance.
- **Standardized Types**: Refactored `NormalizedRate` and `NormalizedTracking` to ensure consistent property names (e.g., `deliveryDays` vs `estimatedDays`) across the entire SDK.
- **Build System**: Switched to `tsup` for more robust ESM/CJS dual-build support and automated `.d.ts` declaration generation.

### Fixed
- **Circular Dependency**: Resolved import loop in the tracking API layer.
- **Constructor Signature**: Fixed "Expected 0 arguments" error in `TrackingAggregator` by implementing a dedicated configuration constructor.
- **USPS Bulk Parsing**: Corrected USPS v3.2 bulk tracking response parsing to properly handle both single and multiple tracking detail objects.

---

## [1.0.0] - 2026-02-15

### Added
- **Initial release** of the Shipstack core.
- **USPS API V3 Client**: Implementation of OAuth2 authentication and primary endpoints (Rates, Address, Labels, Tracking).
- **USPS Extended Services**: Support for Carrier Pickup, Service Standards, and International Pricing.
- **FedEx API Client**: Support for Address Validation, Rate Shopping, and Shipment creation.
- **OpenAPI Integration**: Automated client generation from official carrier specifications.
- **Edge Compatibility**: Validated support for Cloudflare Workers, Azure Functions, and Node.js 16+.

### Features
- Runtime configuration via `setConfig()`.
- Built-in logging and granular error handling with `ShipstackError`.
- Comprehensive TypeScript definitions for all carrier-specific request/response objects.