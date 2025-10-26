/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is detailed information on physical location. May be used as an actual physical address (place to which one could go), or as a container of address parts which should be handled as a unit (such as a city-state-ZIP combination within the US).
 */
export type PartyAddress_2 = {
    /**
     * Combination of number, street name, etc. At least one line is required for a valid physical address. Empty lines should not be included. Max Length is 35.<br>Example: [1550 Union Blvd,Suite 302]
     */
    streetLines: Array<string>;
    /**
     * The name of city, town of the recipient.Max length is 35.<br>Example: Beverly Hills
     */
    city: string;
    /**
     * It is used to identify the principal subdivisions (e.g., provinces or states) of countries. The Format and presence of this field may vary depending on the country. Note: For specific countries, such as the United States and Canada, and Puerto Rico, there is a two-character state, province, codes limit . Example: TX
     */
    stateOrProvinceCode?: string;
    /**
     * This is the postal code.<br>Note: This is Optional for non postal-aware countries. Maximum length is 10.<br>Example: 65247<br><a onclick='loadDocReference("postalawarecountries")'>click here to see Postal aware countries</a>
     */
    postalCode?: string;
    /**
     * This is the two-letter country code.<br>Maximum length is 2.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>click here to see Country codes</a>
     */
    countryCode: string;
    /**
     * Indicates whether this address is residential (as opposed to commercial).<br>Example: false
     */
    residential?: boolean;
};

