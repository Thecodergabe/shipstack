/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Parameter } from './Parameter';
/**
 * Indicates error alert when suspicious files, potential exploits and viruses found while scanning files , directories and user accounts. This includes code, message and parameter
 */
export type CXSError404 = {
    /**
     * Indicates the error code.<br>Example: NOT.FOUND.ERROR
     */
    code?: string;
    /**
     * Specifies list of parameters.
     */
    parameterList?: Array<Parameter>;
    /**
     * Indicates the description of API error alert message.<br>Example: The resource you requested is no longer available. Please modify your request and try again.
     */
    message?: any;
};

