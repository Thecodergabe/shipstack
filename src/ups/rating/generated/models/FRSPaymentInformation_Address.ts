/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Payer Address Container.  Address container may be present for FRS Payment Information type = 02 and required when the FRS Payment Information type = 03.
 */
export type FRSPaymentInformation_Address = {
    /**
     * Postal Code for UPS accounts billing address.  Postal Code  may be present when the FRS Payment Information type = 02 and type = 03.
     */
    PostalCode?: string;
    /**
     * Country or Territory code for the  UPS accounts & billing address.  Country or Territory Code is required when the FRS Payment Information type = 02 and type= 03.
     */
    CountryCode: string;
};

