/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorMessage } from './ErrorMessage';
/**
 * Error response
 */
export type FailureResponse = (ErrorMessage & {
    /**
     * Error status code.
     */
    statusCode?: string;
    /**
     * The human-readable representation of the item, commonly known as a tracking number.
     */
    trackingNumber?: string;
});

