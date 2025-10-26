/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentFormatOptionsRequested } from './DocumentFormatOptionsRequested';
import type { ShippingDocumentDispositionDetail } from './ShippingDocumentDispositionDetail';
/**
 * Specify the shipping document format.
 */
export type ShippingDocumentFormat = {
    /**
     * For those shipping document types which have both a "form" and "instructions" component (e.g General Agency Agreement), this field indicates whether to provide the instructions.<br>Example: true
     */
    provideInstructions?: boolean;
    optionsRequested?: DocumentFormatOptionsRequested;
    /**
     * Specifies the label stock type.  Lists the correct type of paper for the Freight address label option.Specify valid value PAPER_4_PER_PAGE_PORTRAIT.<br>Example:PAPER_TYPE
     */
    stockType?: ShippingDocumentFormat.stockType;
    /**
     * Specifies how to create, organize, and return the document
     *
     *
     */
    dispositions?: Array<ShippingDocumentDispositionDetail>;
    /**
     * These are locale details.<br>example: 'en_US'<br><a onclick='loadDocReference("locales")'>click here to see Locales</a><br>Note: If the locale is left blank or an invalid locale is entered, an error message is returned in response.
     */
    locale?: string;
    /**
     * Specify the image format used for a shipping document.<br>Example:PDF
     */
    docType?: ShippingDocumentFormat.docType;
};
export namespace ShippingDocumentFormat {
    /**
     * Specifies the label stock type.  Lists the correct type of paper for the Freight address label option.Specify valid value PAPER_4_PER_PAGE_PORTRAIT.<br>Example:PAPER_TYPE
     */
    export enum stockType {
        PAPER_LETTER = 'PAPER_LETTER',
    }
    /**
     * Specify the image format used for a shipping document.<br>Example:PDF
     */
    export enum docType {
        PDF = 'PDF',
    }
}

