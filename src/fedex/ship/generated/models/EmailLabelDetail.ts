/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailRecipient } from './EmailRecipient';
/**
 * These are specific information about the pending email label.<br>Required when PendingShipmentType is EMAIL.<br>Not applicable for CreateTag.
 */
export type EmailLabelDetail = {
    /**
     * This is Email label recipient email address, shipment role, & language locale details. Atleast one entry must be specified.
     */
    recipients?: Array<EmailRecipient>;
    /**
     * Specifies an optional personalized message to be included in the email to the email label recipient.<br>Example: YOUR OPTIONAL MESSAGE
     */
    message?: string;
};

