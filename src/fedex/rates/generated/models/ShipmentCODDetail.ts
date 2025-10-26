/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CODTransportationChargesDetail } from './CODTransportationChargesDetail';
import type { ContactAndAddress } from './ContactAndAddress';
import type { Party_2 } from './Party_2';
/**
 * Specifies Shipment COD Detail
 */
export type ShipmentCODDetail = {
    addTransportationChargesDetail?: CODTransportationChargesDetail;
    codRecipient?: Party_2;
    /**
     * Specifies the name of person or company receiving the secured or unsecured payment.<br>Example: FedEx
     */
    remitToName?: string;
    /**
     * Indicate the type of funds FedEx should collect upon shipment delivery.
     */
    codCollectionType?: ShipmentCODDetail.codCollectionType;
    financialInstitutionContactAndAddress?: ContactAndAddress;
    /**
     * Indicate the type of reference information to include on the COD return shipping label.
     */
    returnReferenceIndicatorType?: ShipmentCODDetail.returnReferenceIndicatorType;
};
export namespace ShipmentCODDetail {
    /**
     * Indicate the type of funds FedEx should collect upon shipment delivery.
     */
    export enum codCollectionType {
        ANY = 'ANY',
        CASH = 'CASH',
        COMPANY_CHECK = 'COMPANY_CHECK',
        GUARANTEED_FUNDS = 'GUARANTEED_FUNDS',
        PERSONAL_CHECK = 'PERSONAL_CHECK',
    }
    /**
     * Indicate the type of reference information to include on the COD return shipping label.
     */
    export enum returnReferenceIndicatorType {
        INVOICE = 'INVOICE',
        PO = 'PO',
        REFERENCE = 'REFERENCE',
        TRACKING = 'TRACKING',
    }
}

