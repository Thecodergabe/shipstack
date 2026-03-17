/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * VoiceMessage container is used for specifying phone number for receiving voice Alternate Delivery Location notification and UAP Shipper notification.  Valid only for Alternate Delivery Location notification and UAP Shipper notification. VoiceMessage phone number or TextMessage phone number or email address is required for ADL notification and UAP Shipper notification.
 */
export type Notification_VoiceMessage = {
    /**
     * Phone number for receiving Voice Alternate Delivery Location notification and UAP Shipper notification.
     */
    PhoneNumber: string;
};

