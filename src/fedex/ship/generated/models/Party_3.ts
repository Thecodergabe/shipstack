/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartyAddress_1 } from './PartyAddress_1';
import type { PartyContact_1 } from './PartyContact_1';
import type { TaxpayerIdentification } from './TaxpayerIdentification';
export type Party_3 = {
    address?: PartyAddress_1;
    contact?: PartyContact_1;
    /**
     * This is the tax identification number details.
     */
    tins?: Array<TaxpayerIdentification>;
};

