/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhoneNumber1 } from './PhoneNumber1';
/**
 * These are Special service elements for FedEx Ground Home Delivery shipments. If selected, element homedeliveryPremiumType is mandatory.
 */
export type HomeDeliveryPremiumDetail = {
    phoneNumber?: PhoneNumber1;
    /**
     * This is delivery date. Required for FedEx Date Certain Home Delivery. Valid dates are Monday to Sunday. <br>There may be a delay in delivery on Sundays to locations that are geographically difficult to access.<br>Example: 2019-06-26
     */
    deliveryDate?: string;
    /**
     * Home Delivery Premium Type.  Allows the user to specify additional premimum service options for their home delivery shipment. Customer can specify Evening delivery or a Date certain, or can specify they would like to make an appointment for the delivery.<br>Example: APPOINTMENT
     */
    homedeliveryPremiumType?: HomeDeliveryPremiumDetail.homedeliveryPremiumType;
};
export namespace HomeDeliveryPremiumDetail {
    /**
     * Home Delivery Premium Type.  Allows the user to specify additional premimum service options for their home delivery shipment. Customer can specify Evening delivery or a Date certain, or can specify they would like to make an appointment for the delivery.<br>Example: APPOINTMENT
     */
    export enum homedeliveryPremiumType {
        APPOINTMENT = 'APPOINTMENT',
        DATE_CERTAIN = 'DATE_CERTAIN',
        EVENING = 'EVENING',
    }
}

