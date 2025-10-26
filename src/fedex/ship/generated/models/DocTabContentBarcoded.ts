/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocTabZoneSpecification } from './DocTabZoneSpecification';
/**
 * It is a doc tab content type which is in barcoded format.
 */
export type DocTabContentBarcoded = {
    /**
     * Indicates the type of barcode symbology used on FedEx documents and labels.
     */
    symbology?: DocTabContentBarcoded.symbology;
    specification?: DocTabZoneSpecification;
};
export namespace DocTabContentBarcoded {
    /**
     * Indicates the type of barcode symbology used on FedEx documents and labels.
     */
    export enum symbology {
        CODABAR = 'CODABAR',
        CODE128 = 'CODE128',
        CODE128_WIDEBAR = 'CODE128_WIDEBAR',
        CODE128B = 'CODE128B',
        CODE128C = 'CODE128C',
        CODE39 = 'CODE39',
        CODE93 = 'CODE93',
        I2OF5 = 'I2OF5',
        MANUAL = 'MANUAL',
        PDF417 = 'PDF417',
        POSTNET = 'POSTNET',
        QR_CODE = 'QR_CODE',
        UCC128 = 'UCC128',
    }
}

