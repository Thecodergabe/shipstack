/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
/**
 * These are shipping document/label specific information.
 */
export type LabelResponseVO = {
    /**
     * This is the content key of the document/label.<br>Example: content key
     */
    contentKey?: string;
    /**
     * These are the number of copies to print for the specific document type.<br>Example: 10
     */
    copiesToPrint?: number;
    /**
     * Indicates the type of document/label.
     */
    contentType?: LabelResponseVO.contentType;
    /**
     * This is the tracking number of the package. <br>Example: 49XXX0000XXX20032835<br>
     */
    trackingNumber?: string;
    /**
     * This is the document type.<br>Example: PDF
     */
    docType?: string;
    /**
     * These are alerts received in the label response.
     */
    alerts?: Array<Alert>;
    /**
     * Specifies if the document is encoded.<br>Example: encoded label
     */
    encodedLabel?: string;
    /**
     * The URL of the shipping document/label<br>Example: https://.../document/v2/document/retrieve/SH,794816968200_Merge/isLabel=true&autoPrint=false<br><i>Note: The URL once created will be active for 24 hours.</i>
     */
    url?: string;
};
export namespace LabelResponseVO {
    /**
     * Indicates the type of document/label.
     */
    export enum contentType {
        LABEL = 'LABEL',
        BILL_OF_LADING = 'BILL_OF_LADING',
        GAA_FORM = 'GAA_FORM',
        HAZMAT_LABEL = 'HAZMAT_LABEL',
        END_OF_DAY_HAZMAT_REPORT = 'END_OF_DAY_HAZMAT_REPORT',
        MANIFEST_REPORT = 'MANIFEST_REPORT',
        MULTIWEIGHT_REPORT = 'MULTIWEIGHT_REPORT',
        MERGED_LABEL_DOCUMENTS = 'MERGED_LABEL_DOCUMENTS',
        AUXILIARY = 'AUXILIARY',
        RETURN_INSTRUCTIONS = 'RETURN_INSTRUCTIONS',
        ACCEPTANCE_LABEL = 'ACCEPTANCE_LABEL',
        COMMERCIAL_INVOICE = 'COMMERCIAL_INVOICE',
        PROFORMA_INVOICE = 'PROFORMA_INVOICE',
        USMCA_CERTIFICATION_OF_ORIGIN = 'USMCA_CERTIFICATION_OF_ORIGIN',
        CERTIFICATE_OF_ORIGIN = 'CERTIFICATE_OF_ORIGIN',
        MERGED_LABELS_ONLY = 'MERGED_LABELS_ONLY',
        USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN = 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN',
    }
}

