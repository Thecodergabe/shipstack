/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InternationalPackageDescription } from './InternationalPackageDescription';
import type { InternationalPricingOption } from './InternationalPricingOption';
import type { originZIPCode } from './originZIPCode';
import type { postalCode } from './postalCode';
export type InternationalOptionsRequest = {
    pricingOptions: Array<InternationalPricingOption>;
    originZIPCode: originZIPCode;
    foreignPostalCode?: postalCode;
    /**
     * Country of destination.
     */
    destinationCountryCode: string;
    packageDescription: InternationalPackageDescription;
    /**
     * A filter for international results to return only one response based on lowest price.  There are no service standards for international.
     */
    shippingFilter?: InternationalOptionsRequest.shippingFilter;
};
export namespace InternationalOptionsRequest {
    /**
     * A filter for international results to return only one response based on lowest price.  There are no service standards for international.
     */
    export enum shippingFilter {
        PRICE = 'PRICE',
    }
}

