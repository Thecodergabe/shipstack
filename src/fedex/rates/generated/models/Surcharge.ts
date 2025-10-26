/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the surcharges.
 */
export type Surcharge = {
    /**
     * Specifies the surcharge type.<br>Example: FUEL <br><a onclick='loadDocReference("surcharges")'>Click here to see more on Surcharges.</a>
     */
    type?: string;
    /**
     * Specifies the description of the surcharge. Indicates delivery and returns information for FedEx Ground Economy services.<br>Example: Fuel Surcharge
     */
    description?: string;
    /**
     * Specify the declared monetary value/amount of the shipment.<br> Example: 5.42
     */
    amount?: number;
    /**
     * Specifies the level of surcharge. <br> Example: level
     */
    level?: string;
    /**
     * The localized name of the surcharge. <br> Example: name
     */
    name?: string;
};

