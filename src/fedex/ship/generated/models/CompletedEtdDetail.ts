/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UploadDocumentReferenceDetail } from './UploadDocumentReferenceDetail';
/**
 * These are completed ETD details when ELECTRONIC_TRADE_DOCUMENTS Special service type is requested
 */
export type CompletedEtdDetail = {
    /**
     * Returns the folder id where the documents is uploaded <br> Example: "0b0493e580dc1a1b"
     */
    folderId?: string;
    /**
     * Returns the type of the document that is being uploaded <br> Example: "COMMERCIAL_INVOICE"
     */
    type?: string;
    /**
     * Specify the document upload reference details.
     */
    uploadDocumentReferenceDetails?: Array<UploadDocumentReferenceDetail>;
};

