/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeOutput } from './TransitTimeOutput';
/**
 * Gives the transit time details of the shipment based on the request provided.
 */
export type TransitTimeOutputVO = {
    /**
     * The transaction ID is a special set of numbers that defines each transaction.<br>Example: 624deea6-b709-470c-8c39-4b5511281492
     */
    transactionId?: string;
    /**
     * This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply. <br> Example: AnyCo_order123456789
     */
    customerTransactionId?: string;
    /**
     * This is the output response details for the services and transit time request.
     */
    output?: TransitTimeOutput;
};

