/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackingEventNotificationDetail } from './TrackingEventNotificationDetail';
import type { TrackingNumberInfo } from './TrackingNumberInfo';
/**
 * The request to receive a tracking notification.
 */
export type Full_Schema_Notification = {
    /**
     * Placeholder for Sender contact name.<br> Example: Sam Smith
     */
    senderContactName: string;
    /**
     * Email address of the sender from which the shipment notification will be sent.<br>Example: LSR123@gmail.com
     */
    senderEMailAddress: string;
    trackingEventNotificationDetail: TrackingEventNotificationDetail;
    trackingNumberInfo: TrackingNumberInfo;
    /**
     * ShipDateBegin and ShipDateEnd are recommended to narrow the search, reduce lookup time, and avoid duplicates when searching for a specific tracking number in a specific time range. <br>Format: YYYY-MM-DD<br>example:'2019-10-13'
     */
    shipDateBegin?: string;
    /**
     * ShipDateBegin and ShipDateEnd are recommended to narrow the search, reduce lookup time, and avoid duplicates when searching for a specific tracking number in a specific time range. <br>Format: YYYY-MM-DD<br>example:'2019-10-13'
     */
    shipDateEnd?: string;
};

