import { getLogger } from "../logger";
import { ShipstackError } from "../errors";
import { createUspsRatesClient } from "../usps/rates/client";
import { createFedexRatesClient } from "../fedex/rates/client";
import { RateRequest, NormalizedRate } from "../types/index";
import { getConfig } from "../config";

export async function getRates(req: RateRequest): Promise<NormalizedRate[]> {
  const log = getLogger();
  log.debug("getRates called", req);

  try {
    switch (req.carrier) {
      case "usps": {
        const usps = createUspsRatesClient();
        log.info("Fetching USPS rates...");

        const response = await usps.postRateList({
          originZIPCode: req.originZip,
          destinationZIPCode: req.destZip,
          weight: req.weightOz / 16, // USPS expects pounds
          length: req.lengthInches,
          width: req.widthInches,
          height: req.heightInches,
          hasNonstandardCharacteristics: req.nonStandard ?? false,
          // Optional fields below — include only if you support them
          // mailClass: req.mailClass,
          // mailingDate: req.mailingDate,
          // accountType: "METER",
          // accountNumber: req.accountNumber,
        });

        const options = response.rateOptions ?? [];

        return options.flatMap((option: any): NormalizedRate[] => {
          const rates = option.rates ?? [];

          return rates.map((rate: any): NormalizedRate => ({
            carrier: "usps",
            serviceCode: rate.serviceCode,
            serviceName: rate.serviceName,
            deliveryDays: rate.deliveryDays,
            cost: {
              amount: option.totalBasePrice ?? rate.totalPrice,
              currency: rate.currencyCode ?? "USD",
            },
            raw: rate,
          }));
        });
      }

      case "fedex": {
        const fedex = createFedexRatesClient();
        const { FEDEX_API_KEY } = getConfig();
        log.info("Fetching FedEx rates...");

        const response = await fedex.rateAndTransitTimes(
          "application/json",
          `Bearer ${FEDEX_API_KEY}`,
          req.transactionId ?? "txn-001",
          req.locale ?? "en_US",
          {
            requestedShipment: {
              shipper: {
                address: {
                  postalCode: req.originZip,
                },
              },
              recipient: {
                address: {
                  postalCode: req.destZip,
                },
              },
              packagingType: req.packagingType ?? "YOUR_PACKAGING",
              pickupType: req.pickupType ?? "DROPOFF_AT_FEDEX_LOCATION",
              dropoffType: req.dropoffType ?? "REGULAR_PICKUP",
              rateRequestType: req.rateRequestType ?? ["LIST"],
              requestedPackageLineItems: [
                {
                  weight: {
                    units: "OZ",
                    value: req.weightOz,
                  },
                  dimensions: {
                    length: req.lengthInches,
                    width: req.widthInches,
                    height: req.heightInches,
                    units: "IN",
                  },
                },
              ],
            },
          }
        );

        const details = response.output?.rateReplyDetails ?? [];

        return details.map((rate: any): NormalizedRate => ({
          carrier: "fedex",
          serviceCode: rate.serviceType,
          serviceName: rate.serviceName,
          deliveryDays: rate.commit?.daysInTransit,
          cost: {
            amount: rate.totalNetCharge.amount,
            currency: rate.totalNetCharge.currency,
          },
          raw: rate,
        }));
      }

      default:
        throw new ShipstackError(`Unsupported carrier: ${req.carrier}`, req.carrier);
    }
  } catch (err) {
    log.error("getRates failed", err);
    throw new ShipstackError("Rate fetch failed", req.carrier, err);
  }
}