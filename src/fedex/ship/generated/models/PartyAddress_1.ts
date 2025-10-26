/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is detailed information on physical location. May be used as an actual physical address (place to which one could go), or as a container of address parts which should be handled as a unit (such as a city-state-ZIP combination within the US).
 */
export type PartyAddress_1 = {
    /**
     * This is the combination of number, street name, etc. Maximum length per line is 35.<br>Example: 10 FedEx Parkway, Suite 302.<p><i>Note:<ul><li>At least one line is required.</li><li>Streetlines more than 3 will be ignored.</li><li>Empty lines should not be included</li><li>For SmartPost Shipments, only 30 characters from the individual street lines will be printed on the labels.</li></ul></i></p>
     */
    streetLines?: Array<string>;
    /**
     * This is a placeholder for City Name. <br>Example: Beverly Hills
     */
    city?: string;
    /**
     * This is a placeholder for State or Province code.State code is required for US, CA, PR and not required for other countries. Conditional.<br>Example: CA.<br><a onclick='loadDocReference("canadaprovincecodes")'>click here to see State or Province Code</a>
     */
    stateOrProvinceCode?: string;
    /**
     * This is the Postal code.<br>This is Optional for non postal-aware countries.<br>Maximum length is 10.<br>Example: 65247<br><a onclick='loadDocReference("postalawarecountries")'>click here to see Postal aware countries</a>
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
    /**
     * Indicates the geographic coordinates. <br> example: geographicCoordinates
     */
    geographicCoordinates?: string;
};

