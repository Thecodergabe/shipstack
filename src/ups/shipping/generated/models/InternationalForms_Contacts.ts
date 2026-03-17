/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Contacts_ForwardAgent } from './Contacts_ForwardAgent';
import type { Contacts_IntermediateConsignee } from './Contacts_IntermediateConsignee';
import type { Contacts_Producer } from './Contacts_Producer';
import type { Contacts_SoldTo } from './Contacts_SoldTo';
import type { Contacts_UltimateConsignee } from './Contacts_UltimateConsignee';
/**
 * Holds the contact information of various parties.  Applicable for EEI and USMCA only. Required for USMCA and EEI. Ultimate consignee contact information is required for EEI.  Producer contact information is required for USMCA
 */
export type InternationalForms_Contacts = {
    ForwardAgent?: Contacts_ForwardAgent;
    UltimateConsignee?: Contacts_UltimateConsignee;
    IntermediateConsignee?: Contacts_IntermediateConsignee;
    Producer?: Contacts_Producer;
    SoldTo?: Contacts_SoldTo;
};

