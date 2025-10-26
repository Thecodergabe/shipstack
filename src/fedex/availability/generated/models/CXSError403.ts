/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Parameter } from './Parameter';
/**
 * Indicates error alert when suspicious files, potential exploits and viruses found while scanning files , directories and user accounts. This includes code, message and parameter
 */
export type CXSError403 = {
    /**
     * Indicates the error code.<br>Example: FORBIDDEN.ERROR
     */
    code?: string;
    parameterList?: Array<Parameter>;
    /**
     * Indicates the description of API error alert message.<br>Example: We could not authorize your credentials. Please check your permissions and try again
     */
    message?: any;
};

