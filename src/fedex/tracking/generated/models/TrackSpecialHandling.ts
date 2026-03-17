/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify types of special handlings that are applied to this package.<br><a onclick='loadDocReference("fedexexpressspecialhandlingcodes")'>Click here to see FedEx Express Special Handling Codes.</a>
 */
export type TrackSpecialHandling = {
    /**
     * Field which holds the text description of the special handling code.<br> Example: Deliver Weekday
     */
    description?: string;
    /**
     * Field which holds type representing the special handling.<br> Example: DELIVER_WEEKDAY
     */
    type?: string;
    /**
     * Field which holds information about the payment handling related to the special handling.<br> Example: OTHER
     */
    paymentType?: string;
};

