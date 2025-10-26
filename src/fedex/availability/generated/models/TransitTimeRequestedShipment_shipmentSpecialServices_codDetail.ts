/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeRequestedShipment_shipmentSpecialServices_codDetail_codCollectionAmount } from './TransitTimeRequestedShipment_shipmentSpecialServices_codDetail_codCollectionAmount';
/**
 * Use this object to specify Collect On Delivery (COD) shipment details.
 */
export type TransitTimeRequestedShipment_shipmentSpecialServices_codDetail = {
    codCollectionAmount?: TransitTimeRequestedShipment_shipmentSpecialServices_codDetail_codCollectionAmount;
    /**
     * Indicate the type of funds FedEx should collect upon shipment delivery.
     */
    codCollectionType?: TransitTimeRequestedShipment_shipmentSpecialServices_codDetail.codCollectionType;
};
export namespace TransitTimeRequestedShipment_shipmentSpecialServices_codDetail {
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
}

