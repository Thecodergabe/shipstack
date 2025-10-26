/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Details for the Return Shipment.
 */
export type ShipmentSpecialServicesRequested_returnShipmentDetail = {
    /**
     * The type of return shipment being requested.
     */
    returnType?: ShipmentSpecialServicesRequested_returnShipmentDetail.returnType;
};
export namespace ShipmentSpecialServicesRequested_returnShipmentDetail {
    /**
     * The type of return shipment being requested.
     */
    export enum returnType {
        FEDEX_TAG = 'FEDEX_TAG',
        PENDING = 'PENDING',
        PRINT_RETURN_LABEL = 'PRINT_RETURN_LABEL',
        EMAIL_LABEL = 'EMAIL_LABEL',
        NET_RETURN = 'NET_RETURN',
        VOICE_CALL_TAG = 'VOICE_CALL_TAG',
    }
}

