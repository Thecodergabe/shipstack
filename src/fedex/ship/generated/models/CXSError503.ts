/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Parameter } from './Parameter';
/**
 * Indicates error alert when suspicious files, potential exploits and viruses found while scanning files , directories and user accounts. This includes code, message and parameter
 */
export type CXSError503 = {
    /**
     * Indicates the error code.<br>Example: SERVICE.UNAVAILABLE.ERROR
     */
    code?: string;
    /**
     * Specifies list of parameters.
     */
    parameterList?: Array<Parameter>;
    /**
     * Indicates the description of API error alert message.<br>Example: The service is currently unavailable and we are working to resolve the issue. We apologize for any inconvenience. Please check back at a later time.
     */
    message?: any;
};

