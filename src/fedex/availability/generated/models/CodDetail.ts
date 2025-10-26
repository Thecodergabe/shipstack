/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money } from './Money';
export type CODDetail = {
    /**
     * Identifies the type of funds FedEx should collect upon shipment delivery.
     */
    codCollectionType?: CODDetail.codCollectionType;
    codCollectionAmount: Money;
};
export namespace CODDetail {
    /**
     * Identifies the type of funds FedEx should collect upon shipment delivery.
     */
    export enum codCollectionType {
        COMPANY_CHECK = 'COMPANY_CHECK',
        ANY = 'ANY',
        CASH = 'CASH',
        GUARANTEED_FUNDS = 'GUARANTEED_FUNDS',
        PERSONAL_CHECK = 'PERSONAL_CHECK',
    }
}

