/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Customer-provided specifications for handling individual commodities.
 */
export type HazardousCommodityOptionDetail = {
    /**
     * Specifies how the customer wishes the label text to be handled for this commodity in this package.
     */
    labelTextOption?: HazardousCommodityOptionDetail.labelTextOption;
    /**
     * Text used in labeling the commodity under control of the labelTextOption field.
     */
    customerSuppliedLabelText?: string;
};
export namespace HazardousCommodityOptionDetail {
    /**
     * Specifies how the customer wishes the label text to be handled for this commodity in this package.
     */
    export enum labelTextOption {
        APPEND = 'APPEND',
        OVERRIDE = 'OVERRIDE',
        STANDARD = 'STANDARD',
    }
}

