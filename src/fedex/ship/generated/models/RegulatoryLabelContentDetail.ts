/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RegulatoryLabelContentDetail = {
    /**
     * Specify the regulatory content preference to be displayed on the label.
     */
    generationOptions?: RegulatoryLabelContentDetail.generationOptions;
    /**
     * Specify the type of regulatory content to be added on the label.
     */
    type?: RegulatoryLabelContentDetail.type;
};
export namespace RegulatoryLabelContentDetail {
    /**
     * Specify the regulatory content preference to be displayed on the label.
     */
    export enum generationOptions {
        CONTENT_ON_SHIPPING_LABEL_PREFERRED = 'CONTENT_ON_SHIPPING_LABEL_PREFERRED',
        CONTENT_ON_SUPPLEMENTAL_LABEL_ONLY = 'CONTENT_ON_SUPPLEMENTAL_LABEL_ONLY',
        CONTENT_ON_SHIPPING_LABEL_ONLY = 'CONTENT_ON_SHIPPING_LABEL_ONLY',
    }
    /**
     * Specify the type of regulatory content to be added on the label.
     */
    export enum type {
        ALCOHOL_SHIPMENT_LABEL = 'ALCOHOL_SHIPMENT_LABEL',
    }
}

