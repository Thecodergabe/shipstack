/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is detailed information on physical location. May be used as an actual physical address (place to which one could go), or as a container of address parts which should be handled as a unit (such as a city-state-ZIP combination within the U.S.).
 */
export type Address_2 = {
    /**
     * This is a placeholder for City Name. <br> Example: Beverly Hills
     */
    city?: string;
    /**
     * This is a placeholder for State or Province code. State code is required for US, CA, PR and not required for other countries. Conditional. Max length is 2 .<br> Example: CA <br><a onclick='loadDocReference("canadaprovincecodes")'>Click here to see State Or Province Code</a>
     */
    stateOrProvinceCode?: string;
    /**
     * Indicate the Postal code. This is optional for non postal-aware countries. Maximum length is 10.<br> Example: 65247<br><a onclick='loadDocReference("postalawarecountries")'>Click here to see Postal aware countries</a>
     */
    postalCode?: string;
    /**
     * This is the two-letter country code. Maximum length is 2.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    countryCode?: string;
    /**
     * Indicate whether this address is residential (as opposed to commercial).
     */
    residential?: boolean;
};

