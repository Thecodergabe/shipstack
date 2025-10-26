/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address_1 } from './Address_1';
import type { Contact_1 } from './Contact_1';
import type { PartyAccountNumber_1 } from './PartyAccountNumber_1';
import type { TaxpayerIdentification } from './TaxpayerIdentification';
/**
 * Use this object to provide the attributes such as physical address, contact information and account number information.
 */
export type Party_2 = {
    address?: Address_1;
    contact?: Contact_1;
    accountNumber?: PartyAccountNumber_1;
    /**
     * This is the tax identification number details.
     */
    tins?: Array<TaxpayerIdentification>;
};

