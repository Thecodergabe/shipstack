/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NegotiatedCharges_ItemizedCharges } from './NegotiatedCharges_ItemizedCharges';
import type { NegotiatedCharges_RateModifier } from './NegotiatedCharges_RateModifier';
/**
 * Negotiated Rates Charge Container.  These charges are returned when:
 * 1) Subversion is greater than or equal to 1607
 * 2) If negotiated rates were requested for GFP shipments and account number is eligible to receive negotiated rates.
 */
export type PackageResults_NegotiatedCharges = {
    /**
     * Negotiated Itemized Accessorial and SurCharges.
     *
     * Negotiated itemized charges are only returned for certain contract-only shipments as well as Worldwide Express Freight, Ground Freight Pricing, and Hazmat movements. Negotiated Itemized Accessorial and Sur Charges are returned only when the subversion element is present and greater than or equal to 1607.
     *
     * Package level itemized charges are only returned for US domestic movements
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    ItemizedCharges?: Array<NegotiatedCharges_ItemizedCharges>;
    RateModifier?: Array<NegotiatedCharges_RateModifier>;
};

