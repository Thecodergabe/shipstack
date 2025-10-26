/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the details of an outbound shipment in order to associate the return shipment to it.
 */
export type ReturnAssociationDetail = {
    /**
     * This is the ship date for the outbound shipment associated with a return shipment. The format is YYYY-MM-DD.<br> Example: 2019-10-01
     */
    shipDatestamp?: string;
    /**
     * This is the tracking number associated with this package.<br>Example: 49XXX0000XXX20032835
     */
    trackingNumber: string;
};

