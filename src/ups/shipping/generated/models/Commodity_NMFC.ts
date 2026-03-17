/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold the NMFC codes.
 */
export type Commodity_NMFC = {
    /**
     * Specifies the Commodity's NMFC prime code.  Required if NMFC Container is present.
     */
    PrimeCode: string;
    /**
     * Specifies the Commodity's NMFC sub code.  Needs to be provided when the SubCode associated with the PrimeCode is other than 00. UPS defaults the sub value to 00 if not provided. If provided the Sub Code should be associated with the PrimeCode of the NMFC.
     */
    SubCode?: string;
};

