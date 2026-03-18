import { RateRequest } from "@/types/index";

/**
 * Transforms an agnostic Shipstack RateRequest into a FedEx-specific rating payload.
 * 
 * FedEx requires the account number within the request body to unlock negotiated rates.
 * Dimensions are rounded up (Math.ceil) to comply with carrier billing rules.
 * 
 * @param req - The internal Shipstack RateRequest.
 * @param accountNumber - The FedEx account number for the rating context.
 * @returns {any} A formatted payload matching the FedEx 'body' model.
 */
export function buildFedexRateRequest(req: RateRequest, accountNumber: string): any {
  return {
    accountNumber: {
      value: accountNumber,
    },
    requestedShipment: {
      shipper: {
        address: {
          postalCode: req.originZip,
          countryCode: "US",
        },
      },
      recipient: {
        address: {
          postalCode: req.destZip,
          countryCode: "US",
        },
      },
      pickupType: "DROPOFF_AT_FEDEX_LOCATION",
      rateRequestType: ["ACCOUNT", "LIST"],
      requestedPackageLineItems: [
        {
          weight: {
            units: "LB",
            /** Convert ounces to pounds (FedEx standard) */
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