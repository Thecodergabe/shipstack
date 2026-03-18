import { ShipmentRequest } from "@/types/index";

export function buildFedexShipRequest(request: ShipmentRequest): any {
  // FedEx v1 Ship requires weight in LBS. Converting from your weightOz.
  const weightInLbs = Number((request.package.weightOz / 16).toFixed(2));

  return {
    labelResponseOptions: "LABEL",
    requestedShipment: {
      shipper: {
        address: {
          streetLines: request.fromAddress.streetLines,
          city: request.fromAddress.city,
          stateOrProvinceCode: request.fromAddress.stateOrProvinceCode,
          postalCode: request.fromAddress.postalCode,
          countryCode: request.fromAddress.countryCode,
        },
        contact: {
          personName: request.fromAddress.name,
          companyName: request.fromAddress.company || "",
          phoneNumber: "0000000000", // FedEx requires a phone number
        },
      },
      recipients: [
        {
          address: {
            streetLines: request.toAddress.streetLines,
            city: request.toAddress.city,
            stateOrProvinceCode: request.toAddress.stateOrProvinceCode,
            postalCode: request.toAddress.postalCode,
            countryCode: request.toAddress.countryCode,
          },
          contact: {
            personName: request.toAddress.name,
            companyName: request.toAddress.company || "",
            phoneNumber: "0000000000",
          },
        },
      ],
      serviceType: request.serviceCode,
      packagingType: "YOUR_PACKAGING",
      pickupType: "DROPOFF_AT_FEDEX_LOCATION",
      shippingChargesPayment: {
        paymentType: "SENDER",
      },
      labelSpecification: {
        imageType: "PDF",
        labelStockType: "PAPER_8.5X11_TOP_HALF_LABEL",
      },
      requestedPackageLineItems: [
        {
          weight: {
            units: "LB",
            value: weightInLbs,
          },
          dimensions: {
            length: request.package.lengthInches,
            width: request.package.widthInches,
            height: request.package.heightInches,
            units: "IN",
          },
        },
      ],
    },
    accountNumber: {
      value: "", // Populated by FedexShipClient
    },
  };
}