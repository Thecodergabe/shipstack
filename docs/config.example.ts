/**
 * Shipstack Example Configuration
 *
 * This file demonstrates the full configuration structure required
 * for USPS, FedEx, and UPS. All values shown here are placeholders.
 */

export const config = {
  usps: {
    apiKey: "YOUR_USPS_KEY",
    apiSecret: "YOUR_USPS_SECRET",
    baseUrl: "https://api.usps.com" // or USPS sandbox URL
  },

  fedex: {
    apiKey: "YOUR_FEDEX_KEY",
    secretKey: "YOUR_FEDEX_SECRET",
    accountNumber: "YOUR_FEDEX_ACCOUNT_NUMBER"
  },

  ups: {
    apiKey: "YOUR_UPS_KEY",
    apiSecret: "YOUR_UPS_SECRET",
    accountNumber: "YOUR_UPS_ACCOUNT_NUMBER"
  }
};