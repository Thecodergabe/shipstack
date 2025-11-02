/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FailureResponse } from './FailureResponse';
import type { SuccessResponse } from './SuccessResponse';
/**
 * An array of detailed tracking event information for the requested tracking number in reverse chronological order.
 */
export type MultiStatusResponse = Array<(FailureResponse | SuccessResponse)>;
