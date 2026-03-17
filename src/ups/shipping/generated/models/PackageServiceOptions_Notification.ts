/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageServiceOptions_Notification_EMail } from './PackageServiceOptions_Notification_EMail';
/**
 * Receiver Return Notification.  Applicable for Shipment with returned service.
 */
export type PackageServiceOptions_Notification = {
    /**
     * Notification Code.  Valid values:
     * 3 - Receiver Return Notification
     * 6 - QV Email Notification
     * 7 - QV Exception Notification
     * 8 - QV Delivery Notification
     * For Mail Innovations forward shipments, QV Email Notifications are allowed for First Class, Priority Mail, and Expedited Mail Innovation services.
     */
    NotificationCode: string;
    EMail: PackageServiceOptions_Notification_EMail;
};

