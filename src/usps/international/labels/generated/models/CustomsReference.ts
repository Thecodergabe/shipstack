/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Email } from './Email';
import type { Phone } from './Phone';
export type CustomsReference = {
    /**
     * The type of reference number being provided.
     */
    referenceType?: CustomsReference.referenceType;
    /**
     * Customs Reference.
     *
     */
    reference?: string;
    contact?: {
        phone?: Phone;
        fax?: Phone;
        email?: Email;
    };
};
export namespace CustomsReference {
    /**
     * The type of reference number being provided.
     */
    export enum referenceType {
        TAX_CODE = 'TAX_CODE',
        VAT_NUMBER = 'VAT_NUMBER',
        IMPORTER_CODE = 'IMPORTER_CODE',
    }
}

