/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for Email Information.
 */
export type Notification_EMail = {
    /**
     * Email address where the notification is sent.  Up to five email addresses are allowed for each type of Quantum View TM shipment notification. Up to two email address for return notification.
     */
    EMailAddress: Array<string>;
    /**
     * The address where an undeliverable eMail message is sent if the eMail with the notification is undeliverable.  There can be only one UndeliverableEMailAddress for each shipment with Quantum View Shipment Notifications.
     */
    UndeliverableEMailAddress?: string;
    /**
     * The e-mail address specifies the Reply To E-mail address. The "From" field of the message header contains pkginfo@ups.com.  Valid for Return Notification only.
     */
    FromEMailAddress?: string;
    /**
     * The name the email will appear to be from. Defaults to the Shipper Name.  The FromName must occur only once for each shipment with Quantum View Shipment Notifications.
     */
    FromName?: string;
    /**
     * User defined text that will be included in the eMail.  The Memo must occur only once for each shipment with Quantum View Shipment Notifications.
     */
    Memo?: string;
};

