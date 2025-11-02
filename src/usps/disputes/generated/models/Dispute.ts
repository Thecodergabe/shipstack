/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MgmtResponse } from './MgmtResponse';
export type Dispute = {
    /**
     * Unique identifier for the dispute.
     */
    disputeID?: string;
    /**
     * EPS Transaction ID for the Census charge associated with the dispute.
     */
    EPSTransactionID?: string;
    /**
     * IMpb barcode for the package related to the dispute.
     */
    trackingID?: string;
    /**
     * Customer Registration ID (CRID) of the mail owner.
     */
    CRID?: string;
    /**
     * Disputed amount.
     */
    amount?: number;
    /**
     * Reason for submitted dispute.
     */
    reason?: string;
    /**
     * Additional description or details about the dispute.
     */
    description?: string;
    /**
     * Name of the individual or entity that submitted the dispute.
     */
    name?: string;
    /**
     * Status of the dispute.
     */
    status?: Dispute.status;
    /**
     * Date and time when the dispute was submitted in ISO 8601 format with UTC timezone.
     */
    submissionDate?: string;
    /**
     * Indicates if the dispute can be created. 'Y' for yes, 'N' for no.
     */
    disputeValid?: Dispute.disputeValid;
    /**
     * Payment validation response details, if available.
     */
    paymentResponse?: Record<string, any>;
    /**
     * Account management response details, if available.
     */
    AcctMgmtResponse?: MgmtResponse;
};
export namespace Dispute {
    /**
     * Status of the dispute.
     */
    export enum status {
        NEW = 'NEW',
        APPROVED = 'APPROVED',
        REJECTED = 'REJECTED',
    }
    /**
     * Indicates if the dispute can be created. 'Y' for yes, 'N' for no.
     */
    export enum disputeValid {
        Y = 'Y',
        N = 'N',
    }
}

