/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailOptionsRequested } from './EmailOptionsRequested';
/**
 * These are the recipient details for the online email return label.
 */
export type EmailRecipient = {
    /**
     * This is recipient email address for notifying the return label. Maximum length 200 characters.<br> Example: neenaaaaa@abc.com
     */
    emailAddress: string;
    optionsRequested?: EmailOptionsRequested;
    /**
     * Relationship that the emailRecipient has to the pending email return label shipments.<br> Valid Values: SHIPMENT_COMPLETOR,SHIPMENT_INITIATOR<br>Example: SHIPMENT_COMPLETOR
     */
    role: EmailRecipient.role;
    /**
     * These are locale details.<br>Example: 'en_US'<br><a onclick='loadDocReference("locales")'>click here to see locales</a><br>Note: If the locale is left blank or an invalid locale is entered, an error message is returned in response.
     */
    locale?: string;
};
export namespace EmailRecipient {
    /**
     * Relationship that the emailRecipient has to the pending email return label shipments.<br> Valid Values: SHIPMENT_COMPLETOR,SHIPMENT_INITIATOR<br>Example: SHIPMENT_COMPLETOR
     */
    export enum role {
        SHIPMENT_COMPLETOR = 'SHIPMENT_COMPLETOR',
        SHIPMENT_INITIATOR = 'SHIPMENT_INITIATOR',
    }
}

