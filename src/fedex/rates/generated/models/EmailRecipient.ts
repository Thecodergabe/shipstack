/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailOptionsRequested } from './EmailOptionsRequested';
import type { Locale } from './Locale';
/**
 * Use this object to specify the recipient email information.
 */
export type EmailRecipient = {
    /**
     * This is the placeholder for Email address of the end-user to be  notified of the return label. Maximum length is 200 characters.
     */
    emailAddress: string;
    optionsRequested?: EmailOptionsRequested;
    /**
     * Specifies the role of the recipient to the pending shipment.
     */
    role?: EmailRecipient.role;
    locale?: Locale;
};
export namespace EmailRecipient {
    /**
     * Specifies the role of the recipient to the pending shipment.
     */
    export enum role {
        SHIPMENT_COMPLETOR = 'SHIPMENT_COMPLETOR',
        SHIPMENT_INITIATOR = 'SHIPMENT_INITIATOR',
    }
}

