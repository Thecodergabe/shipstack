/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is the total dry ice weight in all the packages of the shipment.
 */
export type Weight_1 = {
    /**
     * For the Dry Ice weight in the shipment the unit of measure must be KG.
     */
    units?: Weight_1.units;
    /**
     * Weight Value.<br> Example: 68.25<br><a href='https://developer.fedex.com/api/en-us/guides/api-reference.html#packagetypes' target='_blank'>Click here to see Weight Values</a>.
     */
    value?: number;
};
export namespace Weight_1 {
    /**
     * For the Dry Ice weight in the shipment the unit of measure must be KG.
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

