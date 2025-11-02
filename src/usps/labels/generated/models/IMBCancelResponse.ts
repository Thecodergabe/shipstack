/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Cancel Intelligent Mail Barcode (IMB) Response
 */
export type IMBCancelResponse = {
    /**
     * The Human-readable form of the Intelligent Mail Barcode (IMB) that has been canceled or for which a refund request has been submitted.
     */
    imb?: string;
    /**
     * * CANCELED indicates that the IMB has been successfully canceled.
     * * DISPUTED indicates that a refund request has been submitted.
     *
     */
    status?: IMBCancelResponse.status;
    /**
     * The Id of the submitted refund request.
     *
     * Note:
     * - The disputeId field may not be returned for IMBs created prior to 8/27/2025.
     * - If a refund request is successfully submitted, a disputeId will be returned that can be used to then track the status of the refund request. The system will only give one unique disputeId per customer reference ID (CRID) per day. Duplicate submissions of the same label, for the same CRID, on the same day, will be rejected.
     * - In some cases, a disputeId may be generated before the IMB is processed for payment. If this occurs, please resubmit the IMB for cancellation the following day for a new disputeId.
     *
     */
    disputeId?: string;
};
export namespace IMBCancelResponse {
    /**
     * * CANCELED indicates that the IMB has been successfully canceled.
     * * DISPUTED indicates that a refund request has been submitted.
     *
     */
    export enum status {
        CANCELED = 'CANCELED',
        DISPUTED = 'DISPUTED',
    }
}

