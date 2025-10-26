/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhoneNumber } from './PhoneNumber';
export type PhoneNumberDetail = {
    number?: PhoneNumber;
    /**
     * This is to specify the phone permission.
     */
    permissions?: Record<string, 'GRANT' | 'DENY'>;
    /**
     * Specify if the phone usage is Primary or Secondary.
     */
    usage?: PhoneNumberDetail.usage;
    /**
     * Indicate the Phone Number Type.
     */
    type?: PhoneNumberDetail.type;
};
export namespace PhoneNumberDetail {
    /**
     * Specify if the phone usage is Primary or Secondary.
     */
    export enum usage {
        PRIMARY = 'PRIMARY',
        SECONDARY = 'SECONDARY',
    }
    /**
     * Indicate the Phone Number Type.
     */
    export enum type {
        FAX = 'FAX',
        HOME = 'HOME',
        MOBILE = 'MOBILE',
        PAGER = 'PAGER',
        WORK = 'WORK',
    }
}

