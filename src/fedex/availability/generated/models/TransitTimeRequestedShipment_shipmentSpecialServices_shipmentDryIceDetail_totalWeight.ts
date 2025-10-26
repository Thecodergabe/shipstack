/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are the weight details.
 */
export type TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail_totalWeight = {
    /**
     * Specify the unit of measurement used to  weigh the package. For Dry Ice the unit of measure is KG.
     */
    units?: TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail_totalWeight.units;
    /**
     * Specify the value of the weight of the package.<br> Example: 68.25
     */
    value?: number;
};
export namespace TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail_totalWeight {
    /**
     * Specify the unit of measurement used to  weigh the package. For Dry Ice the unit of measure is KG.
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

