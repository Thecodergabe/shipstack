/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Parameter } from './Parameter';
/**
 * Indicates error alert when suspicious files, potential exploits and viruses found while scanning files , directories and user accounts. This includes code, message and parameter
 */
export type CXSError_2 = {
    /**
     * Indicates the error code.<br>Example: TRACKING.TRACKINGNUMBER.EMPTY
     */
    code?: string;
    parameterList?: Array<Parameter>;
    /**
     * Indicates the description of API error alert message.<br>Example: Please provide tracking number.
     */
    message?: string;
};

