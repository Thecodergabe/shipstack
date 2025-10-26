/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailLabelDetail } from './EmailLabelDetail';
import type { PendingShipmentProcessingOptionsRequested } from './PendingShipmentProcessingOptionsRequested';
import type { RecommendedDocumentSpecification } from './RecommendedDocumentSpecification';
import type { UploadDocumentReferenceDetail_1 } from './UploadDocumentReferenceDetail_1';
/**
 * This object is used to specify the Pending Shipment Type for Email label.
 */
export type PendingShipmentDetail = {
    /**
     * Specifies the pending shipment type.  Must include the value: EMAIL for email return shipments. <br>Not applicable for other types of shipments<br>Example: EMAIL
     */
    pendingShipmentType: PendingShipmentDetail.pendingShipmentType;
    processingOptions?: PendingShipmentProcessingOptionsRequested;
    recommendedDocumentSpecification?: RecommendedDocumentSpecification;
    emailLabelDetail: EmailLabelDetail;
    /**
     * These are the reference document details with the shipment.
     */
    attachedDocuments?: Array<UploadDocumentReferenceDetail_1>;
    /**
     * Specifies the Email Label expiration date. The maximum expiration date for an Email Return Label must be greater of equal to the day of the label request and not greater than 2 years in the future. Format[YYYY-MM-DD] <br>Example: 2020-01-01
     */
    expirationTimeStamp?: string;
};
export namespace PendingShipmentDetail {
    /**
     * Specifies the pending shipment type.  Must include the value: EMAIL for email return shipments. <br>Not applicable for other types of shipments<br>Example: EMAIL
     */
    export enum pendingShipmentType {
        EMAIL = 'EMAIL',
    }
}

