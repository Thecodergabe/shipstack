/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhoneNumber } from './PhoneNumber';
/**
 * PhoneNumberDetail Model
 */
export type PhoneNumberDetail = {
    /**
     * Phone Number details of the user
     */
    number: PhoneNumber;
    /**
     * Shows the Phone Permission Status
     */
    permissions: PhoneNumberDetail.permissions;
    /**
     * Specifies the Phone Usage
     */
    usage: PhoneNumberDetail.usage;
    /**
     * Phone Number Type
     */
    type?: PhoneNumberDetail.type;
    /**
     * Phone Notification Format Type
     */
    phoneNotificationFormatType?: PhoneNumberDetail.phoneNotificationFormatType;
};
export namespace PhoneNumberDetail {
    /**
     * Shows the Phone Permission Status
     */
    export enum permissions {
        GRANT = 'GRANT',
        DENY = 'DENY',
    }
    /**
     * Specifies the Phone Usage
     */
    export enum usage {
        PRIMARY = 'PRIMARY',
        SECONDARY = 'SECONDARY',
    }
    /**
     * Phone Number Type
     */
    export enum type {
        FAX = 'FAX',
        HOME = 'HOME',
        MOBILE = 'MOBILE',
        PAGER = 'PAGER',
        WORK = 'WORK',
    }
    /**
     * Phone Notification Format Type
     */
    export enum phoneNotificationFormatType {
        SMS_TEXT_MESSAGE = 'SMS_TEXT_MESSAGE',
    }
}

