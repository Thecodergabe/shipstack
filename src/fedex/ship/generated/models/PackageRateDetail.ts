/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Surcharge } from './Surcharge';
import type { Weight } from './Weight';
/**
 * These are package rate details, as calculated per a specific rate type.
 */
export type PackageRateDetail = {
    /**
     * Indicates the weight types used in calculating this rate, such as actual weight or dimensional weight.<br> Example: DIM
     */
    ratedWeightMethod?: string;
    /**
     * The sum of all freight discounts for this package.<br>Example: 44.55
     */
    totalFreightDiscounts?: number;
    /**
     * The sum of all taxes on this package.<br>Example: 3.45
     */
    totalTaxes?: number;
    /**
     * Indicates the minumum charge type. INTERNAL FEDEX USE ONLY.Example: minimumChargeType
     */
    minimumChargeType?: string;
    /**
     * The package transportation charge(prior to any discounts applied).<br>Example: 45.67
     */
    baseCharge?: number;
    /**
     * Specifies total rebates on this package.<br>Example: 4.56
     */
    totalRebates?: number;
    /**
     * This is the rate type used.<br>Example: PAYOR_RETAIL_PACKAGE
     */
    rateType?: string;
    billingWeight?: Weight;
    /**
     * This is the net freight charges. i.e. base charge minus total freight discounts for a package.<br>Example: 4.89
     */
    netFreight?: number;
    /**
     * These are all surcharges on this package.<br><a onclick='loadDocReference("surcharges")'>click here to see Surcharges</a>
     */
    surcharges?: Array<Surcharge>;
    /**
     * The sum of all surcharges on this package.<br>Example: 22.56
     */
    totalSurcharges?: number;
    /**
     * This is sum of net freight and total surcharges (not including totalTaxes) for this package.<br>Example: 12.56
     */
    netFedExCharge?: number;
    /**
     * This is the sum of net freight, total surcharges and total taxes for a package.<br>Example: 121.56
     */
    netCharge?: number;
    /**
     * This is the currency code. <br>Example: USD<br><a onclick='loadDocReference("currencycodes")'>click here to see Currency codes</a>
     */
    currency?: string;
};

