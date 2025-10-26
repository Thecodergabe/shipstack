/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerReference } from './CustomerReference';
import type { LabelResponseVO } from './LabelResponseVO';
/**
 * Piece Response information.
 */
export type PieceResponse = {
    /**
     * Indicates the net charges amount.<br>Example: 21.45
     */
    netChargeAmount?: number;
    /**
     * These are package documents returned in the response.
     */
    packageDocuments?: Array<LabelResponseVO>;
    /**
     * Indicates the acceptance tracking number.<br>Example: 7949XXXXX5000
     */
    acceptanceTrackingNumber?: string;
    /**
     * Indicates the service category.
     */
    serviceCategory?: PieceResponse.serviceCategory;
    /**
     * Indicates total charges applicable to the customer.<br>Example: listCustomerTotalCharge
     */
    listCustomerTotalCharge?: string;
    /**
     * Indicates delivery date with timestamp.<br>Example: 2012-09-23
     */
    deliveryTimestamp?: string;
    /**
     * Indicates the type of the tracking identifier.
     */
    trackingIdType?: string;
    /**
     * These are additional charges or discounts.<br>Example: 621.45
     */
    additionalChargesDiscount?: number;
    /**
     * Indicates the net List rate amount.<br>Example: 1.45
     */
    listRateAmount?: number;
    /**
     * Specifies the base rate amount.<br>Example: 321.45
     */
    baseRateAmount?: number;
    /**
     * Indicates package sequence number.<br>Example: 215
     */
    packageSequenceNumber?: number;
    /**
     * Specifies the net discount amount.<br>Example: 121.45
     */
    netDiscountAmount?: number;
    /**
     * Specifies the Collect on Delivery collection amount.<br>Example: 231.45
     */
    codCollectionAmount?: number;
    /**
     * This is a master tracking number of the shipment (must be unique for stand-alone open shipments, or unique within consolidation if consolidation key is provided).<br>Example: 794XXXXX5000
     */
    masterTrackingNumber?: string;
    /**
     * Indicates acceptance type.<br>Example: acceptanceType<br>Example:acceptanceType
     */
    acceptanceType?: string;
    /**
     * This is the tracking number associated with this package. <br>Example: 49XXX0000XXX20032835
     */
    trackingNumber?: string;
    /**
     * These are additional customer reference data.<br>Note: The groupPackageCount must be specified to retrieve customer references.
     */
    customerReferences?: Array<CustomerReference>;
};
export namespace PieceResponse {
    /**
     * Indicates the service category.
     */
    export enum serviceCategory {
        EXPRESS = 'EXPRESS',
        GROUND = 'GROUND',
        EXPRESS_FREIGHT = 'EXPRESS_FREIGHT',
        FREIGHT = 'FREIGHT',
        SMARTPOST = 'SMARTPOST',
        EXPRESS_PARCEL = 'EXPRESS_PARCEL',
        NULL = 'NULL',
    }
}

