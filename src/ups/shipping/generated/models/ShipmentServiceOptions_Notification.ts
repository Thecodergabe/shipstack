/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notification_EMail } from './Notification_EMail';
import type { Notification_Locale } from './Notification_Locale';
import type { Notification_TextMessage } from './Notification_TextMessage';
import type { Notification_VoiceMessage } from './Notification_VoiceMessage';
/**
 * Container for the Quantum View Notification (QVN) is valid for all shipments including Return service, Import Control and Returns Flexible Access.  Valid return service types are: ERL, PRL, PNM, RS1, or RS3.   The shipment level notification is valid for forward and return international shipments as well as for domestic shipments (for US and PR).
 */
export type ShipmentServiceOptions_Notification = {
    /**
     * The type of notification requested.
     *
     * Note:
     * - QVN Exception notification and return notification are not applicable to GFP.
     * - QV In-transit and Return Notifications are only valid for ImportControl and Return shipment.
     * - QV In-transit Notification is allowed for return shipments only.
     * - QV Ship Notification is allowed for forward moving shipments only.
     *
     * Valid values:
     * - 5 - QV In-transit Notification
     * - 6 - QV Ship Notification
     * - 7 - QV Exception Notification
     * - 8 - QV Delivery Notification
     * - 2 - Return Notification or Label Creation Notification
     * - 012 - Alternate Delivery Location Notification
     * - 013 - UAP Shipper Notification.
     */
    NotificationCode: string;
    EMail: Notification_EMail;
    VoiceMessage?: Notification_VoiceMessage;
    TextMessage?: Notification_TextMessage;
    Locale?: Notification_Locale;
};

