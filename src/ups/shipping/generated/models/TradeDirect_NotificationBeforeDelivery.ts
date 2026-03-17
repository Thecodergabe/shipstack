/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradeDirect_Phone } from './TradeDirect_Phone';
/**
 * Notification container for the before delivery notification.
 */
export type TradeDirect_NotificationBeforeDelivery = {
    /**
     * The type of notification request.
     *
     * Valid values are:
     *
     * - 001 = QV Ship Notification
     * - 002 = QV Delivery Notification
     * - 003 = QV Exception Notification
     *
     */
    RequestType?: TradeDirect_NotificationBeforeDelivery.RequestType;
    /**
     * The media type code for the notification.
     *
     * Valid values are:
     *
     * - 03 = Email
     * - 04 = Fax
     *
     */
    MediaTypeCode?: TradeDirect_NotificationBeforeDelivery.MediaTypeCode;
    /**
     * The language for the notification.
     */
    Language?: string;
    /**
     * The dialect for the notification.
     */
    Dialect?: string;
    /**
     * The name of the company for the ship from address.
     */
    ShipFromCompanyName?: string;
    /**
     * The name of the company for the notification.
     */
    CompanyName?: string;
    Phone?: TradeDirect_Phone;
    /**
     * Subject line for the notification.
     */
    SubjectLine?: string;
    /**
     * Memo for the notification.
     */
    Memo?: string;
    /**
     * The name of the contact person for the notification.
     */
    Name?: string;
    /**
     * Email address to send notification to.
     */
    EMailAddress: string;
    /**
     * Alternate email address for the notification.
     */
    AlternateEmailAddress?: string;
};
export namespace TradeDirect_NotificationBeforeDelivery {
    /**
     * The type of notification request.
     *
     * Valid values are:
     *
     * - 001 = QV Ship Notification
     * - 002 = QV Delivery Notification
     * - 003 = QV Exception Notification
     *
     */
    export enum RequestType {
        _001 = '001',
        _002 = '002',
        _003 = '003',
    }
    /**
     * The media type code for the notification.
     *
     * Valid values are:
     *
     * - 03 = Email
     * - 04 = Fax
     *
     */
    export enum MediaTypeCode {
        _03 = '03',
        _04 = '04',
    }
}

