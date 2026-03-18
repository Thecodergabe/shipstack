/**
 * UPS Rating Request Builder
 * * This module transforms agnostic Shipstack rating requests into the 
 * specific nested JSON structure required by the UPS Rating API.
 */

import { RATERequestWrapper } from "./generated/index";
import { RateRequest as InternalRateRequest } from "@/types/index";

/**
 * Transforms an agnostic Shipstack rate request into a UPS RATERequestWrapper.
 * * @param {InternalRateRequest} req - The standardized rating request.
 * @param {string} shipperNumber - The 6-digit UPS account number (required for negotiated rates).
 * @returns {RATERequestWrapper} The formatted UPS rating payload.
 * @category Builders
 * @public
 */
export function buildUpsRateRequest(
  req: InternalRateRequest,
  shipperNumber: string
): RATERequestWrapper {
  return {
    RateRequest: {
      Request: {
        SubVersion: "2409", 
        TransactionReference: {
          CustomerContext: "shipstack-rating"
        }
      },
      PickupType: {
        Code: "01", // Daily Pickup
        Description: "Daily Pickup"
      },
      CustomerClassification: {
        Code: "00", // Rates Associated with Shipper Number
        Description: "Shipper Number Rates"
      },
      Shipment: {
        Shipper: {
          Name: "Main Shipper",
          ShipperNumber: shipperNumber,
          Address: {
            AddressLine: [""], 
            PostalCode: req.originZip,
            CountryCode: "US"
          }
        },
        ShipTo: {
          Name: "Recipient",
          Address: {
            AddressLine: [""],
            PostalCode: req.destZip,
            CountryCode: "US"
          }
        },
        /**
         * UPS handles multiple packages; we map the single Shipstack package 
         * to a single-element array.
         */
        Package: [
          {
            PackagingType: {
              Code: "02", // Customer Supplied Package
              Description: "Package"
            },
            Dimensions: {
              UnitOfMeasurement: {
                Code: "IN",
                Description: "Inches"
              },
              Length: req.lengthInches.toString(),
              Width: req.widthInches.toString(),
              Height: req.heightInches.toString()
            },
            PackageWeight: {
              UnitOfMeasurement: {
                Code: "LBS",
                Description: "Pounds"
              },
              // Convert ounces to pounds as UPS Rating expects LBS for US origins.
              Weight: (req.weightOz / 16).toFixed(2)
            }
          }
        ],
        ShipmentRatingOptions: {
          /**
           * Presence of this indicator tells UPS to return both 
           * Published and Negotiated (account-based) rates.
           */
          NegotiatedRatesIndicator: "" 
        }
      }
    }
  };
}