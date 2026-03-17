/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold the Credit card Billing Address.  It is required to provide billing address if credit card information is provided and when the ShipFrom country or territory is the US, PR, and CA.
 */
export type CreditCard_Address = {
    /**
     * Address Line 1 of the credit card billing address. Usually Street address information.
     */
    AddressLine: Array<string>;
    /**
     * City of the credit card billing address.
     */
    City: string;
    /**
     * State or province code of the credit card billing address.
     */
    StateProvinceCode?: string;
    /**
     * Credit card billing addressee postal code.
     */
    PostalCode?: string;
    /**
     * Credit card billing address country or territory code. Must be a valid UPS Billing country or territory code.
     */
    CountryCode: string;
};

