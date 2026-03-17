/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for additional information for the third party UPS accounts address.
 */
export type BillThirdParty_Address = {
    /**
     * The postal code for the UPS accounts pickup address. The pickup postal code is the one that was entered in the UPS system when the account was set-up.  The postal code must be the same as the UPS Bill Third Party account number pickup address postal code.
     *
     * Required for United States and Canadian UPS accounts and/or if the UPS account pickup address has a postal code.
     * If the UPS accounts pickup country or territory is US or Puerto Rico, the postal code is 5 or 9 digits.
     *
     * The character - may be used to separate the first five digits and the last four digits.
     *
     * If the UPS accounts pickup country or territory is CA, the postal code is 6 alphanumeric characters whose format is A#A#A# where A is an uppercase letter and # is a digit.
     *
     */
    PostalCode?: string;
    /**
     * The country or territory code for the UPS accounts pickup address.
     */
    CountryCode: string;
};

