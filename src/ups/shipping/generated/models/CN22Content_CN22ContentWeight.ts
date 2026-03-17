/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CN22ContentWeight_UnitOfMeasurement } from './CN22ContentWeight_UnitOfMeasurement';
/**
 * Container for CN22 content weight.
 */
export type CN22Content_CN22ContentWeight = {
    UnitOfMeasurement: CN22ContentWeight_UnitOfMeasurement;
    /**
     * Total weight of the content. Pounds and Ounces are allowed up to 2 decimals.  Required if the CN22 form container is present.
     */
    Weight: string;
};

