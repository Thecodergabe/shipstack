/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the return shipment.
 */
export type ReturnShipmentDetail = {
    /**
     * This is the return Type. Required to be set to PRINT_RETURN_LABEL for printed return label shipments. For email return label shipments returnType must be set to PENDING and pendingShipmentDetail must be set to EMAIL.
     */
    returnType: ReturnShipmentDetail.returnType;
};
export namespace ReturnShipmentDetail {
    /**
     * This is the return Type. Required to be set to PRINT_RETURN_LABEL for printed return label shipments. For email return label shipments returnType must be set to PENDING and pendingShipmentDetail must be set to EMAIL.
     */
    export enum returnType {
        FEDEX_TAG = 'FEDEX_TAG',
        NET_RETURN = 'NET_RETURN',
        PENDING = 'PENDING',
        PRINT_RETURN_LABEL = 'PRINT_RETURN_LABEL',
        EMAIL_LABEL = 'EMAIL_LABEL',
        VOICE_CALL_TAG = 'VOICE_CALL_TAG',
    }
}

