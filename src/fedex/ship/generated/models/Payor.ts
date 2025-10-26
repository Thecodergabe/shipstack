/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponsiblePartyParty } from './ResponsiblePartyParty';
/**
 * Payor is mandatory when the paymentType is RECIPIENT, THIRD_PARTY or COLLECT.
 */
export type Payor = {
    responsibleParty: ResponsiblePartyParty;
};

