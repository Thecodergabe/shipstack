/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the document generation detail information.
 */
export type DocumentGenerationDetail = {
    /**
     * Indicates the letterhead requirement type.<br>Example: OPTIONAL
     */
    letterhead?: string;
    /**
     * Indicates electronic signature requirement type.<br>Example:  OPTIONAL
     */
    electronicSignature?: string;
    /**
     * It is a non-Negative Integer.<br>Example: 3
     */
    minimumCopiesRequired?: number;
    /**
     * It is an Enterprise Document Type.<br>Example: COMMERCIAL_INVOICE
     */
    type?: string;
};

