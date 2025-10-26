/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountNumber } from './AccountNumber';
import type { Address } from './Address';
import type { Contact1 } from './Contact1';
/**
 * optional information about sender/recipient including Address, Contact, Account number.
 */
export type Party = {
    address: Address;
    contact?: Contact1;
    accountNumber?: AccountNumber;
};

