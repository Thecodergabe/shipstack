/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InternationalRateListQuery } from './InternationalRateListQuery';
/**
 * Search parameters for base rate and extra service rate.
 */
export type TotalRatesQuery = (InternationalRateListQuery & {
    /**
     * The value of the item. Required for Insurance and Registered Mail.
     */
    itemValue?: number;
    /**
     * A list of Extra Services to be included in the total rates search. If no extra services are specified all applicable extra services for the mail class will be returned.
     */
    extraServices?: Array<370 | 813 | 820 | 826 | 857 | 930 | 931 | 955>;
});

