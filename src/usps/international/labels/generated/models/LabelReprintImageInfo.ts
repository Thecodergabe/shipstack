/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Reprint Image Info Object defines label characteristics
 */
export type LabelReprintImageInfo = {
    /**
     * The type of label image requested.
     */
    imageType?: LabelReprintImageInfo.imageType;
    /**
     * The requested label image size to generate.
     */
    labelType?: LabelReprintImageInfo.labelType;
    /**
     * Indicates if Insured Fees and Postal Charges/Fees should be
     * omitted from the label image.  If true, Insured Fees and Postal
     * Charges/Fees values will be removed.
     *
     */
    suppressPostage?: boolean;
};
export namespace LabelReprintImageInfo {
    /**
     * The type of label image requested.
     */
    export enum imageType {
        PDF = 'PDF',
        TIFF = 'TIFF',
        ZPL203DPI = 'ZPL203DPI',
        ZPL300DPI = 'ZPL300DPI',
    }
    /**
     * The requested label image size to generate.
     */
    export enum labelType {
        _4X6LABEL = '4X6LABEL',
    }
}

