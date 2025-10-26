/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Upload document details provided by the initator of the shipment.
 */
export type UploadDocumentReferenceDetail = {
    /**
     * These are the type of document specified in the PendingShipment request.
     */
    documentType?: UploadDocumentReferenceDetail.documentType;
    /**
     * Customer Reference
     */
    customerReference?: string;
    /**
     * Indicate description of the shipping documents produced for the shipper by FedEx (see ShippingDocumentSpecification) which should be copied back to the shipper in the shipment result data.
     */
    description?: string;
    /**
     * Specify the document ID for the uploaded document.
     */
    documentId?: string;
};
export namespace UploadDocumentReferenceDetail {
    /**
     * These are the type of document specified in the PendingShipment request.
     */
    export enum documentType {
        CERTIFICATE_OF_ORIGIN = 'CERTIFICATE_OF_ORIGIN',
        COMMERCIAL_INVOICE = 'COMMERCIAL_INVOICE',
        ETD_LABEL = 'ETD_LABEL',
        NAFTA_CERTIFICATE_OF_ORIGIN = 'NAFTA_CERTIFICATE_OF_ORIGIN',
        NET_RATE_SHEET = 'NET_RATE_SHEET',
        OTHER = 'OTHER',
        PRO_FORMA_INVOICE = 'PRO_FORMA_INVOICE',
    }
}

