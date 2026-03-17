/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for Declared Value Type.
 */
export type DeclaredValue_Type = {
    /**
     * Declared value type. Valid values:
     * - 01=EVS
     * - 02=DVS
     *
     * Defaults to 01 i.e. EVS if declared value type is not provided.  The user cannot specify different type of declared value for the shipment. User can either have shipper declared value (DVS) or declared value (EVS) but not both at package level.
     *
     * Note: The Shipper Declared Value is applicable for forward shipments when the billing option is freight collect or third party.
     *
     */
    Code: string;
    /**
     * Declared value Description.
     */
    Description?: string;
};

