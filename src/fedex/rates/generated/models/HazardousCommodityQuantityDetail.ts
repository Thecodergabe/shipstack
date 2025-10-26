/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies Hazardous Commodity Quantity Detail.
 */
export type HazardousCommodityQuantityDetail = {
    /**
     * Specifies type of a quantity unit.
     */
    quantityType?: HazardousCommodityQuantityDetail.quantityType;
    /**
     * Specifies amount details.
     */
    amount?: number;
    /**
     * Specify unit details.
     */
    units?: string;
};
export namespace HazardousCommodityQuantityDetail {
    /**
     * Specifies type of a quantity unit.
     */
    export enum quantityType {
        GROSS = 'GROSS',
        NET = 'NET',
    }
}

