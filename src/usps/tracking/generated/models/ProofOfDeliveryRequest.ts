/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProofOfDeliveryRecipient } from './ProofOfDeliveryRecipient';
export type ProofOfDeliveryRequest = {
    /**
     * The unique tracking identifier provided in the Tracking Detail API response.
     */
    uniqueTrackingID: string;
    /**
     * The mailing date provided in the Tracking Detail API response.
     */
    mailingDate?: string;
    /**
     * The requested notification: Proof of Delivery (POD) or Return Receipt Electronic (RRE).
     */
    letterType?: ProofOfDeliveryRequest.letterType;
    /**
     * The contact information for up to 3 recipients.
     */
    recipients: Array<ProofOfDeliveryRecipient>;
    /**
     * Unique 10-byte numeric value that’s associated to each user. A Customer Registration Identification number (CRID) is a USPS-generated numeric code that uniquely identifies a business at a location.
     */
    CRID?: string;
};
export namespace ProofOfDeliveryRequest {
    /**
     * The requested notification: Proof of Delivery (POD) or Return Receipt Electronic (RRE).
     */
    export enum letterType {
        PROOF_OF_DELIVERY = 'PROOF_OF_DELIVERY',
        RETURN_RECEIPT_ELECTRONIC = 'RETURN_RECEIPT_ELECTRONIC',
    }
}

