/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are surcharges details.<br><a onclick='loadDocReference("surcharges")'>click here to see Surcharges</a>
 */
export type Surcharge = {
    /**
     * This is the surcharge amount.<br>Example: 15.35
     */
    amount?: number;
    /**
     * This is the surcharge type.<br>Example: APPOINTMENT_DELIVERY
     */
    surchargeType?: string;
    /**
     * Specifies if the surcharge applies to the entire shipment, or to an individual package.<br>Example: PACKAGE
     */
    level?: string;
    /**
     * Specifies the description of the surcharge. Indicates delivery and returns information for FedEx Ground Economy services. <br>Example: Fuel Surcharge
     */
    description?: string;
};

