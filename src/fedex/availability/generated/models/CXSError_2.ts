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
     * Indicates the error code.<br>Example: PACKAGE.NULLOREMPTY.REQUIRED,LOGIN.REAUTHENTICATE.ERROR,UNAUTHORIZED.USAGE,NOT.FOUND.ERROR,INTERNAL.SERVER.ERROR
     */
    code?: string;
    parameterList?: Array<Parameter>;
    /**
     * Indicates the description of API error alert message.<br>Example: We are unable to process this request. Please try again later or contact FedEx Customer Service.
     */
    message?: string;
};

