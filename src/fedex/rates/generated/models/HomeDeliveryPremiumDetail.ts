/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are Special service elements for FedEx Ground Home Delivery shipments. If selected, element homedeliveryPremiumType is mandatory.
 *
 *
 */
export type HomeDeliveryPremiumDetail = {
    /**
     * This is shipment date. Both the date and time portions of the string are expected to be used. The date should not be a past date or a date more than 10 days in the future. The time is the local time of the shipment based on the shipper's time zone.<br>Formats: YYYY-MM-DD, YYYY-MM-DD HH:MM:SS <br> Example: 2024-06-14 19:23:51
     */
    shipTimestamp?: string;
    /**
     * This is Home Delivery Premium Type. It allows to specify additional premimum service options for the home delivery shipment. Can specify Evening delivery or a Date certain, or can specify appointment for the delivery.
     */
    homedeliveryPremiumType?: HomeDeliveryPremiumDetail.homedeliveryPremiumType;
};
export namespace HomeDeliveryPremiumDetail {
    /**
     * This is Home Delivery Premium Type. It allows to specify additional premimum service options for the home delivery shipment. Can specify Evening delivery or a Date certain, or can specify appointment for the delivery.
     */
    export enum homedeliveryPremiumType {
        APPOINTMENT = 'APPOINTMENT',
        DATE_CERTAIN = 'DATE_CERTAIN',
        EVENING = 'EVENING',
    }
}

