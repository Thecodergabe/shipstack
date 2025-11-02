/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DisputeCreateRequest = {
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
    CRID: string;
    /**
     * Reason for the dispute.
     */
    reason: DisputeCreateRequest.reason;
    /**
     * Free text describing the dispute.
     */
    description: string;
    /**
     * Name of the individual or entity submitting the dispute.
     */
    name: string;
    /**
     * Number of times a dispute has been opened.
     */
    disputeCount: string;
};
export namespace DisputeCreateRequest {
    /**
     * Reason for the dispute.
     */
    export enum reason {
        INCORRECT_ASSESSED_WEIGHT = 'INCORRECT_ASSESSED_WEIGHT',
        INCORRECT_ASSESSED_ZONE = 'INCORRECT_ASSESSED_ZONE',
        INCORRECT_ASSESSED_PACKAGING = 'INCORRECT_ASSESSED_PACKAGING',
        INCORRECT_ASSESSED_DIMENSIONS = 'INCORRECT_ASSESSED_DIMENSIONS',
        INCORRECT_ASSESSED_DUPLICATE = 'INCORRECT_ASSESSED_DUPLICATE',
        UNDOCUMENTED = 'UNDOCUMENTED',
        NONCOMPLIANT_DIMENSIONS = 'NONCOMPLIANT_DIMENSIONS',
        RETURN_LABEL = 'RETURN_LABEL',
        MISSHIPPED = 'MISSHIPPED',
        OTHER = 'OTHER',
    }
}

