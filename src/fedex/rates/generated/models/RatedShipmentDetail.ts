/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AncillaryFeeAndTax } from './AncillaryFeeAndTax';
import type { AncillaryFeesAndTaxes } from './AncillaryFeesAndTaxes';
import type { CurrencyExchangeRate } from './CurrencyExchangeRate';
import type { EdtCharge } from './EdtCharge';
import type { EdtCommodityTax } from './EdtCommodityTax';
import type { Money } from './Money';
import type { Money_1 } from './Money_1';
import type { RateDiscount_2 } from './RateDiscount_2';
import type { RatedPackageDetail } from './RatedPackageDetail';
import type { Rebate } from './Rebate';
import type { ShipmentLegRateDetail_1 } from './ShipmentLegRateDetail_1';
import type { ShipmentRateDetail } from './ShipmentRateDetail';
import type { Surcharge_2 } from './Surcharge_2';
import type { Tax_2 } from './Tax_2';
import type { VariableHandlingCharges } from './VariableHandlingCharges';
import type { VariableHandlingCharges_1 } from './VariableHandlingCharges_1';
/**
 * This object provides the shipment and package rating data in a rate request reply.
 */
export type RatedShipmentDetail = {
    /**
     * Type used for this specific set of rate data.<br>Example: ACCOUNT
     */
    rateType?: RatedShipmentDetail.rateType;
    /**
     * Sum of totalNetCharge from pickupRateDetail and shipmentRateDetail. This charge will be populated regardless of pickup.
     */
    totalNetTransportationAndPickupCharge?: Money;
    /**
     * Sum of totalNetFedExCharge from pickupRateDetail and shipmentRateDetail. This charge will be populated regardless of a pickup.
     */
    totalNetFedExTransportationAndPickupCharge?: Money;
    /**
     * Charges associated with a scheduled shipment pickup
     */
    pickupRateDetail?: {
        /**
         * Type used for this specific set of rate data.
         */
        rateType?: RatedShipmentDetail.rateType;
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
        ratingBasis?: RatedShipmentDetail.ratingBasis;
        /**
         * Identifies the type of pricing used for this shipment.
         */
        pricingCode?: RatedShipmentDetail.pricingCode;
        /**
         * provides the minimum charge type applicable to the rates.
         */
        minimumChargeType?: RatedShipmentDetail.minimumChargeType;
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
        pickupBaseChargeDescription?: RatedShipmentDetail.pickupBaseChargeDescription;
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
    /**
     * Indicates which weight was used for the rate.<br>Example: 'ACTUAL'
     */
    ratedWeightMethod?: RatedShipmentDetail.ratedWeightMethod;
    /**
     * The total amount of the duties and taxes plus the total ancillary fees and taxes.<br> Example: 445.54
     */
    totalDutiesTaxesAndFees?: number;
    /**
     * This is the total discount.<br> Example: 445.54<br><a href='/api/en-us/reference-guide.html#discounts' target='_blank'>Click here to see FedEx Discounts</a>
     */
    totalDiscounts?: number;
    /**
     * The sum of shipment/package Duties and taxes.<br> Example: 445.54
     */
    totalDutiesAndTaxes?: number;
    variableHandlingCharges?: VariableHandlingCharges;
    /**
     * These are the estimation and duty  charges.
     */
    edtCharges?: Array<EdtCharge>;
    /**
     * Indicates the shipment-level fees and taxes that are not based on transportation charges or commodity-level estimated duties and taxes.
     */
    totalAncillaryFeesAndTaxes?: number;
    /**
     * These are the package-level data for this rate type.
     */
    ratedPackages?: Array<RatedPackageDetail>;
    /**
     * This shipment's totalNetFedExChargeList, which is totalNetFreight plus totalSurcharges (not including totalTaxes).
     */
    totalNetFedExCharge?: number;
    /**
     * Indicates the unique identifier for a specific rate quotation.<br> Example: XX1123XX
     */
    quoteNumber?: string;
    /**
     * This is data for a single leg of a shipment's total/summary rates, as calculated per a specific rate type.
     */
    shipmentLegRateDetails?: Array<ShipmentLegRateDetail_1>;
    /**
     * This identifies the manner in which the chargeRate was applied, for Freight.<br> Valid values are: <ul><li>CWT - Charge rate applies per weight.</li><li>FLAT - Charge rate is a flat-rate amount.</li><li>MINIMUM</li></ul>
     */
    freightChargeBasis?: RatedShipmentDetail.freightChargeBasis;
    totalVariableHandlingCharges?: VariableHandlingCharges;
    /**
     * This is total value added tax charges (VAT).
     */
    totalVatCharge?: number;
    /**
     * This is the total amount of the shipment-level fees and taxes that are not based on transportation charges of commodity-level estimated duties and taxes.
     */
    ancillaryFeesAndTaxes?: Array<AncillaryFeesAndTaxes>;
    /**
     * Specifies the Edt charges.
     */
    preferredEdtCharges?: Array<EdtCharge>;
    /**
     * This is net charges for the shipment.
     */
    totalNetCharge?: number;
    /**
     * This is total base charges for the shipment.
     */
    totalBaseCharge?: number;
    /**
     * This is total net Charges with Duties And Taxes for the shipment.
     */
    totalNetChargeWithDutiesAndTaxes?: number;
    shipmentRateDetail?: ShipmentRateDetail;
};
export namespace RatedShipmentDetail {
    /**
     * Type used for this specific set of rate data.<br>Example: ACCOUNT
     */
    export enum rateType {
        ACCOUNT = 'ACCOUNT',
        ACTUAL = 'ACTUAL',
        CURRENT = 'CURRENT',
        CUSTOM = 'CUSTOM',
        LIST = 'LIST',
        INCENTIVE = 'INCENTIVE',
        PREFERRED = 'PREFERRED',
        PREFERRED_INCENTIVE = 'PREFERRED_INCENTIVE',
        PREFERRED_CURRENCY = 'PREFERRED_CURRENCY',
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
    /**
     * Indicates which weight was used for the rate.<br>Example: 'ACTUAL'
     */
    export enum ratedWeightMethod {
        ACTUAL = 'ACTUAL',
        AVERAGE_PACKAGE_WEIGHT_MINIMUM = 'AVERAGE_PACKAGE_WEIGHT_MINIMUM',
        DEFAULT_WEIGHT_APPLIED = 'DEFAULT_WEIGHT_APPLIED',
        BALLOON = 'BALLOON',
        DIM = 'DIM',
        FREIGHT_MINIMUM = 'FREIGHT_MINIMUM',
        MIXED = 'MIXED',
        OVERSIZE = 'OVERSIZE',
        OVERSIZE_1 = 'OVERSIZE_1',
        OVERSIZE_2 = 'OVERSIZE_2',
        OVERSIZE_3 = 'OVERSIZE_3',
        PACKAGING_MINIMUM = 'PACKAGING_MINIMUM',
        WEIGHT_BREAK = 'WEIGHT_BREAK',
    }
    /**
     * This identifies the manner in which the chargeRate was applied, for Freight.<br> Valid values are: <ul><li>CWT - Charge rate applies per weight.</li><li>FLAT - Charge rate is a flat-rate amount.</li><li>MINIMUM</li></ul>
     */
    export enum freightChargeBasis {
        CWT = 'CWT',
        FLAT = 'FLAT',
        MINIMUM = 'MINIMUM',
    }
}

