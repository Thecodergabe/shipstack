# Changelog

All notable changes to this project are documented in this file.  
This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and the format defined by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.2.0] – 2026‑04‑02

### Added
- **Staged Shipment System (`buildShipment`)**  
  Introduced a safe, platform‑agnostic shipment builder that generates carrier‑specific payloads without purchasing a label.  
  Ideal for storefronts, email workflows, and serverless environments.

- **Shipment Aggregator Split**  
  Shipment creation is now separated into:
  - `buildShipment` (safe mode)
  - `createShipment` (advanced backend mode)

- **Updated Documentation**  
  Added new sections covering staged shipments, safe vs advanced usage, and updated examples for all carriers.

- **Expanded Type Definitions**  
  Added `StagedShipment` type and improved request/response typing across USPS, FedEx, and UPS.

### Changed
- **README Overhaul**  
  Rewritten to reflect the new architecture, staged shipment workflow, and modern API surface.

- **API Consistency Improvements**  
  Ensured naming consistency across all public methods (`trackShipment`, `getBestValueRate`, `getFastestService`).

- **Aggregator Refactor**  
  Shipment aggregator now cleanly separates request building from label creation.

### Fixed
- **UPS Request Builder Alignment**  
  Corrected UPS v2409 request shaping to ensure consistent `ShipperNumber` handling.

- **FedEx Ship Normalization**  
  Fixed service code mapping in the FedEx shipment converter.

---

## [1.1.0] – 2026‑03‑18

### Added
- **Unified `ShippingClient`**  
  A high‑level, stateful class for orchestrating cross‑carrier operations without passing configuration to every call.

- **Multi‑Carrier Tracking Aggregator**  
  Standardized tracking interface for USPS, FedEx, and UPS with automatic batch handling:
  - USPS: 35‑item limit  
  - FedEx: 30‑item limit  
  - UPS: concurrency‑limited single‑inquiry  

- **Rate Ranking Utilities**  
  Added `getBestValueRate` and `getFastestService`.

- **UPS Integration**  
  Full support for UPS OAuth2, Rating, and Tracking APIs.

- **Address Aggregator**  
  Unified address validation with standardized normalization.

- **Concurrency Controls**  
  Added request throttling for UPS tracking to prevent API lockouts.

### Changed
- **Library Mode Refactor**  
  Removed reliance on environment variables; all credentials must be passed via configuration.

- **Path Aliasing**  
  Migrated all internal imports to `@/` aliases.

- **Standardized Types**  
  Unified naming across normalized models (`deliveryDays`, `cost.amount`, etc.).

- **Build System**  
  Migrated to `tsup` for ESM/CJS dual builds and automatic `.d.ts` generation.

### Fixed
- Circular dependency in tracking API layer  
- USPS bulk tracking parsing for single‑item responses  
- FedEx client initialization timing issues  

---

## [1.0.0] – 2026‑02‑15

### Added
- Initial release of Shipstack core.
- USPS API v3 client with OAuth2 authentication.
- FedEx API client for address validation, rating, and shipment creation.
- UPS API client for rating and tracking.
- OpenAPI‑driven client generation.
- Edge runtime compatibility.
- Unified error handling via `ShipstackError`.
- Comprehensive TypeScript definitions for all carrier request/response models.

---
