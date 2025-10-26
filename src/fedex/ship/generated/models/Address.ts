/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Descriptive data for a physical location. May be used as an actual physical address (place to which one could go), or as a container of "address parts" which should be handled as a unit (such as a city-state-ZIP combination within the US).
 */
export type Address = {
    /**
     * This is the combination of number, street name, etc. <br>Note: At least one line is required and streetlines more than 3 will be ignored. Empty lines should not be included. Maximum length per line is 35.<br>Example: [10 FedEx Parkway, Suite 302, .etc.]
     */
    streetLines?: Array<string>;
    /**
     * This is a placeholder for City Name.<br>Note: This is conditional and not required in all the requests.<br>Note: It is recommended for Express shipments for the most accurate ODA and OPA surcharges.<br>Example: Beverly Hills
     */
    city?: string;
    /**
     * This is a placeholder for State or Province code.State code is required for US, CA, PR and not required for other countries. Conditional.<br>Example: CA<br><a onclick='loadDocReference("canadaprovincecodes")'>click here to see State or Province Code</a>
     */
    stateOrProvinceCode?: string;
    /**
     * Indicate the Postal code. This is Optional for non postal-aware countries. Maximum length is 10.<br> Example: 65247<br><a onclick='loadDocReference("postalawarecountries")'>click here to see Postal aware countries</a>
     */
    postalCode?: string;
    /**
     * This is the two-letter country code.<br>Maximum length is 2.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>click here to see Country codes</a>
     */
    countryCode?: string;
    /**
     * Indicate whether this address is residential (as opposed to commercial).
     */
    residential?: boolean;
};

