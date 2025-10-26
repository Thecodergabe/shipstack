/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartyAccountNumber } from './PartyAccountNumber';
import type { PartyAddress } from './PartyAddress';
import type { PartyContact } from './PartyContact';
/**
 * Indicate the payer Information responsible for paying for the shipment. <br>Note: ResponsibleParty accountNumber is required for ACCOUNT based services.
 */
export type ResponsiblePartyParty = {
    address?: PartyAddress;
    contact?: PartyContact;
    accountNumber: PartyAccountNumber;
};

