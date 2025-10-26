/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the Hazardous Commodity Quantity Detail.
 */
export type HazardousCommodityQuantityDetail002 = {
    /**
     * Specifies which measure of quantity is to be validated.
     */
    quantityType: HazardousCommodityQuantityDetail002.quantityType;
    /**
     * Number of units of the type below.<br>Example: 34.56
     */
    amount: number;
    /**
     * Specifies the units.<br>Example: KG
     */
    units?: string;
};
export namespace HazardousCommodityQuantityDetail002 {
    /**
     * Specifies which measure of quantity is to be validated.
     */
    export enum quantityType {
        GROSS = 'GROSS',
        NET = 'NET',
    }
}

