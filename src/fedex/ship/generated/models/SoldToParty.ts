/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartyAccountNumber } from './PartyAccountNumber';
import type { PartyAddress } from './PartyAddress';
import type { PartyContact } from './PartyContact';
import type { TaxpayerIdentification } from './TaxpayerIdentification';
/**
 * Will indicate the party responsible for purchasing the goods shipped from the shipper to the recipient. The sold to party is not necessarily the recipient or the importer of record. The sold to party is relevant when the purchaser, rather than the recipient determines when certain customs regulations apply.
 */
export type SoldToParty = {
    address?: PartyAddress;
    contact?: PartyContact;
    /**
     * Used for adding the tax id
     */
    tins?: Array<TaxpayerIdentification>;
    /**
     * Identification of a specific FedEx customer account.
     */
    accountNumber?: PartyAccountNumber;
};

