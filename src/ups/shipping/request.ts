/**
 * UPS Shipping Request Builder
 * * Provides transformation logic to convert standardized shipment data into the 
 * strictly nested UPS 'SHIPRequestWrapper' format.
 */

import { ShipmentRequest } from "@/types/index";
import { SHIPRequestWrapper } from "./generated/index";

/**
 * Transforms a generic shipment request into a UPS-compliant wrapper.
 * * Maps the library's agnostic 'ShipmentRequest' to the strictly nested 
 * UPS v2409 OpenAPI schema.
 * * @param {ShipmentRequest} agnosticReq - The global agnostic shipment payload.
 * @param {string} accountNumber - The 6-character UPS Account Number from UpsConfig.
 * @returns {SHIPRequestWrapper} The formatted UPS payload.
 */
export function buildUpsShipRequest(
  agnosticReq: ShipmentRequest, 
  accountNumber: string
): SHIPRequestWrapper {
  return {
    ShipmentRequest: {
      Request: {
        RequestOption: "nonvalidate",
        SubVersion: "1801",
        TransactionReference: {
          CustomerContext: "Shipstack-v1"
        }
      },
      Shipment: {
        Description: agnosticReq.package.description || "Shipment",
        
        Shipper: {
          Name: (agnosticReq.fromAddress.company || agnosticReq.fromAddress.name).substring(0, 35),
          AttentionName: agnosticReq.fromAddress.name.substring(0, 35),
          ShipperNumber: accountNumber,
          Phone: { 
            Number: "0000000000" 
          },
          Address: {
            AddressLine: agnosticReq.fromAddress.streetLines,
            City: agnosticReq.fromAddress.city,
            StateProvinceCode: agnosticReq.fromAddress.stateOrProvinceCode,
            PostalCode: agnosticReq.fromAddress.postalCode,
            CountryCode: agnosticReq.fromAddress.countryCode
          }
        },

        ShipTo: {
          Name: (agnosticReq.toAddress.company || agnosticReq.toAddress.name).substring(0, 35),
          AttentionName: agnosticReq.toAddress.name.substring(0, 35),
          Phone: { 
            Number: "0000000000" 
          },
          Address: {
            AddressLine: agnosticReq.toAddress.streetLines,
            City: agnosticReq.toAddress.city,
            StateProvinceCode: agnosticReq.toAddress.stateOrProvinceCode,
            PostalCode: agnosticReq.toAddress.postalCode,
            CountryCode: agnosticReq.toAddress.countryCode
          }
        },

        Service: {
          Code: agnosticReq.serviceCode,
          Description: "UPS Shipping Service"
        },

        Package: [
          {
            Packaging: {
              Code: "02",
              Description: "Customer Supplied Package"
            },
            Dimensions: {
              UnitOfMeasurement: { Code: "IN" },
              Length: agnosticReq.package.lengthInches.toString(),
              Width: agnosticReq.package.widthInches.toString(),
              Height: agnosticReq.package.heightInches.toString()
            },
            PackageWeight: {
              UnitOfMeasurement: { Code: "LBS" },
              Weight: (agnosticReq.package.weightOz / 16).toFixed(2)
            }
          }
        ],

        PaymentInformation: {
          ShipmentCharge: [
            {
              Type: "01",
              BillShipper: {
                AccountNumber: accountNumber
              }
            }
          ]
        }
      },
      LabelSpecification: {
        LabelImageFormat: {
          Code: "PNG",
          Description: "PNG Label"
        },
        LabelStockSize: {
          Height: "6",
          Width: "4"
        }
      }
    }
  };
}