import { RateRequest } from "@/types/index";

/**
 * Transforms a RateRequest into a FedEx Transit Time availability request.
 * * Used to determine estimated delivery dates before a label is purchased.
 * * @param req - Agnostic shipment details.
 * @returns {any} A formatted FedEx availability 'body' payload.
 */
export function buildFedexAvailabilityRequest(req: RateRequest): any {
  return {
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
      shipDatestamp: new Date().toISOString().split("T")[0],
      pickupType: "DROPOFF_AT_FEDEX_LOCATION",
      requestedPackageLineItems: [
        {
          weight: {
            units: "LB",
            value: Number((req.weightOz / 16).toFixed(2)),
          },
        },
      ],
    },
  };
}