/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Delivery Confirmation container.
 * Refer to Delivery Confirmation Origin-
 * Destination Pairs in the Appendix for a list of valid values.  Valid only for forward shipment only.
 */
export type PackageServiceOptions_DeliveryConfirmation = {
    /**
     * Type of delivery confirmation.  Valid values:
     * - 1 - Unsupported
     * - 2 - Delivery Confirmation Signature Required
     * - 3 - Delivery Confirmation Adult Signature Required
     */
    DCISType: string;
    /**
     * Delivery Confirmation Control number associated with the delivery confirmation for the package.  Valid for forward shipments only.
     */
    DCISNumber?: string;
};

