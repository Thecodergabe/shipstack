/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the document upload reference details.
 */
export type UploadDocumentReferenceDetail = {
    /**
     * Returns the type of document (if any) specified in the ship shipment request.<br>Example: PRO_FORMA_INVOICE
     */
    documentType?: UploadDocumentReferenceDetail.documentType;
    /**
     * Specify the reference for the uploaded document.This is for the customer to reference their uploaded docs when they retrieve them. Could be anything, order number, po number, whatever the customer used to tie the document to something they would use.<br>Note: Ensure to supply document references in case of  Pre-Shipment document upload.</br><br>Example: Reference
     */
    documentReference?: string;
    /**
     * Specify additional information about the uploaded document for better understanding.<br>Example: Certificate of Origin is uploaded for country of manufacturing verification.
     */
    description?: string;
    /**
     * This is the uploaded document ID value.<br>Example: 090927d680038c61
     */
    documentId?: string;
};
export namespace UploadDocumentReferenceDetail {
    /**
     * Returns the type of document (if any) specified in the ship shipment request.<br>Example: PRO_FORMA_INVOICE
     */
    export enum documentType {
        CERTIFICATE_OF_ORIGIN = 'CERTIFICATE_OF_ORIGIN',
        NET_RATE_SHEET = 'NET_RATE_SHEET',
        COMMERCIAL_INVOICE = 'COMMERCIAL_INVOICE',
        ETD_LABEL = 'ETD_LABEL',
        USMCA_CERTIFICATION_OF_ORIGIN = 'USMCA_CERTIFICATION_OF_ORIGIN',
        OTHER = 'OTHER',
        PRO_FORMA_INVOICE = 'PRO_FORMA_INVOICE',
        USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN = 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN',
    }
}

