/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomesticPricingOption } from './DomesticPricingOption';
/**
 * TBD
 */
export type DomesticOptionsResponse = {
    /**
     * This is the originating ZIP Code&#8482; for the package.
     */
    originZIPCode?: string;
    /**
     * This is the destination ZIP Code&#8482; for the package.
     */
    destinationZIPCode?: string;
    pricingOptions?: Array<DomesticPricingOption>;
};

