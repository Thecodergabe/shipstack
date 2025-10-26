/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartyAddress_2 } from './PartyAddress_2';
import type { PartyContact } from './PartyContact';
import type { TaxpayerIdentification } from './TaxpayerIdentification';
/**
 * Indicate the Shipper contact details for this shipment.
 */
export type ShipperParty = {
    address: PartyAddress_2;
    contact: PartyContact;
    /**
     * This is the tax identification number details.
     */
    tins?: Array<TaxpayerIdentification>;
};

