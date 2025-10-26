/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are supporting detail for applied options identified in a rate quote.
 */
export type ServiceSubOptionDetail = {
    /**
     * This identifies the indicia used during rate quote.
     */
    smartPostIndiciaType?: ServiceSubOptionDetail.smartPostIndiciaType;
};
export namespace ServiceSubOptionDetail {
    /**
     * This identifies the indicia used during rate quote.
     */
    export enum smartPostIndiciaType {
        MEDIA_MAIL = 'MEDIA_MAIL',
        PARCEL_RETURN = 'PARCEL_RETURN',
        PARCEL_SELECT = 'PARCEL_SELECT',
        PRESORTED_BOUND_PRINTED_MATTER = 'PRESORTED_BOUND_PRINTED_MATTER',
        PRESORTED_STANDARD = 'PRESORTED_STANDARD',
    }
}

