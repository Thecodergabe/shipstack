/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Descriptive data on physical location. May be used as an actual physical address (place where one could go), or as a container of address parts, which should be handled as a unit (such as a city-state-ZIP combination within the US). Country code is required. Postal code is required for postal aware countries.
 */
export type TransitTimeRecipient_address = {
    /**
     * The name of city, town, etc. <br>Example: Collierville
     */
    city?: string;
    /**
     * Identifying abbreviation for US state, canada Province. Format and presence of this field will vary, depending on the country. State code is required for US, CA, PR and not required for other countries. Conditional. Not used for Ground/SmartPost. Max length is 2.<br> Example: TN
     */
    stateOrProvinceCode?: string;
    /**
     * Identification of a region for mail/package delivery. Format and presence of this field will vary, depending on the country.Optional for non postal-aware countries. Max length is 10.<br> Example: 38127
     */
    postalCode: string;
    /**
     * The two-letter code used to identify a country. Max length is two.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    countryCode: string;
    /**
     * Indicates whether the address is residential (as opposed to commercial).<br> Example: false
     */
    residential?: boolean;
};

