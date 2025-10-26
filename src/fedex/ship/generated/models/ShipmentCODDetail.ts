/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CODTransportationChargesDetail } from './CODTransportationChargesDetail';
import type { ContactAndAddress } from './ContactAndAddress';
import type { Money } from './Money';
import type { Party_1 } from './Party_1';
/**
 * This is the shipment level COD detail.
 */
export type ShipmentCODDetail = {
    addTransportationChargesDetail?: CODTransportationChargesDetail;
    /**
     * Descriptive data of the Cash On Delivery along with their details of the physical location.
     */
    codRecipient?: Party_1;
    /**
     * Specify the name of the person or company receiving the secured/unsecured funds payment<br>Example: remitToName
     */
    remitToName?: string;
    /**
     * Identifies the type of funds FedEx should collect upon shipment delivery<br>Example: CASH
     */
    codCollectionType: ShipmentCODDetail.codCollectionType;
    financialInstitutionContactAndAddress?: ContactAndAddress;
    /**
     * Indicate the COD collection amount.
     */
    codCollectionAmount?: Money;
    /**
     * Indicates which type of reference information to include on the COD return shipping label.<br>Example: INVOICE
     */
    returnReferenceIndicatorType?: ShipmentCODDetail.returnReferenceIndicatorType;
    /**
     * Indicate the COD amount for this shipment.
     */
    shipmentCodAmount?: Money;
};
export namespace ShipmentCODDetail {
    /**
     * Identifies the type of funds FedEx should collect upon shipment delivery<br>Example: CASH
     */
    export enum codCollectionType {
        ANY = 'ANY',
        CASH = 'CASH',
        GUARANTEED_FUNDS = 'GUARANTEED_FUNDS',
        COMPANY_CHECK = 'COMPANY_CHECK',
        PERSONAL_CHECK = 'PERSONAL_CHECK',
    }
    /**
     * Indicates which type of reference information to include on the COD return shipping label.<br>Example: INVOICE
     */
    export enum returnReferenceIndicatorType {
        INVOICE = 'INVOICE',
        PO = 'PO',
        REFERENCE = 'REFERENCE',
        TRACKING = 'TRACKING',
    }
}

