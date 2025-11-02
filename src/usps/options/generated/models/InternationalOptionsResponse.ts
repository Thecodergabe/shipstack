/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InternationalPricingOption } from './InternationalPricingOption';
import type { postalCode } from './postalCode';
/**
 * TBD
 */
export type InternationalOptionsResponse = {
    /**
     * This is the originating ZIP Code&#8482; for the package.
     */
    originZIPCode?: string;
    foreignPostalCode?: postalCode;
    /**
     * Country of destination.
     */
    destinationCountryCode?: string;
    pricingOptions?: Array<InternationalPricingOption>;
};

