/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SmsDetail } from './SmsDetail';
/**
 * Data specifying the recipient(s) of notifications related to the movement of the shipment. At a minimnum an EmailnotificationRecipientType, at least one NoficationEventType, and an EmailAddress are required.
 */
export type EmailNotificationRecipient = {
    /**
     * Identifies the email address associated with this contact.
     */
    emailAddress: string;
    /**
     * Specifies notification event type.
     */
    notificationEventType?: Array<'ON_DELIVERY' | 'ON_EXCEPTION' | 'ON_SHIPMENT' | 'ON_TENDER' | 'ON_ESTIMATED_DELIVERY' | 'ON_PICKUP' | 'ON_LABEL' | 'ON_BILL_OF_LADING'>;
    smsDetail?: SmsDetail;
    /**
     * Specifies Notification Format Type.
     */
    notificationFormatType?: EmailNotificationRecipient.notificationFormatType;
    /**
     * Required Email Notification Recipient Type.
     */
    emailNotificationRecipientType?: EmailNotificationRecipient.emailNotificationRecipientType;
    /**
     * Specifies the type of the notification received.
     */
    notificationType?: EmailNotificationRecipient.notificationType;
    /**
     * Specify the locale details.<br>Example: 'en_US'<br><a onclick='loadDocReference("locales")'>Click here to see the list of available locales<br></a><br>Note: If the locale is left blank or an invalid locale is entered, an error message is returned in response.
     */
    locale?: string;
};
export namespace EmailNotificationRecipient {
    /**
     * Specifies Notification Format Type.
     */
    export enum notificationFormatType {
        HTML = 'HTML',
        TEXT = 'TEXT',
    }
    /**
     * Required Email Notification Recipient Type.
     */
    export enum emailNotificationRecipientType {
        BROKER = 'BROKER',
        OTHER = 'OTHER',
        RECIPIENT = 'RECIPIENT',
        SHIPPER = 'SHIPPER',
        THIRD_PARTY = 'THIRD_PARTY',
        OTHER1 = 'OTHER1',
        OTHER2 = 'OTHER2',
    }
    /**
     * Specifies the type of the notification received.
     */
    export enum notificationType {
        EMAIL = 'EMAIL',
        SMS_TEXT_MESSAGE = 'SMS_TEXT_MESSAGE',
    }
}

