/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { RateReplyDetail } from './RateReplyDetail';
/**
 * This is the response object for a rate quote request.
 */
export type RateOutputVO = {
    /**
     * This object will hold the rate and shipment data returned for a request.
     */
    rateReplyDetails?: Array<RateReplyDetail>;
    /**
     * The date on which the rate is quoted.<br> Example: 2019-09-18
     */
    quoteDate?: string;
    /**
     * Specifies the encoded form of the rate. <br> Example: false
     */
    isEncoded?: boolean;
    /**
     * The alert code, alert type, and alert message obtained when a rate quote is requested.
     */
    alerts?: Array<Alert>;
};

