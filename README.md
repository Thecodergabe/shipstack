# Shipstack: USPS Module

Shipstack is a modular shipping API wrapper designed for flexibility and portability across environments like Node.js, Cloudflare Workers, Azure Functions, and more.

This module provides a typed USPS client generated from the official OpenAPI spec, with built-in support for logging, error handling, and runtime configuration.

---

## Getting Started

### 1. Install
npm install shipstack

### 2. Configure
example configuration  usps

import { setConfig, setLogger, setLogLevel } from "shipstack";

setConfig({
  USPS_API_KEY: "your-usps-api-key",
  USPS_BASE_URL: "https://sandbox.api.usps.com" // optional
});

setLogger(console); // optional
setLogLevel("info"); // optional

### 3. Consuming
example usps client usage

import { createUspsClient } from "shipstack";

const usps = createUspsClient();
const token = await usps.oauth2Token({ grant_type: "client_credentials" });

example FedEx

import {
  createFedexAddressClient,
  createFedexAvailabilityClient,
  createFedexRateClient,
  createFedexShipClient
} from "shipstack";

const fedexAddress = createFedexAddressClient();
const fedexRates = createFedexRateClient();

### 4. Docs
USPS:
https://developers.usps.com/getting-started
OpenAPI:
https://learn.openapis.org/

### 5. Contributing
See CONTRIBUTING.md for instructions on regenerating the USPS client and extending the library.
