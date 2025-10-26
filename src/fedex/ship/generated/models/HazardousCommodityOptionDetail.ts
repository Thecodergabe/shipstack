/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Provides details of Hazardous Commodity Option Detail
 */
export type HazardousCommodityOptionDetail = {
    /**
     * Provides the label text option
     */
    labelTextOption?: HazardousCommodityOptionDetail.labelTextOption;
    /**
     * DG Data Upload Mode:- Optional<br>DG Full Validation Mode: Optional<br>Text used in labeling the commodity under control of the LabelTextOption field
     */
    customerSuppliedLabelText?: string;
};
export namespace HazardousCommodityOptionDetail {
    /**
     * Provides the label text option
     */
    export enum labelTextOption {
        APPEND = 'APPEND',
        OVERRIDE = 'OVERRIDE',
        STANDARD = 'STANDARD',
    }
}

