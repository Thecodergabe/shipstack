/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CancelResponse = {
    /**
     * The tracking number associated with the label that has been canceled or for which a refund request has been submitted.
     */
    trackingNumber?: string;
    /**
     * * CANCELED indicates that the label has been successfully canceled.
     * * DISPUTED indicates that a refund request has been submitted.
     *
     */
    status?: CancelResponse.status;
    /**
     * The Id of the submitted refund request.
     */
    disputeId?: string;
};
export namespace CancelResponse {
    /**
     * * CANCELED indicates that the label has been successfully canceled.
     * * DISPUTED indicates that a refund request has been submitted.
     *
     */
    export enum status {
        CANCELED = 'CANCELED',
        DISPUTED = 'DISPUTED',
    }
}

