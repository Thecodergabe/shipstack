/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartyAccountNumber } from './PartyAccountNumber';
import type { PartyAddress } from './PartyAddress';
import type { PartyContact } from './PartyContact';
import type { TaxpayerIdentification } from './TaxpayerIdentification';
export type Party_1 = {
    address?: PartyAddress;
    contact: PartyContact;
    accountNumber?: PartyAccountNumber;
    /**
     * This is the tax identification number details.
     */
    tins?: Array<TaxpayerIdentification>;
};

