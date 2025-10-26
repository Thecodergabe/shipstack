/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are recipient details for receiving email notification.
 */
export type EmailNotificationRecipient = {
    /**
     * Specify the recipient name.<br>Example: Joe Smith
     */
    name?: string;
    /**
     * This is the email notification recipient type.<br>Example: SHIPPER
     */
    emailNotificationRecipientType: EmailNotificationRecipient.emailNotificationRecipientType;
    /**
     * Specify the recipient email address.<br>Example: xyz@aol.com
     */
    emailAddress?: string;
    /**
     * This is the format for the email notification. Either HTML or plain text can be provided.
     */
    notificationFormatType?: EmailNotificationRecipient.notificationFormatType;
    /**
     * Indicate the type of notification that will be sent as an email.
     */
    notificationType?: EmailNotificationRecipient.notificationType;
    /**
     * These are the locale details for email.<br><a onclick='loadDocReference("locales")'>click here to see Locales</a><br>Note: If the locale is left blank or an invalid locale is entered, an error message is returned in response.
     */
    locale?: string;
    /**
     * Specify notification event types.<br><a onclick='loadDocReference("notificationeventtypes")'>Click here for more information on Notification Event Types.</a>
     */
    notificationEventType?: Array<'ON_DELIVERY' | 'ON_EXCEPTION' | 'ON_SHIPMENT' | 'ON_TENDER' | 'ON_ESTIMATED_DELIVERY' | 'ON_BILL_OF_LADING' | 'ON_PICKUP_DRIVER_ARRIVED' | 'ON_PICKUP_DRIVER_ASSIGNED' | 'ON_PICKUP_DRIVER_DEPARTED' | 'ON_PICKUP_DRIVER_EN_ROUTE'>;
};
export namespace EmailNotificationRecipient {
    /**
     * This is the email notification recipient type.<br>Example: SHIPPER
     */
    export enum emailNotificationRecipientType {
        BROKER = 'BROKER',
        OTHER = 'OTHER',
        RECIPIENT = 'RECIPIENT',
        SHIPPER = 'SHIPPER',
        THIRD_PARTY = 'THIRD_PARTY',
    }
    /**
     * This is the format for the email notification. Either HTML or plain text can be provided.
     */
    export enum notificationFormatType {
        HTML = 'HTML',
        TEXT = 'TEXT',
    }
    /**
     * Indicate the type of notification that will be sent as an email.
     */
    export enum notificationType {
        EMAIL = 'EMAIL',
    }
}

