/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this object to specify the processing options associated with Pending Shipment request. This is useful for the Email Label originator to specify if the completer can make modifications to editable shipment data.
 */
export type PendingShipmentProcessingOptionsRequested = {
    /**
     * These are Pending Shipment processing options.<br> Example: ["ALLOW_MODIFICATIONS"]
     */
    options?: Array<'ALLOW_MODIFICATIONS'>;
};

