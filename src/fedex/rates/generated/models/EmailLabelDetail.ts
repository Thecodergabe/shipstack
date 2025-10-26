/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailRecipient } from './EmailRecipient';
/**
 * Describes specific information about the email label shipment.<ul><li>Message: Content of the email message</li><li>Recipients: EMailRecipient</li><li>emailAddress - email address of the recipient</li><li>role - role type of the recipient</li><li>optionsRequested</li><li>localization</li>
 */
export type EmailLabelDetail = {
    /**
     * Describes specific information about the list of email label shipment reipients.
     */
    recipients?: Array<EmailRecipient>;
    /**
     * customer specified message to be included in the email to the end-user.
     */
    message?: string;
};

