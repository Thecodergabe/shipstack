/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentGenerationDetail } from './DocumentGenerationDetail';
/**
 * Indicates the document requirements detail.
 */
export type DocumentRequirementsDetail = {
    /**
     * Indicates the required documents information.<br>Example: ["COMMERCIAL_OR_PRO_FORMA_INVOICE","AIR_WAYBILL"]
     */
    requiredDocuments?: Array<string>;
    /**
     * Indicates the prohibited Documents info.<br>Example: ["CERTIFICATE_OF_ORIGIN "]
     */
    prohibitedDocuments?: Array<string>;
    /**
     * Specifies the generation details.
     */
    generationDetails?: Array<DocumentGenerationDetail>;
};

