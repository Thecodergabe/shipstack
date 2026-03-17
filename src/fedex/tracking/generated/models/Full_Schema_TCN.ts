/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TCNInfo } from './TCNInfo';
/**
 * The request elements for Tracking by TCN request type.
 */
export type Full_Schema_TCN = {
    /**
     * The information associated with the transportation control number.<br>Only 1 TCN is supported per request.
     */
    tcnInfo: TCNInfo;
    /**
     * Indicates if detailed scans are requested or not. <br/>Valid values are True, or False.
     */
    includeDetailedScans?: boolean;
};

