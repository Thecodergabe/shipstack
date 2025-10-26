/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FreightPhoneNumberDetail } from './FreightPhoneNumberDetail';
/**
 * This field provides the data details for Fedex Freight Detail service.
 */
export type FreightDirectDataDetails = {
    /**
     * This field provides the type for FedexFreight Detail service.<br> Example: <ul><li>BASIC</li><li>BASIC_BY_APPOINTMENT</li><li>PREMIUM</li><li>STANDARD</li></ul>
     */
    type?: FreightDirectDataDetails.type;
    /**
     * This field provides the transportation type for Fedex Freight Detail service.<br> Example: <ul><li>DELIVERY</li><li>PICKUP</li></ul>
     */
    transportationType?: FreightDirectDataDetails.transportationType;
    /**
     * This field provides the email address associated with the freight user
     */
    eMailAddress?: string;
    /**
     * This field prvides the phone number details associated with freight services
     */
    phoneNumberDetails?: Array<FreightPhoneNumberDetail>;
};
export namespace FreightDirectDataDetails {
    /**
     * This field provides the type for FedexFreight Detail service.<br> Example: <ul><li>BASIC</li><li>BASIC_BY_APPOINTMENT</li><li>PREMIUM</li><li>STANDARD</li></ul>
     */
    export enum type {
        BASIC = 'BASIC',
        BASIC_BY_APPOINTMENT = 'BASIC_BY_APPOINTMENT',
        PREMIUM = 'PREMIUM',
        STANDARD = 'STANDARD',
    }
    /**
     * This field provides the transportation type for Fedex Freight Detail service.<br> Example: <ul><li>DELIVERY</li><li>PICKUP</li></ul>
     */
    export enum transportationType {
        DELIVERY = 'DELIVERY',
        PICKUP = 'PICKUP',
    }
}

