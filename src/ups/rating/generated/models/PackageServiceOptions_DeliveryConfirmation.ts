/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Delivery Confirmation Container. For a list of valid origin/destination countries or territories please refer to appendix.  DeliveryConfirmation and COD are mutually exclusive.
 */
export type PackageServiceOptions_DeliveryConfirmation = {
    /**
     * Type of delivery confirmation.  Valid values: 1 - Unsupported 2 - Delivery Confirmation Signature Required 3 - Delivery Confirmation Adult Signature Required
     */
    DCISType: string;
};

