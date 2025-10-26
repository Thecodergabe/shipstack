/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates details of hazardous commodity option detail.
 */
export type HazardousCommodityOptionDetail01 = {
    /**
     * Indicates the label text option.
     */
    labelTextOption?: HazardousCommodityOptionDetail01.labelTextOption;
    /**
     * 'DG Data Upload Mode:- Optional.,DG Full Validation Mode:- Optional,Text used in labeling the commodity under control of the LabelTextOption field<br>Example:Customer Supplied Label Text'
     *
     *
     */
    customerSuppliedLabelText?: string;
};
export namespace HazardousCommodityOptionDetail01 {
    /**
     * Indicates the label text option.
     */
    export enum labelTextOption {
        APPEND = 'APPEND',
        OVERRIDE = 'OVERRIDE',
        STANDARD = 'STANDARD',
    }
}

