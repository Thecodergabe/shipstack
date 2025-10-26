/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyExchangeRate } from './CurrencyExchangeRate';
import type { RateDiscount } from './RateDiscount';
import type { Surcharge } from './Surcharge';
import type { Tax } from './Tax';
import type { Weight } from './Weight';
/**
 * This is a placeholder for single leg of a shipment rates details, as calculated per a specific rate type.
 */
export type ShipmentLegRateDetail = {
    /**
     * Indicates the rate zone used (based on origin and destination).<br>Example: rateZone
     */
    rateZone?: string;
    /**
     * Specifies the Pricing Code.<br>Example: pricingCode
     */
    pricingCode?: string;
    /**
     * Specifies the taxes.
     */
    taxes?: Array<Tax>;
    /**
     * Sum of dimensional weights for all packages.
     */
    totalDimWeight?: Weight;
    /**
     * Specifies the total rebate.<br>Example: 2.0
     */
    totalRebates?: number;
    /**
     * Specifies a fuel surcharge percentage.<br>Example: 6.0
     */
    fuelSurchargePercent?: number;
    /**
     * Specifies currency exchange rate.
     */
    currencyExchangeRate?: CurrencyExchangeRate;
    /**
     * The value used to calculate the weight based on the dimensions.<br>Example: 6
     */
    dimDivisor?: number;
    /**
     * Type used for this specific set of rate data.<br>Example: PAYOR_RETAIL_PACKAGE
     */
    rateType?: string;
    /**
     * Specifies the location id the destination of shipment leg.<br>Example: HKAA
     */
    legDestinationLocationId?: string;
    /**
     * Identifies the type of dim divisor that was applied.<br>Example: dimDivisorType
     */
    dimDivisorType?: string;
    /**
     * The total freight charge that was calculated before surcharges, discounts and taxes.<br>Example: 6.0
     */
    totalBaseCharge?: number;
    /**
     * Indicates which weight was used.<br>Example: ratedWeightMethod
     */
    ratedWeightMethod?: string;
    /**
     * The sum of all discounts.<br>Example: 9.0
     */
    totalFreightDiscounts?: number;
    /**
     * Total of the transportation-based taxes.<br>Example: 12.6
     */
    totalTaxes?: number;
    /**
     * Specifies minimum charge type.Example: minimumChargeType
     */
    minimumChargeType?: string;
    /**
     * Total of shipments duties and taxes; only provided if estimated duties and taxes were calculated for this shipment.<br>Example: 17.78
     */
    totalDutiesAndTaxes?: number;
    /**
     * The freight charge minus discounts.<br>Example: 6.0
     */
    totalNetFreight?: number;
    /**
     * This is the sum of shipment's total surcharges (not including total taxes).<br>Example: 3.2
     */
    totalNetFedExCharge?: number;
    /**
     * All surcharges that apply to this shipment.<br><a onclick='loadDocReference("surcharges")'>click here to see surcharges</a>
     */
    surcharges?: Array<Surcharge>;
    /**
     * The total of all surcharges.<br>Example: 5.0
     */
    totalSurcharges?: number;
    /**
     * The weight used to calculate these rates.
     */
    totalBillingWeight?: Weight;
    freightDiscounts?: Array<RateDiscount>;
    /**
     * Indicates the rate scale used.<br>Example: 6702
     */
    rateScale?: string;
    /**
     * The net charge after applying all discounts and surcharges.<br>Example: 253
     */
    totalNetCharge?: number;
    /**
     * Sum of total net charge, total duties and taxes; only provided if estimated duties and taxes were calculated for this shipment and duties, taxes and transportation charges are all paid by the same sender account.<br>Example: 25.67
     */
    totalNetChargeWithDutiesAndTaxes?: number;
    /**
     * This is the currency code for the amount.<br>Example: USD<br><a onclick='loadDocReference("currencycodes")'>click here to see Currency codes</a>
     */
    currency?: string;
};

