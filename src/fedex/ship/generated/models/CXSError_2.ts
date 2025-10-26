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
     * Indicates the error code.<br>Example: SHIPMENT.USER.UNAUTHORIZED
     */
    code?: string;
    parameterList?: Array<Parameter>;
    /**
     * Indicates the description of API error alert message.<br>Example: Requested user is not authorized to perform the operation.
     */
    message?: string;
};

