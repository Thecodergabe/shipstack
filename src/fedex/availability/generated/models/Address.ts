/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is detailed information on physical location. May be used as an actual physical address (place to which one could go), or as a container of address parts which should be handled as a unit (such as a city-state-ZIP combination within the US). Country code is required. Postal code is required for postal aware countries.
 */
export type Address = {
    /**
     * This is a combination of number, street name, etc. <br>Note: At least one line is required and streetlines more than 3 will be ignored. Empty lines should not be included.<br>Example: [\"10 FedEx Parkway"\, \"Suite 302"\]
     */
    streetLines?: Array<string>;
    /**
     * This is a placeholder for City Name. <br> Example: Beverly Hills
     */
    city?: string;
    /**
     * This is a placeholder for State or Province code. <br> Example: CA<br><a onclick='loadDocReference("canadaprovincecodes")'>Click here to see State/Province Code</a>
     */
    stateOrProvinceCode?: string;
    /**
     * This is the Postal code. This is Optional for non postal-aware countries. Max length is 10.<br> Example: 65247<br><a onclick='loadDocReference("postalawarecountries")'>Click here to see Postal aware countries</a>
     */
    postalCode?: any;
    /**
     * This is a Two-letter country code.Max length is two.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    countryCode: any;
    /**
     * Indicate whether this address is Residential as opposed to Commercial.
     */
    residential?: boolean;
};

