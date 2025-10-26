/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShippingDocumentEmailRecipient } from './ShippingDocumentEmailRecipient';
/**
 * Specifies how to e-mail shipping documents.
 */
export type ShippingDocumentEmailDetail = {
    /**
     * Indicates the shipping document email recipients.
     */
    eMailRecipients: Array<ShippingDocumentEmailRecipient>;
    /**
     * These are locale details.<br>Example: 'en_US'<br><a onclick='loadDocReference("locales")'>click here to see locales</a><br>Note: If the locale is left blank or an invalid locale is entered, an error message is returned in response.
     */
    locale?: string;
    /**
     * Identifies the convention by which documents are to be grouped as email attachment.
     */
    grouping?: ShippingDocumentEmailDetail.grouping;
};
export namespace ShippingDocumentEmailDetail {
    /**
     * Identifies the convention by which documents are to be grouped as email attachment.
     */
    export enum grouping {
        BY_RECIPIENT = 'BY_RECIPIENT',
        NONE = 'NONE',
    }
}

