/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * AddressKeyFormat Container.
 */
export type Candidate_AddressKeyFormat = {
    /**
     * Name of business, company or person. Not returned if user selects the RegionalRequestIndicator.
     */
    ConsigneeName?: string;
    /**
     * Name of building. Not returned if user selects the RegionalRequestIndicator.
     */
    AttentionName?: string;
    /**
     * Address line (street number, street name and street type, and political division 1, political division 2 and postal code) used for street level information. Additional secondary information (apartment, suite, floor, etc.) Applicable to US and PR only.  Not returned if user selects the RegionalRequestIndicator.
     */
    AddressLine?: Array<string>;
    /**
     * Single entry containing in this order  Political Division 2, Political Division 1 and Post Code Primary Low and/or PostcodeExtendedLow.
     */
    Region?: string;
    /**
     * City or Town name.
     */
    PoliticalDivision2?: string;
    /**
     * State/Province.  Returned if the location is within a State/Province/Territory. For International: returned if user enters valid Country or Territory Code, and City/postal code and it has a match.  For Domestic addresses, the value must be a valid 2-character value (per US Mail standards).  For International the full State or Province name will be returned.
     */
    PoliticalDivision1?: string;
    /**
     * Low-end Postal Code. Returned for countries or territories with Postal Codes. May be alphanumeric.
     */
    PostcodePrimaryLow?: string;
    /**
     * Low-end extended postal code in a range. Example in quotes: Postal Code 30076-'1234'.  Only returned in candidate list. May be alphanumeric
     */
    PostcodeExtendedLow?: string;
    /**
     * Puerto Rico Political Division 3. Only Valid for Puerto Rico.
     */
    Urbanization?: string;
    /**
     * A country or territory code. Required to be returned.
     */
    CountryCode: string;
};

