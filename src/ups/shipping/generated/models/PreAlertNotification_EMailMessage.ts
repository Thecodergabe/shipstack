/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This container is used for Populating EMailMessage details for PreAlertNotification.
 */
export type PreAlertNotification_EMailMessage = {
    /**
     * EMailAddress where PreAlertNotification is sent.
     */
    EMailAddress: string;
    /**
     * This is used for notification when EMailAddress for PreAlertNotification is undeliverable.
     */
    UndeliverableEMailAddress?: string;
};

