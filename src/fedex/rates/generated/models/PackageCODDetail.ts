/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money_1 } from './Money_1';
/**
 * Indicates package COD Detail.  COD main information is set in shipment level.
 */
export type PackageCODDetail = {
    codCollectionAmount?: Money_1;
    /**
     * Indicate the type of funds FedEx should collect upon shipment delivery. <br> Conditionally required for Ground COD rates
     */
    codCollectionType?: PackageCODDetail.codCollectionType;
};
export namespace PackageCODDetail {
    /**
     * Indicate the type of funds FedEx should collect upon shipment delivery. <br> Conditionally required for Ground COD rates
     */
    export enum codCollectionType {
        ANY = 'ANY',
        CASH = 'CASH',
        COMPANY_CHECK = 'COMPANY_CHECK',
        GUARANTEED_FUNDS = 'GUARANTEED_FUNDS',
        PERSONAL_CHECK = 'PERSONAL_CHECK',
    }
}

