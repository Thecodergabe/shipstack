/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { TransitTime } from './TransitTime';
/**
 * This is the output response details for the services and transit time request.
 */
export type TransitTimeOutput = {
    /**
     * These are alert details received with the response.
     */
    alerts?: Array<Alert>;
    /**
     * These are services and transit times details received in the response.
     */
    transitTimes?: Array<TransitTime>;
    /**
     * This field specifies the encoded flag.
     */
    encoded?: boolean;
};

