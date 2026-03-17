/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackingNotification } from './TrackingNotification';
/**
 * Tracking Event Notification details.
 */
export type TrackingEventNotificationDetail_2 = {
    /**
     * List of Tracking notifications requested for events like ON_DELIVERY, ON_ESTIMATED_DELIVERY, ON_EXCEPTION, ON_TENDER.
     */
    trackingNotifications: Array<TrackingNotification>;
    /**
     * An optional message which will be included in the body of the email.
     */
    personalMessage?: string;
    /**
     * If value is 'true' then html tags are included in the response date.  If 'false' they are not provided in the response.
     */
    supportHTML?: any;
};

