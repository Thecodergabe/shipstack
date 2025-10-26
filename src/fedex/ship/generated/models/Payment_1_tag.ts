/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingDetails } from './BillingDetails';
import type { Payor_1_tag } from './Payor_1_tag';
/**
 * This is a payment type, basically indicates who is the payor for the shipment.Conditional required for International Shipments
 */
export type Payment_1_tag = {
    payor?: Payor_1_tag;
    billingDetails?: BillingDetails;
    /**
     * Indicates who and how the shipment will be paid for.Required for Express and Ground.<br>Example: SENDER
     */
    paymentType?: Payment_1_tag.paymentType;
};
export namespace Payment_1_tag {
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

