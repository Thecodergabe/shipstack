import {
  setConfig,
  createFedexShipClient,
} from "../src";
import { Full_Schema_Ship } from "../src/fedex/ship/generated";
import { RequestedShipment_1 } from "../src/fedex/ship/generated";
import { ShipperAccountNumber } from "../src/fedex/ship/generated";
import { LABELRESPONSEOPTIONS } from "../src/fedex/ship/generated";
import { Dimensions } from "../src/fedex/ship/generated";
import { Weight } from "../src/fedex/ship/generated";
import { Payment } from "../src/fedex/rates/generated";
import { LabelSpecification } from "../src/fedex/ship/generated/models/LabelSpecification";

describe("FedEx Ship Client", () => {
  beforeAll(() => {
    setConfig({
      FEDEX_API_KEY: process.env.FEDEX_API_KEY,
      FEDEX_BASE_URL: process.env.FEDEX_BASE_URL,
    });
  });

  it("should create a shipment", async () => {
    const fedex = createFedexShipClient();
    const token = `Bearer ${process.env.FEDEX_API_KEY}`;

    const shipmentPayload: Full_Schema_Ship = {
      accountNumber: {
        value: "123456789", // Replace with your actual FedEx account number
      },
      labelResponseOptions: LABELRESPONSEOPTIONS.LABEL,
      requestedShipment: {
        shipDatestamp: new Date().toISOString().split("T")[0],
        shipper: {
          address: {
            streetLines: ["123 Main St"],
            city: "Bethany",
            stateOrProvinceCode: "OR",
            postalCode: "97006",
            countryCode: "US",
            residential: false,
          },
          contact: {
            personName: "Gabriel Smith",
            phoneNumber: "5031234567",
            emailAddress: "gabriel@example.com",
            companyName: "My Company",
          },
        },
        recipients: [
          {
            address: {
              streetLines: ["456 Broadway"],
              city: "New York",
              stateOrProvinceCode: "NY",
              postalCode: "10001",
              countryCode: "US",
              residential: true,
            },
            contact: {
              personName: "Jane Doe",
              phoneNumber: "2129876543",
              emailAddress: "jane@example.com",
              companyName: "Recipient Co",
            },
          },
        ],
        pickupType: RequestedShipment_1.pickupType.DROPOFF_AT_FEDEX_LOCATION,
        serviceType: "FEDEX_GROUND",
        packagingType: "YOUR_PACKAGING",
        totalWeight: 1.0,
        shippingChargesPayment: {
          paymentType: Payment.paymentType.SENDER,
        },
        labelSpecification: {
          labelFormatType: LabelSpecification.labelFormatType.COMMON2D,
          imageType: LabelSpecification.imageType.PDF,
          labelStockType: LabelSpecification.labelStockType.PAPER_4X6,
          resolution: 203,
        },
        rateRequestType: ["LIST"],
        preferredCurrency: "USD",
        totalPackageCount: 1,
        requestedPackageLineItems: [
          {
            weight: {
              units: Weight.units.LB,
              value: 1.0,
            },
            dimensions: {
              length: 10,
              width: 6,
              height: 4,
              units: Dimensions.units.IN,
            },
          },
        ],
      },
    };

    const response = await fedex.createShipment(
      "application/json",
      token,
      "txn-ship-001",
      "en_US",
      shipmentPayload
    );

    const detail = (response.output as any).completedShipmentDetail;
    expect(detail).toBeDefined();
    expect(detail.masterTrackingNumber).toBeDefined();
  });
});