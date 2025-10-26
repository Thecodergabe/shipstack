/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the shipment level operational information.
 */
export type ShipmentOperationalDetail = {
    /**
     * Indicates the origin service area.<br>Example: A1
     */
    originServiceArea?: string;
    /**
     * Indicates the service code.<br>Example: 010
     */
    serviceCode?: string;
    /**
     * Indicates the airport identifier.<br>Example: DFW
     */
    airportId?: string;
    /**
     * Specifies the postal code.<br>Example: 38010<br><a onclick='loadDocReference("postalawarecountries")'>click here to see Postal aware countries</a>
     */
    postalCode?: string;
    /**
     * Indicates standard carrier alpha code.
     */
    scac?: string;
    /**
     * Specifies expected/estimated day of week of the delivery.<br>Example: TUE
     */
    deliveryDay?: string;
    /**
     * This is the origin Location identifier.<br>Example: 678
     */
    originLocationId?: string;
    /**
     * Indicate the two-letter country code.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>click here to see Country codes</a>
     */
    countryCode?: string;
    /**
     * Specifies astra description.<br>Example: SMART POST
     */
    astraDescription?: string;
    /**
     * Specifies origin location number.<br>Example: 243
     */
    originLocationNumber?: number;
    /**
     * Specifies delivery date for the shipment. The format is [YYYY-MM-DD]<br>Example: 2001-04-05
     */
    deliveryDate?: string;
    /**
     * FedEx Ground delivery features for which this shipment may be eligible.<br>Example: ["deliveryEligibilities"]
     */
    deliveryEligibilities?: Array<string>;
    /**
     * Indicates that this shipment is not eligible for money back guarantee.
     */
    ineligibleForMoneyBackGuarantee?: boolean;
    /**
     * Maximum expected transit time.<br>Example: SEVEN_DAYS
     */
    maximumTransitTime?: string;
    /**
     * This is the state or province code of the shipment destination location, and is not necessarily the same as the postal state.<br>Example: GA<br><a onclick='loadDocReference("canadaprovincecodes")'>click here to see State or Province Code</a>
     */
    destinationLocationStateOrProvinceCode?: string;
    /**
     * Text describing planned delivery.<br>Example: TUE - 15 OCT 10:30A
     */
    astraPlannedServiceLevel?: string;
    /**
     * Specifies the FedEx Destination Location Identifier.<br>Example: DALA
     */
    destinationLocationId?: string;
    /**
     * Standard transit time per origin, destination, and service.<br>Example: TWO_DAYS
     */
    transitTime?: string;
    /**
     * This is a placeholder for State or Province code.State code is required for US, CA, PR and not required for other countries. Conditional.<br>Example: CA<br><a onclick='loadDocReference("canadaprovincecodes")'>click here to see State or Province Code</a>
     */
    stateOrProvinceCode?: string;
    /**
     * Indicates destination location number.<br>Example: 876
     */
    destinationLocationNumber?: number;
    /**
     * Indicates packaging code.<br>Example: 03
     */
    packagingCode?: string;
    /**
     * This is committed date of delivery.<br>Example: 2019-10-15
     */
    commitDate?: string;
    /**
     * This is delivery time, as published in Service Guide.<br>Example: 10:30A
     */
    publishedDeliveryTime?: string;
    /**
     * This is ursa suffix code.<br>Example: Ga
     */
    ursaSuffixCode?: string;
    /**
     * This is ursa prefix code.<br>Example: XH
     */
    ursaPrefixCode?: string;
    /**
     * Specifies destination service area.<br>Example: A1
     */
    destinationServiceArea?: string;
    /**
     * Committed day of week of delivery.<br>Example: TUE
     */
    commitDay?: string;
    /**
     * Transit time based on customer eligibility.<br>Example: ONE_DAY
     */
    customTransitTime?: string;
};

