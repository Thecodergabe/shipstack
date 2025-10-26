/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Party_2 } from './Party_2';
/**
 * This is payer Information responsible for paying for the shipment.<br>Note: Optional when paymentType is SENDER.
 */
export type Payor = {
    /**
     * These are payer details such as address, account and contacts.
     */
    responsibleParty?: Party_2;
};

