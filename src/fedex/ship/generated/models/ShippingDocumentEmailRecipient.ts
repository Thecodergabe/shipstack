/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ShippingDocumentEmailRecipient = {
    /**
     * Specifies the email address.<br> Example: email@fedex.com
     */
    emailAddress?: string;
    /**
     * Specify the email notification recipient type.
     */
    recipientType: ShippingDocumentEmailRecipient.recipientType;
};
export namespace ShippingDocumentEmailRecipient {
    /**
     * Specify the email notification recipient type.
     */
    export enum recipientType {
        BROKER = 'BROKER',
        OTHER = 'OTHER',
        RECIPIENT = 'RECIPIENT',
        SHIPPER = 'SHIPPER',
        THIRD_PARTY = 'THIRD_PARTY',
        OTHER1 = 'OTHER1',
        OTHER2 = 'OTHER2',
    }
}

