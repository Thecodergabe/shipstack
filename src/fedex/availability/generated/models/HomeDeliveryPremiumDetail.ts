/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are Special service elements for FedEx Ground Home Delivery shipments. If selected, element homedeliveryPremiumType is mandatory.
 */
export type HomeDeliveryPremiumDetail = {
    /**
     *  This is Home Delivery Premium Type. It allows to specify additional premium service options for the home delivery shipment. Can specify Evening delivery or a Date certain, or can specify appointment for the delivery.
     */
    homedeliveryPremiumType?: HomeDeliveryPremiumDetail.homedeliveryPremiumType;
};
export namespace HomeDeliveryPremiumDetail {
    /**
     *  This is Home Delivery Premium Type. It allows to specify additional premium service options for the home delivery shipment. Can specify Evening delivery or a Date certain, or can specify appointment for the delivery.
     */
    export enum homedeliveryPremiumType {
        APPOINTMENT = 'APPOINTMENT',
        DATE_CERTAIN = 'DATE_CERTAIN',
        EVENING = 'EVENING',
    }
}

