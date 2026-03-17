/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for additional information for the third party UPS accounts address.
 */
export type BillThirdParty_Address = {
    /**
     * The origin street address including name and number (when applicable).
     */
    AddressLine?: Array<string>;
    /**
     * Origin city.
     */
    City?: string;
    /**
     * Origin state code.
     */
    StateProvinceCode?: string;
    /**
     * Origin postal code. The postal code must be the same as the UPS account pickup address postal code. Required for United States and Canadian UPS accounts and/or if the UPS account pickup address has a postal code. If the UPS account's pickup country or territory is US or Puerto Rico, the postal code is 5 or 9 digits. The character '-' may be used to separate the first five digits and the last four digits. If the UPS account's pickup country or territory is CA, the postal code is 6 alphanumeric characters whose format is A#A#A# where A is an uppercase letter and # is a digit.
     */
    PostalCode?: string;
    /**
     * Origin country or territory code. Refer to the Supported Country or Territory Tables located in the Appendix.
     */
    CountryCode: string;
};

