import { getLogger } from "../logger";
import { ShipstackError } from "../errors";
import { createUspsClient } from "../usps/index";
import { createFedexRatesClient } from "../fedex/index";
import { RateRequest, NormalizedRate } from "../types/index";

export async function getRates(req: RateRequest): Promise<NormalizedRate[]> {
  const log = getLogger();
  log.debug("getRates called", req);

  try {
    switch (req.carrier) {
      case "usps": {
        const usps = createUspsClient();
        log.info("Fetching USPS rates...");

        const response = await usps.postRates({
          packages: [
            {
              origin: { postalCode: req.originZip },
              destination: { postalCode: req.destZip },
              weight: { unit: "ounce", value: req.weightOz },
              shape: "RECTANGULAR",
              dimensions: { length: 6, width: 4, height: 2, unit: "inch" },
              nonStandard: false
            }
          ]
        });

        log.debug("USPS rates response", response);

        return response.rates.map((rate: any): NormalizedRate => ({
          carrier: "usps",
          serviceCode: rate.serviceCode,
          serviceName: rate.serviceName,
          deliveryDays: rate.deliveryDays,
          cost: {
            amount: rate.totalPrice,
            currency: rate.currencyCode ?? "USD"
          },
          raw: rate
        }));
      }

      case "fedex": {
        const fedex = createFedexRatesClient();
        log.info("Fetching FedEx rates...");

        const token = "Bearer your-fedex-token"; // TODO: add token flow
        const response = await fedex.rateShipment(
          "application/json",
          token,
          "txn-456",
          "en_US",
          {
            // Replace with actual FedEx payload structure
          }
        );

        log.debug("FedEx rates response", response);

        return response.output.rateReplyDetails.map((rate: any): NormalizedRate => ({
          carrier: "fedex",
          serviceCode: rate.serviceType,
          serviceName: rate.serviceName,
          deliveryDays: rate.commit.daysInTransit,
          cost: {
            amount: rate.totalNetCharge.amount,
            currency: rate.totalNetCharge.currency
          },
          raw: rate
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