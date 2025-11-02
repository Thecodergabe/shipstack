/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RateListQuery } from './RateListQuery';
import type { TotalRatesExtraServices } from './TotalRatesExtraServices';
/**
 * Search parameters for base rate and extra service rate.
 */
export type TotalRatesQuery = (RateListQuery & {
    /**
     * The value of the item. Required for Insurance, Registered Mail, and Collect on Delivery.
     */
    itemValue?: number;
    extraServices?: TotalRatesExtraServices;
});

