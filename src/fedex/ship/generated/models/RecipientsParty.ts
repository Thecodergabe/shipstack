/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartyAddress_2 } from './PartyAddress_2';
import type { PartyContact } from './PartyContact';
import type { TaxpayerIdentification } from './TaxpayerIdentification';
/**
 * The descriptive information of the recipient for the shipment and the physical location for the package destination.
 */
export type RecipientsParty = {
    address: PartyAddress_2;
    contact: PartyContact;
    /**
     * This is the tax identification number details.
     */
    tins?: Array<TaxpayerIdentification>;
    /**
     * Specify the delivery instructions to be added with the shipment. Use with Ground Home Delivery.<br>Example: Delivery Instructions
     */
    deliveryInstructions?: string;
};

