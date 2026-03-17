import { RATERequestWrapper } from "./generated/models/RATERequestWrapper";
import { RateRequest as InternalRateRequest } from "../../types/index";

export function buildUpsRateRequest(req: InternalRateRequest): RATERequestWrapper {
  return {
    RateRequest: {
      Request: {
        SubVersion: "2409", // Using the latest subversion from your types
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
          ShipperNumber: process.env.UPS_SHIPPER_NUMBER || "", // UPS usually requires this for account rates
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
        // Package is an array in UPS
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
              // Convert Ounces to Pounds for UPS
              Weight: (req.weightOz / 16).toFixed(2)
            }
          }
        ],
        ShipmentRatingOptions: {
          NegotiatedRatesIndicator: "" // Empty string tag enables account-based rates
        }
      }
    }
  };
}