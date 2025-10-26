/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeShippingChargesPayment_payor } from './TransitTimeShippingChargesPayment_payor';
/**
 * Details about who and how the shipment will be paid for. 'payor' is optional when 'paymentType' provided is SENDER.<br>Note: For services like FedEx International Connect Plus(FICP) & Regional Economy(RE)/Regional Economy Freight(REF) account number is mandatory to be provided under shippingChargesPayment.
 */
export type TransitTimeShippingChargesPayment = {
    payor?: TransitTimeShippingChargesPayment_payor;
    /**
     * Applicable for Express and Ground rates.<br>
     * Indicates who and how the shipment will be paid for.
     */
    paymentType?: TransitTimeShippingChargesPayment.paymentType;
};
export namespace TransitTimeShippingChargesPayment {
    /**
     * Applicable for Express and Ground rates.<br>
     * Indicates who and how the shipment will be paid for.
     */
    export enum paymentType {
        SENDER = 'SENDER',
        RECIPIENT = 'RECIPIENT',
        THIRD_PARTY = 'THIRD_PARTY',
        COLLECT = 'COLLECT',
    }
}

