/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackingNumberInfo } from './TrackingNumberInfo';
export type TrackDocumentSpecification = {
    trackingNumberInfo: TrackingNumberInfo;
    /**
     * ShipDateBegin and ShipDateEnd are used to narrow the search, reduce lookup time, and avoid duplicates when searching for a specific tracking number during a specific date range.<br>Format: YYYY-MM-DD<br>example: '2020-03-29'
     */
    shipDateBegin?: string;
    /**
     * ShipDateBegin and ShipDateEnd are recommended to narrow the search, reduce lookup time, and avoid duplicates when searching for a specific tracking number during a specific date range.<br>Format: YYYY-MM-DD<br>example: '2020-04-01'
     */
    shipDateEnd?: string;
    /**
     * Specifies Signature Proof of Delivery(SPOD) account number for the shipment being tracked.<br>Conditionally required when documentType is BILL_OF_LADING or FREIGHT_BILLING_DOCUMENT<br>Example: 123456789
     */
    accountNumber?: string;
};

