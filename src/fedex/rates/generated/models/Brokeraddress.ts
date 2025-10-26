/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is the broker address used for this shipment.
 */
export type Brokeraddress = {
    /**
     * This is the combination of number, street name, etc. <br>Note: At least one line is required and streetlines more than 3 will be ignored. Empty lines should not be included. Maximum Length per line is 35.<br>Example: [10 FedEx Parkway, Suite 302, .etc.]
     */
    streetLines?: Array<string>;
    /**
     * This is city name.<br> Example: Beverly Hills
     */
    city?: string;
    /**
     * This is the state Or Province Code. State code is required for US, CA, PR and not required for other countries. Conditional. Max length is 2.<br> Example: CA<br><a onclick='loadDocReference("canadaprovincecodes")'>Click here to see State Or Province Code</a>
     */
    stateOrProvinceCode?: string;
    /**
     * This is the postal code. <br> Example: 90210<br><a onclick='loadDocReference("postalawarecountries")'>Click here to see Postal aware countries</a>
     */
    postalCode?: string;
    /**
     * This is the country code.<br>US<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    countryCode?: string;
    /**
     * Indicate whether this address is residential (as opposed to commercial). <br> Valid values are TRUE and FALSE.
     */
    residential?: boolean;
    /**
     * Specify the classification of the address. <br> Example: residential
     */
    classification?: string;
    /**
     * Specify the geographic coordinates.<br> Example: geographicCoordinates
     */
    geographicCoordinates?: string;
    /**
     * Specify the urbanization code.
     */
    urbanizationCode?: string;
    /**
     * Specify the country name.<br> Example: India
     */
    countryName?: string;
};

