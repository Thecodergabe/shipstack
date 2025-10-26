/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UploadDocumentReferenceDetail } from './UploadDocumentReferenceDetail';
/**
 * Use this object to specify all information on how the electronic Trade document references used with the shipment.
 */
export type ETDDetail = {
    /**
     * Specifies the Post Document Upload <br> Example: POST_SHIPMENT_UPLOAD_REQUESTED
     */
    attributes?: Array<'POST_SHIPMENT_UPLOAD_REQUESTED'>;
    /**
     * Use this object to specify the details regarding already uploded document(s). This object is required if the documents are uploaded Pre-Shipment uploaded documents. It is recommended to provide values for all elements under this object.
     */
    attachedDocuments?: Array<UploadDocumentReferenceDetail>;
    /**
     * Indicates the types of shipping documents requested by the shipper.<br>Example: CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE etc.
     */
    requestedDocumentTypes?: Array<'CERTIFICATE_OF_ORIGIN' | 'COMMERCIAL_INVOICE' | 'CUSTOM_PACKAGE_DOCUMENT' | 'CUSTOM_SHIPMENT_DOCUMENT' | 'CUSTOMER_SPECIFIED_LABELS' | 'EXPORT_DECLARATION' | 'GENERAL_AGENCY_AGREEMENT' | 'LABEL' | 'USMCA_CERTIFICATION_OF_ORIGIN' | 'OP_900' | 'PENDING_SHIPMENT_EMAIL_NOTIFICATION' | 'PRO_FORMA_INVOICE' | 'RETURN_INSTRUCTIONS' | 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN'>;
};

