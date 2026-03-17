/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LTL_Other_Charges } from './LTL_Other_Charges';
/**
 * Represents transportation charges for child shipments categorized as "Less than Truck Load" (LTL), including freight, fuel surcharges, and accessorial fees. These charges are calculated based on shipment weight, volume, or distance. Applicable only for LTL child.
 */
export type Child_LTL_Charges = {
    /**
     * The monetary value of the discount/rebate charge.
     */
    Discount?: string;
    /**
     * Freight charges.
     */
    FreightCharges?: string;
    /**
     * The monetary value of the insurance charge.
     */
    InsuranceCharges?: string;
    OtherCharges?: LTL_Other_Charges;
};

