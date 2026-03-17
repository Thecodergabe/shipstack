/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PreAlertNotification_EMailMessage } from './PreAlertNotification_EMailMessage';
import type { PreAlertNotification_Locale } from './PreAlertNotification_Locale';
import type { PreAlertNotification_TextMessage } from './PreAlertNotification_TextMessage';
import type { PreAlertNotification_VoiceMessage } from './PreAlertNotification_VoiceMessage';
/**
 * This container is used for providing Pre-Alert Notifications to the consignee for UPS Exchange movements and Pack & Collect shipments.
 */
export type ShipmentServiceOptions_PreAlertNotification = {
    EMailMessage?: PreAlertNotification_EMailMessage;
    VoiceMessage?: PreAlertNotification_VoiceMessage;
    TextMessage?: PreAlertNotification_TextMessage;
    Locale: PreAlertNotification_Locale;
};

