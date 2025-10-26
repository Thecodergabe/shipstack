/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ClearanceItemDetail = {
    /**
     * Role in producing or supplying the item/commodity
     */
    role?: ClearanceItemDetail.role;
    /**
     * Unique identifier of the manufacturer of the commodity.For shipments to United States, refer to U.S. Customs and Border Protection website.
     */
    id?: string;
    contact?: {
        /**
         * Legal name of the manufacturer of the commodity.
         */
        companyName?: string;
    };
    /**
     * Address of the manufacturer
     */
    address?: {
        /**
         * Combination of number, street name, etc. At least one line is required for a valid physical address. Empty lines should not be included.98 Royal Crescent
         */
        streetLines?: Array<string>;
        /**
         * The name of city, town of the recipient.Example: Birmingham
         */
        city?: string;
        /**
         * It is used to identify the principal subdivisions (e.g., provinces or states) of countries. The Format and presence of this field may vary depending on the country. Example: CA.<a onclick='loadDocReference("canadaprovincecodes")'>click here to see State or Province Code</a>
         */
        stateOrProvinceCode?: string;
        /**
         * The US State and Canada Province codes. The Format and presence of this field may vary depending on the country. Example: 35209<a onclick='loadDocReference("postalawarecountries")'>click here to see Postal aware countries</a>
         */
        postalCode?: string;
        /**
         * The two-letter code used to identify a country.Example: US<a onclick='loadDocReference("countrycodes")'>click here to see Country codes</a>
         */
        countryCode?: string;
        /**
         * Indicate whether this address is residential (as opposed to commercial).Valid Values: True or False.
         */
        residential?: boolean;
    };
};
export namespace ClearanceItemDetail {
    /**
     * Role in producing or supplying the item/commodity
     */
    export enum role {
        MANUFACTURER = 'MANUFACTURER',
    }
}

