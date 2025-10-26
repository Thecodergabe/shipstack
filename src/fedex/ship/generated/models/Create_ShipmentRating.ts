/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AncillaryFeeAndTax } from './AncillaryFeeAndTax';
import type { CurrencyExchangeRate } from './CurrencyExchangeRate';
import type { EdtCommodityTax } from './EdtCommodityTax';
import type { Money_1 } from './Money_1';
import type { RateDiscount_2 } from './RateDiscount_2';
import type { Rebate } from './Rebate';
import type { ShipmentRateDetail } from './ShipmentRateDetail';
import type { Surcharge_2 } from './Surcharge_2';
import type { Tax_2 } from './Tax_2';
import type { VariableHandlingCharges_1 } from './VariableHandlingCharges_1';
/**
 * All shipment-level rating data for this shipment, which may include data for multiple rate types.
 */
export type Create_ShipmentRating = {
    /**
     * This rate type identifies which entry in the following array is considered as presenting the "actual" rates for the shipment.<br>Example: PAYOR_LIST_SHIPMENT
     */
    actualRateType?: string;
    /**
     * Each element of this field provides shipment-level rate totals for a specific rate type.
     */
    shipmentRateDetails?: Array<ShipmentRateDetail>;
    /**
     * Sum of totalNetCharge from pickupRateDetail and shipmentRateDetail. This charge will be populated regardless of pickup.
     */
    totalNetTransportationAndPickupCharge?: Money_1;
    /**
     * Sum of totalNetFedExCharge from pickupRateDetail and shipmentRateDetail. This charge will be populated regardless of a pickup.
     */
    totalNetFedExTransportationAndPickupCharge?: Money_1;
    /**
     * Charges associated with a scheduled shipment pickup
     */
    pickupRateDetail?: {
        /**
         * Type used for this specific set of rate data.
         */
        rateType?: Create_ShipmentRating.rateType;
        /**
         * Indicates the rate scale used.
         */
        rateScale?: string;
        /**
         * Indicates the rate zone used (based on origin and destination).
         */
        rateZone?: string;
        /**
         * Allows clients to determine whether to add charges at the package level when Per Piece Rating details are returned.<br><ul><li>SHIPMENT_WEIGHT_BASED - Indicates shipment weight is used to calculate the rate.</li><br><li>FLAT_RATE_PER_PAK - Indicates shipment is rated based on number of packs, weight would be considered for overweight surcharge but not for calculating shipment rate.</li><br><li>PACK_WEIGHT_BASED - Indicates individual package weight would be rated and aggregated to get shipment rate weight.</li></ul>
         */
        ratingBasis?: Create_ShipmentRating.ratingBasis;
        /**
         * Identifies the type of pricing used for this shipment.
         */
        pricingCode?: Create_ShipmentRating.pricingCode;
        /**
         * provides the minimum charge type applicable to the rates.
         */
        minimumChargeType?: Create_ShipmentRating.minimumChargeType;
        currencyExchangeRate?: CurrencyExchangeRate;
        /**
         * Indicates which special rating cases applied to this shipment.
         */
        specialRatingApplied?: Array<'FEDEX_ONE_RATE' | 'FIXED_FUEL_SURCHARGE' | 'IMPORT_PRICING'>;
        /**
         * Specify a fuel surcharge percentage.
         */
        fuelSurchargePercent?: number;
        /**
         * Will indicate the pickup charge description of the on call pickup
         */
        pickupBaseChargeDescription?: Create_ShipmentRating.pickupBaseChargeDescription;
        /**
         * Total base charges for the shipment.
         */
        totalBaseCharge?: Money_1;
        /**
         * The total discounts used in the rate calculation.<br> Example: 1257.26
         */
        totalFreightDiscounts?: Money_1;
        /**
         * This shipment's totalNetFreight.
         */
        totalNetFreight?: Money_1;
        /**
         * The sum of all surcharges on the package.
         */
        totalSurcharges?: Money_1;
        /**
         * This shipment's totalNetFedExCharge, which is totalNetFreight plus totalSurcharges (not including totalTaxes).
         */
        totalNetFedExCharge?: Money_1;
        /**
         * The sum of all taxes on this package.<br> Example: 1257.25
         */
        totalTaxes?: Money_1;
        /**
         * Total net charges for the shipment.
         */
        totalNetCharge?: Money_1;
        /**
         * The total sum of all rebates applied to this package.
         */
        totalRebates?: Money_1;
        /**
         * The sum of shipment/package Duties and taxes.
         */
        totalDutiesAndTaxes?: Money_1;
        /**
         * Identifies the shipment-level fees and taxes that are not based on transportation charges or commodity-level estimated duties and taxes.
         */
        totalAncillaryFeesAndTaxes?: Money_1;
        /**
         * The total amount of the duties and taxes plus the total ancillary fees and taxes.
         */
        totalDutiesTaxesAndFees?: Money_1;
        /**
         * Total netChargesWithDutiesAndTaxes for the shipment.
         */
        totalNetChargeWithDutiesAndTaxes?: Money_1;
        /**
         * All rate discounts that apply to this shipment
         */
        freightDiscounts?: Array<RateDiscount_2>;
        /**
         * The all rebates applied to this package.
         */
        rebates?: Array<Rebate>;
        /**
         * The amount of surcharges applied to this shipment.
         */
        surcharges?: Array<Surcharge_2>;
        /**
         * List of taxes.
         */
        taxes?: Array<Tax_2>;
        /**
         * List of The shipment/package Duties and taxes.
         */
        dutiesAndTaxes?: Array<EdtCommodityTax>;
        /**
         * Identifies the total amount of the shipment-lvel fees and taxes that are not based on transportation charges of commodity-level estimated duties and taxes.
         */
        ancillaryFeesAndTaxes?: Array<AncillaryFeeAndTax>;
        /**
         * Optional. The variable handling charge amount calculated based on the requested variable handling charge detail.
         */
        variableHandlingCharges?: VariableHandlingCharges_1;
        /**
         * Optional. The variable handling charge amount calculated based on the requested variable handling charge detail.
         */
        totalVariableHandlingCharges?: VariableHandlingCharges_1;
    };
};
export namespace Create_ShipmentRating {
    /**
     * Type used for this specific set of rate data.
     */
    export enum rateType {
        INCENTIVE = 'INCENTIVE',
        NEGOTIATED = 'NEGOTIATED',
        PAYOR_ACCOUNT_PACKAGE = 'PAYOR_ACCOUNT_PACKAGE',
        PAYOR_ACCOUNT_SHIPMENT = 'PAYOR_ACCOUNT_SHIPMENT',
        PAYOR_CUSTOM_PACKAGE = 'PAYOR_CUSTOM_PACKAGE',
        PAYOR_CUSTOM_SHIPMENT = 'PAYOR_CUSTOM_SHIPMENT',
        PAYOR_LIST_PACKAGE = 'PAYOR_LIST_PACKAGE',
        PAYOR_LIST_SHIPMENT = 'PAYOR_LIST_SHIPMENT',
        PAYOR_RETAIL_PACKAGE = 'PAYOR_RETAIL_PACKAGE',
        PAYOR_RETAIL_SHIPMENT = 'PAYOR_RETAIL_SHIPMENT',
        PREFERRED_ACCOUNT_PACKAGE = 'PREFERRED_ACCOUNT_PACKAGE',
        PREFERRED_ACCOUNT_SHIPMENT = 'PREFERRED_ACCOUNT_SHIPMENT',
        PREFERRED_CUSTOM_PACKAGE = 'PREFERRED_CUSTOM_PACKAGE',
        PREFERRED_CUSTOM_SHIPMENT = 'PREFERRED_CUSTOM_SHIPMENT',
        PREFERRED_INCENTIVE = 'PREFERRED_INCENTIVE',
        PREFERRED_LIST_PACKAGE = 'PREFERRED_LIST_PACKAGE',
        PREFERRED_LIST_SHIPMENT = 'PREFERRED_LIST_SHIPMENT',
        PREFERRED_NEGOTIATED = 'PREFERRED_NEGOTIATED',
        PREFERRED_RETAIL_PACKAGE = 'PREFERRED_RETAIL_PACKAGE',
        PREFERRED_RETAIL_SHIPMENT = 'PREFERRED_RETAIL_SHIPMENT',
        RATED_ACCOUNT_PACKAGE = 'RATED_ACCOUNT_PACKAGE',
        RATED_ACCOUNT_SHIPMENT = 'RATED_ACCOUNT_SHIPMENT',
        RATED_CUSTOM_PACKAGE = 'RATED_CUSTOM_PACKAGE',
        RATED_CUSTOM_SHIPMENT = 'RATED_CUSTOM_SHIPMENT',
        RATED_LIST_PACKAGE = 'RATED_LIST_PACKAGE',
        RATED_LIST_SHIPMENT = 'RATED_LIST_SHIPMENT',
        RATED_RETAIL_PACKAGE = 'RATED_RETAIL_PACKAGE',
        RATED_RETAIL_SHIPMENT = 'RATED_RETAIL_SHIPMENT',
        UNKNOWN = 'UNKNOWN',
    }
    /**
     * Allows clients to determine whether to add charges at the package level when Per Piece Rating details are returned.<br><ul><li>SHIPMENT_WEIGHT_BASED - Indicates shipment weight is used to calculate the rate.</li><br><li>FLAT_RATE_PER_PAK - Indicates shipment is rated based on number of packs, weight would be considered for overweight surcharge but not for calculating shipment rate.</li><br><li>PACK_WEIGHT_BASED - Indicates individual package weight would be rated and aggregated to get shipment rate weight.</li></ul>
     */
    export enum ratingBasis {
        SHIPMENT_WEIGHT_BASED = 'SHIPMENT_WEIGHT_BASED',
        FLAT_RATE_PER_PAK = 'FLAT_RATE_PER_PAK',
        PACK_WEIGHT_BASED = 'PACK_WEIGHT_BASED',
        UNKNOWN = 'UNKNOWN',
    }
    /**
     * Identifies the type of pricing used for this shipment.
     */
    export enum pricingCode {
        ACTUAL = 'ACTUAL',
        ALTERNATE = 'ALTERNATE',
        BASE = 'BASE',
        HUNDREDWEIGHT = 'HUNDREDWEIGHT',
        HUNDREDWEIGHT_ALTERNATE = 'HUNDREDWEIGHT_ALTERNATE',
        INTERNATIONAL_DISTRIBUTION = 'INTERNATIONAL_DISTRIBUTION',
        INTERNATIONAL_ECONOMY_SERVICE = 'INTERNATIONAL_ECONOMY_SERVICE',
        LTL_FREIGHT = 'LTL_FREIGHT',
        PACKAGE = 'PACKAGE',
        SHIPMENT = 'SHIPMENT',
        SHIPMENT_FIVE_POUND_OPTIONAL = 'SHIPMENT_FIVE_POUND_OPTIONAL',
        SHIPMENT_OPTIONAL = 'SHIPMENT_OPTIONAL',
        SPECIAL = 'SPECIAL',
        UNKNOWN = 'UNKNOWN',
    }
    /**
     * provides the minimum charge type applicable to the rates.
     */
    export enum minimumChargeType {
        CUSTOMER = 'CUSTOMER',
        CUSTOMER_FREIGHT_WEIGHT = 'CUSTOMER_FREIGHT_WEIGHT',
        EARNED_DISCOUNT = 'EARNED_DISCOUNT',
        MIXED = 'MIXED',
        RATE_SCALE = 'RATE_SCALE',
        UNKNOWN = 'UNKNOWN',
    }
    /**
     * Will indicate the pickup charge description of the on call pickup
     */
    export enum pickupBaseChargeDescription {
        REGULARLY_SCHEDULED_PICKUP_MON_FRI = 'Regularly Scheduled Pickup Mon-Fri',
        AUTOMATED_PICKUP_MON_FRI = 'Automated Pickup Mon-Fri',
        SAME_DAY_OC_PICKUP_MON_FRI_CS_ = 'Same Day OC Pickup Mon-Fri (CS)',
        SAME_DAY_OC_PICKUP_MON_FRI_ONLINE_ = 'Same Day OC Pickup Mon-Fri (Online)',
        FUT_DAY_OC_PICKUP_MON_FRI_CS_ = 'Fut. Day OC Pickup Mon-Fri (CS)',
        FUT_DAY_OC_PICKUP_MON_FRI_ONLINE_ = 'Fut. Day OC Pickup Mon-Fri (Online)',
        REGULARLY_SCHEDULED_PICKUP_SAT = 'Regularly Scheduled Pickup Sat',
        AUTOMATED_PICKUP_SAT = 'Automated Pickup Sat',
        SAME_DAY_OC_PICKUP_SAT_CS_ = 'Same Day OC Pickup Sat (CS)',
        SAME_DAY_OC_PICKUP_SAT_ONLINE_ = 'Same Day OC Pickup Sat (Online)',
        FUT_DAY_OC_PICKUP_SAT_CS_ = 'Fut. Day OC Pickup Sat (CS)',
        FUT_DAY_OC_PICKUP_SAT_ONLINE_ = 'Fut. Day OC Pickup Sat (Online)',
        REGULARLY_SCHEDULED_PICKUP_SUN = 'Regularly Scheduled Pickup Sun',
        AUTOMATED_PICKUP_SUN = 'Automated Pickup Sun',
        SAME_DAY_OC_PICKUP_SUN_CS_ = 'Same Day OC Pickup Sun (CS)',
        SAME_DAY_OC_PICKUP_SUN_ONLINE_ = 'Same Day OC Pickup Sun (Online)',
        FUT_DAY_OC_PICKUP_SUN_CS_ = 'Fut. Day OC Pickup Sun (CS)',
        FUT_DAY_OC_PICKUP_SUN_ONLINE_ = 'Fut. Day OC Pickup Sun (Online)',
        RESIDENTIAL_ON_CALL_PICKUP_SURCHARGE = 'Residential On-Call Pickup Surcharge',
        PICKUP_AREA_SURCHARGE = 'Pickup Area Surcharge',
        EXTENDED_PICKUP_AREA_SURCHARGE = 'Extended Pickup Area Surcharge',
        REMOTE_PICKUP_AREA_SURCHARGE = 'Remote Pickup Area Surcharge',
        FUEL_SURCHARGE = 'Fuel Surcharge',
    }
}

