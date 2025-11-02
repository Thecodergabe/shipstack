/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DisputeValidationRequest = {
    /**
     * EPS Transaction ID for the Census charge.
     */
    EPSTransactionID: string;
    /**
     * IMpb barcode for the package.
     */
    trackingID: string;
    /**
     * Customer Registration ID (CRID) of the mail owner.
     */
    CRID?: string;
};

