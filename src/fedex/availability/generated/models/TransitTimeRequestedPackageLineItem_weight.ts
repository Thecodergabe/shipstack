/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Weight of the packages or shipment
 */
export type TransitTimeRequestedPackageLineItem_weight = {
    /**
     * Specify the unit of measurement used to weigh. <br> Example: LB
     */
    units: TransitTimeRequestedPackageLineItem_weight.units;
    /**
     * Weight Value.<br> Example: 68.25<br><a href='https://developer.fedex.com/api/en-us/guides/api-reference.html#packagetypes' target='_blank'>Click here to see Weight Values</a>
     */
    value: number;
};
export namespace TransitTimeRequestedPackageLineItem_weight {
    /**
     * Specify the unit of measurement used to weigh. <br> Example: LB
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

