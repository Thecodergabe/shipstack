/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReturnShippingDocumentFormat } from './ReturnShippingDocumentFormat';
/**
 * These are return instruction details which will be returned in the transaction to be printed on Return Label.
 */
export type ReturnInstructionsDetail = {
    /**
     * Specify additional information (text) to be inserted into the return document.<br>Example: This is additional text printed on Return Label
     */
    customText?: string;
    documentFormat?: ReturnShippingDocumentFormat;
};

