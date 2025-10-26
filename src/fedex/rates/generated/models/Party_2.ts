/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountNumber } from './AccountNumber';
import type { Address_2 } from './Address_2';
import type { Contact_2 } from './Contact_2';
/**
 * Indicate the party to a transaction including the physical address, contact information and account number information.
 */
export type Party_2 = {
    address?: Address_2;
    contact?: Contact_2;
    accountNumber?: AccountNumber;
};

