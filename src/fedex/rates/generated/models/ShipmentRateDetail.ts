/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyExchangeRate } from './CurrencyExchangeRate';
import type { RateDiscount } from './RateDiscount';
import type { Surcharge } from './Surcharge';
import type { Tax } from './Tax';
import type { Weight_1 } from './Weight_1';
/**
 * This is shipment level rate data.
 */
export type ShipmentRateDetail = {
    currencyExchangeRate?: CurrencyExchangeRate;
    /**
     * Indicates the currency associated with the amount.
     */
    currency?: string;
    /**
     * Indicates the rate zone used.
     */
    rateZone?: string;
    /**
     * Allows clients to determine whether to add charges at the package level when Per Piece Rating details are returned.<br><ul><li>SHIPMENT_WEIGHT_BASED - Indicates shipment weight is used to calculate the rate.</li><br><li>FLAT_RATE_PER_PAK - Indicates shipment is rated based on number of packs, weight would be considered for overweight surcharge but not for calculating shipment rate.</li><br><li>PACK_WEIGHT_BASED - Indicates individual package weight would be rated and aggregated to get shipment rate weight.</li></ul> Example : SHIPMENT_WEIGHT_BASED.
     */
    ratingBasis?: ShipmentRateDetail.ratingBasis;
    /**
     * Indicates the type of pricing code.
     */
    pricingCode?: string;
    /**
     * Indicates the total discounts used in the rate calculation. Example: 856.32
     */
    totalFreightDiscount?: number;
    /**
     * Indicates which special rating cases applied to this shipment.
     */
    specialRatingApplied?: Array<string>;
    /**
     * This is sum of all surcharges on the package. Example: 586.25
     */
    totalSurcharges?: number;
    /**
     * This is total discount used in the rate calculation.<br><a onclick='loadDocReference("discounts")'>Click here to see Discounts</a>
     */
    freightDiscount?: Array<RateDiscount>;
    /**
     * This is fuel surcharge percentage.
     */
    fuelSurchargePercent?: number;
    /**
     * This is total of billing weight for the shipment.
     */
    totalBillingWeight?: Weight_1;
    /**
     * This is total of dimensional weight for the shipment.
     */
    totalDimWeight?: Weight_1;
    /**
     * Identifies the type of divisor that was applied.<br> Example: 10
     */
    dimDivisor?: number;
    /**
     * Indicates the surcharges applied to this shipment.
     */
    surCharges?: Array<Surcharge>;
    /**
     * List of taxes.
     */
    taxes?: Array<Tax>;
};
export namespace ShipmentRateDetail {
    /**
     * Allows clients to determine whether to add charges at the package level when Per Piece Rating details are returned.<br><ul><li>SHIPMENT_WEIGHT_BASED - Indicates shipment weight is used to calculate the rate.</li><br><li>FLAT_RATE_PER_PAK - Indicates shipment is rated based on number of packs, weight would be considered for overweight surcharge but not for calculating shipment rate.</li><br><li>PACK_WEIGHT_BASED - Indicates individual package weight would be rated and aggregated to get shipment rate weight.</li></ul> Example : SHIPMENT_WEIGHT_BASED.
     */
    export enum ratingBasis {
        SHIPMENT_WEIGHT_BASED = 'SHIPMENT_WEIGHT_BASED',
        FLAT_RATE_PER_PACK = 'FLAT_RATE_PER_PACK',
        PACK_WEIGHT_BASED = 'PACK_WEIGHT_BASED',
    }
}

