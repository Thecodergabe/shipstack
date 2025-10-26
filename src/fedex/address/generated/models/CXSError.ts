/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Parameter } from './Parameter';
/**
 * Indicates error alert when suspicious files, potential exploits and viruses found while scanning files , directories and user accounts. This includes code, message and parameter
 */
export type CXSError = {
    /**
     * Indicates the error code.<br>Example: STANDARDIZED.ADDRESS.NOTFOUND
     */
    code?: string;
    parameterList?: Array<Parameter>;
    /**
     * Indicates the description of API error alert message.<br>Example: Standardized address is not found.
     */
    message?: string;
};

