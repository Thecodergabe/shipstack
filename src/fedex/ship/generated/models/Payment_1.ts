/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingDetails } from './BillingDetails';
import type { Payor_1 } from './Payor_1';
/**
 * This is a payment type, basically indicates who is the payor for the shipment.Conditional required for International Shipments
 */
export type Payment_1 = {
    payor?: Payor_1;
    billingDetails?: BillingDetails;
    /**
     * Indicates who and how the shipment will be paid for.Required for Express and Ground.<br>Example: SENDER
     */
    paymentType?: Payment_1.paymentType;
};
export namespace Payment_1 {
    /**
     * Indicates who and how the shipment will be paid for.Required for Express and Ground.<br>Example: SENDER
     */
    export enum paymentType {
        SENDER = 'SENDER',
        RECIPIENT = 'RECIPIENT',
        THIRD_PARTY = 'THIRD_PARTY',
        COLLECT = 'COLLECT',
    }
}

