/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipShipmentEmailNotificationRecipient } from './ShipShipmentEmailNotificationRecipient';
/**
 * This is used to provide eMail notification information..
 */
export type ShipShipmentEMailNotificationDetail = {
    /**
     * Shipment Notification Aggregation Type.<br>Example:PER_PACKAGE
     */
    aggregationType?: ShipShipmentEMailNotificationDetail.aggregationType;
    /**
     * These are email notification recipient details.
     */
    emailNotificationRecipients?: Array<ShipShipmentEmailNotificationRecipient>;
    /**
     * This is your personal message for the email.<br>Note: The maximum personal message character limit depends on the element notificationFormatType values:<ul><li>If notificationFormatType is TEXT, then only 120 characters printed on the email</li><li>If notificationFormatType is HTML, then 500 characters printed on the email</li></ul><br>Example: This is concerning the order 123456 of 26 July 2021 - art no 34324-23 Teddy Bear, brown
     */
    personalMessage?: string;
};
export namespace ShipShipmentEMailNotificationDetail {
    /**
     * Shipment Notification Aggregation Type.<br>Example:PER_PACKAGE
     */
    export enum aggregationType {
        PER_PACKAGE = 'PER_PACKAGE',
        PER_SHIPMENT = 'PER_SHIPMENT',
    }
}

