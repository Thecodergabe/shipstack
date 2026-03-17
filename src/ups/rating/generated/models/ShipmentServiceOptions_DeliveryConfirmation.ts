/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Delivery Confirmation Container.  DeliveryConfirmation and C.O.D. are mutually exclusive. Refer to the Appendix for a list of valid origin-destination country or territory pairs associated with each confirmation type.
 */
export type ShipmentServiceOptions_DeliveryConfirmation = {
    /**
     * Type of delivery confirmation.  Valid values: 1 - Delivery Confirmation Signature Required 2 - Delivery Confirmation Adult Signature Required
     */
    DCISType: string;
};

