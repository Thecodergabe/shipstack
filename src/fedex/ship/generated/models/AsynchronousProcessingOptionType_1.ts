/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the processing option for submitting a Single shot MPS shipment. The value indicates if the MPS to be processed synchronously or asynchronously.<br>Note: <ul><li>Default value is SYNCHRONOUS_ONLY.</li><li>Value or element is not needed when groupPackageCount is less than or equal to 40.</li><li>Must provide element with value ALLOW_ASYNCHRONOUS when groupPackageCount is greater than 40.</li></ul> <br>Example:ALLOW_ASYNCHRONUS
 */
export enum AsynchronousProcessingOptionType_1 {
    SYNCHRONOUS_ONLY = 'SYNCHRONOUS_ONLY',
    ALLOW_ASYNCHRONOUS = 'ALLOW_ASYNCHRONOUS',
}
