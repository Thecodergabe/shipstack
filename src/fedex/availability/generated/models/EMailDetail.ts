/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EMailDetail = {
    /**
     * These are email notification format type.
     */
    emailNotificationFormatType?: EMailDetail.emailNotificationFormatType;
    /**
     * This is the email address.
     */
    address?: string;
    /**
     * Indicate the Email Permission Type.
     */
    permissions?: Record<string, 'GRANT' | 'DENY'>;
};
export namespace EMailDetail {
    /**
     * These are email notification format type.
     */
    export enum emailNotificationFormatType {
        TEXT = 'TEXT',
        HTML = 'HTML',
    }
}

