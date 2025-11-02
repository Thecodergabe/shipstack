/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseRateDetails } from './BaseRateDetails';
/**
 * The prices that match the search criteria.
 */
export type BaseRateOption = {
    /**
     * The total price, including the rate, fees and pound postage.
     */
    totalBasePrice?: number;
    rates?: Array<BaseRateDetails>;
};

