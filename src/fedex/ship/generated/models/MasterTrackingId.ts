/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the tracking details of the package.Required for child shipments of an oneLabelAtATime shipments
 */
export type MasterTrackingId = {
    /**
     * This is FedEx tracking Identifier associated with the package.<br>Example: 8600
     */
    formId?: string;
    /**
     * Specify the FedEx transportation type. <br>Example: EXPRESS
     */
    trackingIdType?: string;
    /**
     * Specify the USPS tracking Identifier associated with FedEx SmartPost shipment.<br>Example: 92
     */
    uspsApplicationId?: string;
    /**
     * This is the number associated with the package that is used to track it.For child shipment of an oneLabelAtATime shipments,this should be same as the masterTrackingNumber of the parent shipment. <br>Example: 49XXX0000XXX20032835
     */
    trackingNumber?: string;
};

