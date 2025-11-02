/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MailingDate } from './MailingDate';
/**
 * Parameters that are required to track an item.
 */
export type TrackingRequestBody = {
    /**
     * Tracking ID, must be alphanumeric characters, string length is between 4 and 34.
     */
    trackingNumber: string;
    mailingDate?: MailingDate;
    /**
     * Destination 5-digit ZIP Code&#8482;
     */
    destinationZIPCode?: string;
};

