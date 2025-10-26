/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify weight of dry ice used in packaging.
 */
export type TransitTimeRequestedPackageLineItem_packageSpecialServices_dryIceWeight = {
    /**
     * Specify the unit of measurement used to weigh the dry ice used in packaging.
     */
    units?: TransitTimeRequestedPackageLineItem_packageSpecialServices_dryIceWeight.units;
    /**
     * Specify the value of weight of dry ice used in packaging. <br> Example: 10.0
     */
    value?: number;
};
export namespace TransitTimeRequestedPackageLineItem_packageSpecialServices_dryIceWeight {
    /**
     * Specify the unit of measurement used to weigh the dry ice used in packaging.
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

