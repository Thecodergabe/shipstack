/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountNumber } from './AccountNumber';
import type { Address } from './Address';
/**
 * Indicate the party to a transaction including the physical address, contact information and account number information.
 */
export type Party = {
    address?: Address;
    accountNumber?: AccountNumber;
};

