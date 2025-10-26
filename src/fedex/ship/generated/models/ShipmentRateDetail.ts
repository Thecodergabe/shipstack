/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyExchangeRate } from './CurrencyExchangeRate';
import type { RateDiscount } from './RateDiscount';
import type { ShipmentLegRateDetail } from './ShipmentLegRateDetail';
import type { Surcharge } from './Surcharge';
import type { Tax } from './Tax';
import type { Weight } from './Weight';
/**
 * This is a placeholder for shipment total/summary rates details, as calculated per a specific rate type. The totals may differ from the sum of corresponding package data for Multiweight or Express MPS.
 */
export type ShipmentRateDetail = {
    /**
     * Indicates the rate zone used (based on origin and destination).<br>Example: US001O
     */
    rateZone?: string;
    /**
     * Indicates which weight was used.<br>Example: ACTUAL
     */
    ratedWeightMethod?: string;
    /**
     * The total of the total duties & taxes and the total ancillary fees & taxes.<br>Example: 24.56
     */
    totalDutiesTaxesAndFees?: number;
    /**
     * Specifies pricing Code.<br>Example: PACKAGE
     */
    pricingCode?: string;
    /**
     * The total discounts used in the rate calculation.<br>Example: 1.56
     */
    totalFreightDiscounts?: number;
    /**
     * Total of the transportation-based taxes.<br>Example: 3.45
     */
    totalTaxes?: number;
    /**
     * Total of all values under this shipment's duties and taxes; only provided if estimated duties and taxes were calculated for this shipment.<br>Example: 6.78
     */
    totalDutiesAndTaxes?: number;
    /**
     * Identifies the total amount of the shipment-level fees and taxes that are not based on transportation charges or commodity-level estimated duties and taxes.<br>Example: 5.67
     */
    totalAncillaryFeesAndTaxes?: number;
    /**
     * All transportation-based taxes applicable to this shipment.
     */
    taxes?: Array<Tax>;
    /**
     * The total sum of all rebates applied to this shipment.<br>Example: 1.98
     */
    totalRebates?: number;
    /**
     * Specifies a fuel surcharge percentage.<br>Example: 4.56
     */
    fuelSurchargePercent?: number;
    currencyExchangeRate?: CurrencyExchangeRate;
    /**
     * The freight charge minus discounts.<br>Example: 9.56
     */
    totalNetFreight?: number;
    /**
     * This is the sum of shipment's total net freight, total surchages (not including totalTaxes).<br>Example: 88.56
     */
    totalNetFedExCharge?: number;
    /**
     * This is data for a single leg of a shipment's total/summary rates, as calculated per a specific rate type.
     */
    shipmentLegRateDetails?: Array<ShipmentLegRateDetail>;
    /**
     * The value used to calculate the weight based on the dimensions.<br>Example: 0
     */
    dimDivisor?: number;
    /**
     * The Type used for this specific set of rate data.<br>Example: RATED_ACCOUNT_SHIPMENT
     */
    rateType?: string;
    /**
     * All surcharges that apply to this shipment.<br><a onclick='loadDocReference("surcharges")'>click here to see Surcharges</a>
     */
    surcharges?: Array<Surcharge>;
    /**
     * The total amount of all surcharges applied to this shipment.<br>Example: 9.88
     */
    totalSurcharges?: number;
    /**
     * The weight used to calculate these rates.
     */
    totalBillingWeight?: Weight;
    /**
     * Indicates the freight discounts.
     */
    freightDiscounts?: Array<RateDiscount>;
    /**
     * Indicates the rate scale used.<br>Example: 00000
     */
    rateScale?: string;
    /**
     * The net charge after applying all discounts and surcharges.<br>Example: 3.78
     */
    totalNetCharge?: number;
    /**
     * The total Shipment charge that was calculated before surcharges, discounts and taxes.<br>Example: 234.56
     */
    totalBaseCharge?: number;
    /**
     * This is the sum of shipment's total net charges and total duties and taxes; only provided if estimated duties and taxes were calculated for this shipment AND duties, taxes and transportation charges are all paid by the same sender account.<br>Example: 222.56
     */
    totalNetChargeWithDutiesAndTaxes?: number;
    /**
     * Indicates the currency code.<br><a onclick='loadDocReference("currencycodes")'>click here to see Currency Codes</a>
     */
    currency?: string;
};

