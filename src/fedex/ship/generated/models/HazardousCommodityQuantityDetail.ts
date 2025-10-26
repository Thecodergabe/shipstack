/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the Hazardous commodity quantity details.
 */
export type HazardousCommodityQuantityDetail = {
    /**
     * Specifies which measure of quantity is to be validated.<br>Example:GROSS
     */
    quantityType: HazardousCommodityQuantityDetail.quantityType;
    /**
     * Indicate the amount of the commodity in alternate units.<br>Example: 24.56
     */
    amount: number;
    /**
     * Indicate the unit of measure.<br>Example: KG
     */
    units?: string;
};
export namespace HazardousCommodityQuantityDetail {
    /**
     * Specifies which measure of quantity is to be validated.<br>Example:GROSS
     */
    export enum quantityType {
        GROSS = 'GROSS',
        NET = 'NET',
    }
}

