/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payor } from './Payor';
/**
 * These are details about shipment payment. Value payor is optional when paymentType provided as SENDER.
 */
export type Payment = {
    payor?: Payor;
    /**
     * Indicate the payment Type. Applicable for Express and Ground rates.
     */
    paymentType?: Payment.paymentType;
};
export namespace Payment {
    /**
     * Indicate the payment Type. Applicable for Express and Ground rates.
     */
    export enum paymentType {
        SENDER = 'SENDER',
    }
}

