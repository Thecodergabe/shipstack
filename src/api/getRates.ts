import { RateRequest } from "../types/index";

/**
 * Transforms a generic Shipstack RateRequest into a FedEx v1 Rating payload.
 * * * Data Mapping:
 * 1. Account Number: Injected from config to enable negotiated/discounted rates.
 * 2. Weight Conversion: Converts Ounces (Shipstack) to Pounds (FedEx) with 2-decimal precision.
 * 3. Dimensions: Uses Math.ceil to comply with carrier billing rules for rounded inches.
 * 4. Rate Types: Requests both 'ACCOUNT' (negotiated) and 'LIST' (retail) prices.
 * * @param {RateRequest} req - The internal agnostic rate request.
 * @param {string} accountNumber - The FedEx account number from the user's config.
 * @returns {any} A formatted FedEx 'RateAndTransitTimesRequest' payload.
 * @category Builders
 */
export function buildFedexRateRequest(req: RateRequest, accountNumber: string): any {
  return {
    /** * The account number is required at the root of the body for 
     * FedEx v1 Rates to authorize negotiated pricing.
     */
    accountNumber: {
      value: accountNumber,
    },
    requestedShipment: {
      shipper: {
        address: {
          postalCode: req.originZip,
          countryCode: "US", // Defaulting to US for domestic rating
        },
      },
      recipient: {
        address: {
          postalCode: req.destZip,
          countryCode: "US",
        },
      },
      pickupType: "DROPOFF_AT_FEDEX_LOCATION",
      /** Requesting both list and account-specific rates for comparison */
      rateRequestType: ["ACCOUNT", "LIST"],
      requestedPackageLineItems: [
        {
          weight: {
            units: "LB",
            value: Number((req.weightOz / 16).toFixed(2)),
          },
          dimensions: {
            length: Math.ceil(req.lengthInches),
            width: Math.ceil(req.widthInches),
            height: Math.ceil(req.heightInches),
            units: "IN",
          },
        },
      ],
    },
  };
}