/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * EMailDetail Model
 */
export type EMailDetail = {
    /**
     * Format Type of email notification
     */
    emailNotificationFormatType?: EMailDetail.emailNotificationFormatType;
    /**
     * Email address of the user
     */
    address?: string;
    /**
     * Email Permission Type
     */
    permissions?: EMailDetail.permissions;
};
export namespace EMailDetail {
    /**
     * Format Type of email notification
     */
    export enum emailNotificationFormatType {
        SMS_TEXT_MESSAGE = 'SMS_TEXT_MESSAGE',
        TEXT = 'TEXT',
        HTML = 'HTML',
    }
    /**
     * Email Permission Type
     */
    export enum permissions {
        GRANT = 'GRANT',
        DENY = 'DENY',
    }
}

