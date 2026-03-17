/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * NMFC Commodity container.  For GFP Only.
 */
export type Commodity_NMFC = {
    /**
     * Value of NMFC Prime. Contact your service representative if you need information concerning NMFC Codes.  Required if NMFC Container is present. For GFP Only.
     */
    PrimeCode: string;
    /**
     * Value of NMFC Sub. Contact your service representative if you need information concerning NMFC Codes.  Needs to be provided when the SubCode associated with the PrimeCode is other than 00. API defaults the sub value to 00 if not provided. If provided the Sub Code should be associated with the PrimeCode of the NMFC.
     */
    SubCode?: string;
};

