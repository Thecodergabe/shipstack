/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailDetail } from './EmailDetail';
import type { Localization } from './Localization';
/**
 * Information about the notification email and the language of the notification requested.
 */
export type TrackingNotificationDetail = {
    localization: Localization;
    emailDetail: EmailDetail;
    /**
     * Identifies the format of the notification. <br>valid values are 'HTML' or 'TEXT'.
     */
    notificationType: string;
};

