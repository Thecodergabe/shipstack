/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotifyEventType } from './NotifyEventType';
import type { Recipient } from './Recipient';
export type TrackingNotificationRequest = {
    /**
     * The unique tracking identifier provided in the Tracking Detail API response.
     */
    uniqueTrackingID: string;
    /**
     * The mailing date provided in the Tracking Detail API response.
     */
    mailingDate?: string;
    /**
     * The desired tracking notification(s).
     */
    notifyEventTypes: Array<NotifyEventType>;
    /**
     * The contact information for up to 3 recipients.
     */
    recipients: Array<Recipient>;
};

