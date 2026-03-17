/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NegotiatedCharges_ItemizedCharges } from './NegotiatedCharges_ItemizedCharges';
import type { NegotiatedCharges_RateModifier } from './NegotiatedCharges_RateModifier';
/**
 * Negotiated Rates container.  These charges would be returned only when -1) subversion is greater than or equal to 16072) if negotiated rates were requested for GFP shipments and account number is eligible to receive negotiated rates.
 */
export type RatedPackage_NegotiatedCharges = {
    /**
     * RateModifier inside Negotiated charges container to hold Modifier charges at package level
     *
     * **Note:** Applies only if SubVersion is 2407 and greater (Rate OAuth)
     *
     */
    RateModifier?: Array<NegotiatedCharges_RateModifier>;
    /**
     * Negotiated Itemized Accessorial and Sur Charges.  These charges would be returned only when subversion is greater than or equal to 1607.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    ItemizedCharges?: Array<NegotiatedCharges_ItemizedCharges>;
};

