/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the document upload reference details.
 */
export type UploadDocumentReferenceDetail_1 = {
    /**
     * This is the uploaded document type.
     */
    documentType?: UploadDocumentReferenceDetail_1.documentType;
    /**
     * Specify the reference for the uploaded document.<br>Example: Reference
     */
    documentReference?: string;
    /**
     * This is the document description of the attached document.<br>Example: PRO FORMA INVOICE
     */
    description?: string;
    /**
     * This is the uploaded document ID value.<br>Example: 090927d680038c61
     */
    documentId?: string;
};
export namespace UploadDocumentReferenceDetail_1 {
    /**
     * This is the uploaded document type.
     */
    export enum documentType {
        CERTIFICATE_OF_ORIGIN = 'CERTIFICATE_OF_ORIGIN',
        COMMERCIAL_INVOICE = 'COMMERCIAL_INVOICE',
        ETD_LABEL = 'ETD_LABEL',
        USMCA_CERTIFICATION_OF_ORIGIN = 'USMCA_CERTIFICATION_OF_ORIGIN',
        NET_RATE_SHEET = 'NET_RATE_SHEET',
        OTHER = 'OTHER',
        PRO_FORMA_INVOICE = 'PRO_FORMA_INVOICE',
        USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN = 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN',
    }
}

