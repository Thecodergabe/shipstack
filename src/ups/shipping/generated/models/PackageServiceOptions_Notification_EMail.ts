/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for the e-mail message.
 */
export type PackageServiceOptions_Notification_EMail = {
    /**
     * The eMails subject. Defaults to the UPS Receiver Return Notification plus the shipment ID.  Only allowed at the first package.
     */
    Subject?: string;
    /**
     * Specifies a reference code and reference number to display in the subject of the Receiver Return Notification.
     *
     * When the subject code is provided, the subject will contain the following: UPS Receiver Return Notification.
     *
     * The reference code (the reference code will be mapped to the corresponding ANSI value) Plus the reference number.
     *
     * The valid subject codes are:
     * - 01 - Shipment Reference Number 1,
     * - 02 - Shipment Reference Number 2,
     * - 03 - package Reference Number 1,
     * - 04 - package Reference Number 2,
     * - 05 - package Reference Number 3,
     * - 06 - package Reference Number 4,
     * - 07 - package Reference Number 5,
     * - 08 - Subject Text (Return Notification only).
     *
     * If the subject code tag is not provided and the subject text is provided, the subject of the notification will be the subject text.
     *
     * If the subject text is provided, and subject code tag exists, then the subject code value must be 08.
     *
     * If the subject code is 08, the subject text must exist. If a subject code is provided that refers to a nonexistent reference number, the subject will default to the tracking number. Only allowed at the first package.
     *
     */
    SubjectCode?: string;
    /**
     * The destination email address of the receiver returns notification email.
     */
    EMailAddress: Array<string>;
    /**
     * The e-mail address where an undeliverable email message is sent if the Receiver Return Notification email is undeliverable. Defaults to FromEMailAddress. Only allowed at the first package.
     */
    UndeliverableEMailAddress?: string;
    /**
     * The email address listed in the Reply To field of the message header, includes name and e-mail address of sender. The "From" field of the message header contains pkginfo@ups.com.  Only allowed at the first package.
     */
    FromEMailAddress?: string;
    /**
     * The name the receiver return notification will appear to be from. Defaults to the Shipper Name. Only allowed at the first package.
     */
    FromName?: string;
    /**
     * User defined text that will be included in the email. Only allowed at the first package.
     */
    Memo?: string;
};

