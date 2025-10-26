/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money_1 } from './Money_1';
/**
 * Tax surcharge details
 */
export type Tax_2 = {
    /**
     * Specifies the type of Surcharge/Tax.
     */
    taxType?: Tax_2.taxType;
    /**
     * Specifies the description of the Surcharge/Tax.
     */
    description?: string;
    /**
     * Specifies the list of tax amounts.
     */
    amount?: Money_1;
};
export namespace Tax_2 {
    /**
     * Specifies the type of Surcharge/Tax.
     */
    export enum taxType {
        EXPORT = 'EXPORT',
        GST = 'GST',
        HST = 'HST',
        INTRACOUNTRY = 'INTRACOUNTRY',
        OTHER = 'OTHER',
        PST = 'PST',
        SST = 'SST',
        VAT = 'VAT',
    }
}

