/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold the information for the FreightCollect and PrepaidThirdParty Address.  Note: The Address is required only when the billing option is Freight collect or ThirdParty.
 */
export type FRSPaymentInformation_Address = {
    /**
     * The postal code for the Ground Freight Pricing payment information address.
     */
    PostalCode?: string;
    /**
     * The country or territory code for the Ground Freight Pricing payment information address.
     */
    CountryCode: string;
};

