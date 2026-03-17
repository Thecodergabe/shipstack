/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Delivery Confirmation container.   Valid for forward shipments only.
 *
 * Refer to Delivery Confirmation Origin-Destination Pairs in the Appendix for a list of valid values.
 */
export type ShipmentServiceOptions_DeliveryConfirmation = {
    /**
     * Type of delivery confirmation.  Valid values:
     * 1 - Delivery Confirmation Signature Required
     * 2 - Delivery Confirmation Adult Signature Required. Valid for forward shipments only.
     */
    DCISType: string;
    /**
     * DCIS Number.
     */
    DCISNumber?: string;
};

