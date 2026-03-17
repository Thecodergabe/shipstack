/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackingNotificationDetail } from './TrackingNotificationDetail';
/**
 * Identifies a list of details for Tracking Notifications
 */
export type TrackingNotification = {
    notificationDetail: TrackingNotificationDetail;
    /**
     * This is to specify Recipient_Role in the shipment. <br>Possible values - BROKER, OTHER, RECIPIENT, SHIPPER <br> Example: SHIPPER
     */
    role?: string;
    /**
     * Identifies the events for which the client is requesting notifications. <br>Possible Values are: ON_DELIVERY, ON_ESTIMATED_DELIVERY, ON_EXCEPTION, ON_TENDER
     */
    notificationEventTypes: Array<string>;
    /**
     * If value is 'true' the current tracking results for the shipment along with notification details will be provided to the client. If 'false' only results for the notification request is provided.<br>Defaults to 'false'<br>Example: true
     */
    currentResultRequestedFlag?: boolean;
};

