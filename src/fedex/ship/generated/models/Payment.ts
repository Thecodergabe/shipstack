/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payor } from './Payor';
/**
 * Specifies the payment details specifying the method and means of payment to FedEx for providing shipping services.
 */
export type Payment = {
    /**
     * Indicates who and how the shipment will be paid for.Required for Express and Ground.<br>Example: SENDER
     */
    paymentType: Payment.paymentType;
    payor?: Payor;
};
export namespace Payment {
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

