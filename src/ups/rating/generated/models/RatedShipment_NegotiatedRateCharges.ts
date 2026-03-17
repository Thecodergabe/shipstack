/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NegotiatedRateCharges_BaseServiceCharge } from './NegotiatedRateCharges_BaseServiceCharge';
import type { NegotiatedRateCharges_ItemizedCharges } from './NegotiatedRateCharges_ItemizedCharges';
import type { NegotiatedRateCharges_RateModifier } from './NegotiatedRateCharges_RateModifier';
import type { NegotiatedRateCharges_TaxCharges } from './NegotiatedRateCharges_TaxCharges';
import type { NegotiatedRateCharges_TotalCharge } from './NegotiatedRateCharges_TotalCharge';
import type { NegotiatedRateCharges_TotalChargesWithTaxes } from './NegotiatedRateCharges_TotalChargesWithTaxes';
/**
 * Negotiated Rate Charges Container.  For tiered rates and promotional discounts, if a particular shipment based on zone, origin, destination or even shipment size doesn't qualify for the existing discount then no negotiated rates container will be returned. Published rates will be the applicable rate.
 */
export type RatedShipment_NegotiatedRateCharges = {
    /**
     * Negotiated base service charge container.These charges would be returned only when subversion is greater than or equal to 2201.
     *
     */
    BaseServiceCharge?: Array<NegotiatedRateCharges_BaseServiceCharge>;
    /**
     * RateModifier inside Negotiated charges container to hold Modifier charges at package level
     *
     * **Note:** Applies only if SubVersion is 2407 and greater (Rate OAuth)
     *
     */
    RateModifier?: Array<NegotiatedRateCharges_RateModifier>;
    /**
     * Itemized Charges are returned only when the subversion element is present and greater than or equal to '1601'.  These charges would be returned only when subversion is greater than or equal to 1601.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    ItemizedCharges?: Array<NegotiatedRateCharges_ItemizedCharges>;
    /**
     * TaxCharges container are returned only when TaxInformationIndicator is present in request. TaxCharges container contains Tax information for a given shipment.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    TaxCharges?: Array<NegotiatedRateCharges_TaxCharges>;
    TotalCharge: NegotiatedRateCharges_TotalCharge;
    TotalChargesWithTaxes?: NegotiatedRateCharges_TotalChargesWithTaxes;
};

