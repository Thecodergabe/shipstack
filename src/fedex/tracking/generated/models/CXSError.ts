/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Parameter } from './Parameter';
/**
 * Contains error details.
 */
export type CXSError = {
    /**
     * Error Code. <br> Example: TRACKING.TRACKINGNUMBER.EMPTY
     */
    code?: string;
    /**
     * List of parameters.
     */
    parameterList?: Array<Parameter>;
    /**
     * Error Message. <br>Example: Please provide tracking number.
     */
    message?: string;
};

