/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocTabContentBarcoded } from './DocTabContentBarcoded';
import type { DocTabContentZone001 } from './DocTabContentZone001';
/**
 * Specifies details of doc tab content.It is only applicable only with imageType as ZPLII.
 */
export type DocTabContent = {
    /**
     * Indicates the content type of the doc tab.
     */
    docTabContentType?: DocTabContent.docTabContentType;
    zone001?: DocTabContentZone001;
    barcoded?: DocTabContentBarcoded;
};
export namespace DocTabContent {
    /**
     * Indicates the content type of the doc tab.
     */
    export enum docTabContentType {
        BARCODED = 'BARCODED',
        CUSTOM = 'CUSTOM',
        MINIMUM = 'MINIMUM',
        STANDARD = 'STANDARD',
        ZONE001 = 'ZONE001',
    }
}

