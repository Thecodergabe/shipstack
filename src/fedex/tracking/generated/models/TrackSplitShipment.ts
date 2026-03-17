/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Holds the information about split shipments.
 */
export type TrackSplitShipment = {
    /**
     * Field which holds the number of pieces in the part.<br> Example: 10
     */
    pieceCount?: string;
    /**
     * Field which holds human-readable description of the status. <br> Example: status
     */
    statusDescription?: string;
    /**
     * Field which holds the date and time the status began.<br>Example: '2019-05-07T08:00:07'
     */
    timestamp?: string;
    /**
     * Field which holds the status code. <br> Example: statusCode
     */
    statusCode?: string;
};

