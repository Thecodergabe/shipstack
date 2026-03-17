/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address where the package was actually delivered. Contrast with destinationAddress, which is the location to which the package was intended to be delivered. Addresses may differ due to delivery to a behavior, hold at FedEx location, etc.
 */
export type AddressVO1 = {
    /**
     * Specifies the FedEx classification type for an address. <br>Valid values are BUSINESS, RESIDENTIAL, MIXED, UNKNOWN.<br> Example: BUSINESS
     */
    addressClassification?: string;
    /**
     * Placeholder to indicate whether the address is residential (as opposed to commercial).
     */
    residential?: boolean;
    /**
     * Combination of number, street name, etc. At least one line is required for a valid physical address; empty lines should not be included.<br> Example: ["1043 North Easy Street", "Suite 999"]. <br>Note: Street lines is shown in response only in secured flow. For non secured flow, street lines is not shown in the response.
     */
    streetLines?: Array<string>;
    /**
     * Conditional<br>The name of the city, town, etc. <br> Example: SEATTLE
     */
    city?: string;
    /**
     * This is a placeholder for State or Province code. <br> Example: CA<br><a onclick='loadDocReference("canadaprovincecodes")'>Click here to see State/Province Code</a>
     */
    stateOrProvinceCode?: string;
    /**
     * Placeholder to specify postal code for the address. Postal Code is required for postal-aware countries.<br> Example: 98101<br><a onclick='loadDocReference("postalawarecountries")'>Click here to see Postal aware countries</a>
     */
    postalCode?: string;
    /**
     * Placeholder for country code (2 characters) for the address.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    countryCode?: string;
    /**
     * Field holds the fully spelled out name of a country.<br> Example: United States
     */
    countryName?: string;
};

