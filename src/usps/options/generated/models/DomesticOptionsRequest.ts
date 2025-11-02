/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { destinationZIPCode } from './destinationZIPCode';
import type { DomesticPackageDescription } from './DomesticPackageDescription';
import type { DomesticPricingOption } from './DomesticPricingOption';
import type { originZIPCode } from './originZIPCode';
export type DomesticOptionsRequest = {
    pricingOptions: Array<DomesticPricingOption>;
    originZIPCode: originZIPCode;
    destinationZIPCode: destinationZIPCode;
    /**
     * Types of Facilities:
     *
     * * NONE - Translate to Destination Rate Indicator N
     * * DESTINATION_NETWORK_DISTRIBUTION_CENTER - Translate to Destination Rate Indicator B
     * * DESTINATION_SECTIONAL_CENTER_FACILITY - Translate to Destination Rate Indicator S
     * * DESTINATION_DELIVERY_UNIT - Translate to Destination Rate Indicator D
     * * DESTINATION_SERVICE_HUB - Translate to Destination Rate Indicator H
     *
     * Note:
     * - The Destination Entry Facility Type is only used in calculating Shipping Standards.
     *
     */
    destinationEntryFacilityType?: DomesticOptionsRequest.destinationEntryFacilityType;
    packageDescription: DomesticPackageDescription;
    /**
     * A filter for domestic results to return only one response based on lowest price or fastest service standard
     */
    shippingFilter?: DomesticOptionsRequest.shippingFilter;
};
export namespace DomesticOptionsRequest {
    /**
     * Types of Facilities:
     *
     * * NONE - Translate to Destination Rate Indicator N
     * * DESTINATION_NETWORK_DISTRIBUTION_CENTER - Translate to Destination Rate Indicator B
     * * DESTINATION_SECTIONAL_CENTER_FACILITY - Translate to Destination Rate Indicator S
     * * DESTINATION_DELIVERY_UNIT - Translate to Destination Rate Indicator D
     * * DESTINATION_SERVICE_HUB - Translate to Destination Rate Indicator H
     *
     * Note:
     * - The Destination Entry Facility Type is only used in calculating Shipping Standards.
     *
     */
    export enum destinationEntryFacilityType {
        NONE = 'NONE',
        DESTINATION_NETWORK_DISTRIBUTION_CENTER = 'DESTINATION_NETWORK_DISTRIBUTION_CENTER',
        DESTINATION_SECTIONAL_CENTER_FACILITY = 'DESTINATION_SECTIONAL_CENTER_FACILITY',
        DESTINATION_DELIVERY_UNIT = 'DESTINATION_DELIVERY_UNIT',
        DESTINATION_SERVICE_HUB = 'DESTINATION_SERVICE_HUB',
    }
    /**
     * A filter for domestic results to return only one response based on lowest price or fastest service standard
     */
    export enum shippingFilter {
        PRICE = 'PRICE',
        SERVICE_STANDARDS = 'SERVICE_STANDARDS',
    }
}

