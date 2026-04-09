import type { ShippingConfig } from "@teralabs/shipstack";

/**
 * Shipstack Example Configuration
 *
 * This file demonstrates the configuration structure required
 * for USPS, FedEx, and UPS. All values shown here are placeholders.
 */

export const config: ShippingConfig = {
  environment: "sandbox",
  usps: {
    enabled: true,
    clientId: "YOUR_USPS_CLIENT_ID",
    clientSecret: "YOUR_USPS_CLIENT_SECRET",
    baseUrl: "https://sandbox.api.usps.com"
  },

  fedex: {
    enabled: true,
    clientId: "YOUR_FEDEX_CLIENT_ID",
    clientSecret: "YOUR_FEDEX_CLIENT_SECRET",
    accountNumber: "YOUR_FEDEX_ACCOUNT_NUMBER"
  },

  ups: {
    enabled: true,
    clientId: "YOUR_UPS_CLIENT_ID",
    clientSecret: "YOUR_UPS_CLIENT_SECRET",
    accountNumber: "YOUR_UPS_ACCOUNT_NUMBER"
  }
};