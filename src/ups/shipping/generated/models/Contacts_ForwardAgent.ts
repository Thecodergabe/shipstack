/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForwardAgent_Address } from './ForwardAgent_Address';
/**
 * The forwarding agent is the company or person acting as agent in the trans-shipping of freight to the destination country or territory.  Applicable for EEI form only.
 */
export type Contacts_ForwardAgent = {
    /**
     * Company Name or the Individual name of the Forwarding agent.  Applicable for EEI form only.
     */
    CompanyName: string;
    /**
     * Tax ID of the Forwarding agent.
     * Valid Values: (Below values are applicable for EEIFilingOption Code =3)
     * 94-308351500
     * 13-168669100
     * Applicable for EEI form only.
     */
    TaxIdentificationNumber: string;
    Address: ForwardAgent_Address;
};

