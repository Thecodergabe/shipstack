/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the Operational Details.
 */
export type OperationalDetail = {
    /**
     * Indicate the location ID of the origin of shipment. <br> Example: YBZA
     */
    originLocationIds?: Array<string>;
    /**
     * Indicate the delivery commitment day.<br> Example: MON
     */
    commitDays?: Array<string>;
    /**
     * Indicate the service code. <br> Example: 06
     */
    serviceCode?: string;
    /**
     * Specify the Airport Id. <br> Example: MEM
     */
    airportId?: string;
    /**
     * Indicate the Standard Carrier Alpha Code (SCAC) is a privately controlled US code used to identify vessel operating common carriers (VOCC). It is typically two to four letters long.
     */
    scac?: string;
    /**
     * Specify origin service area.<br> Example: AM
     */
    originServiceAreas?: Array<string>;
    /**
     * Specify the delivery commitment day. <br> Example: SAT
     */
    deliveryDay?: string;
    /**
     * Specify the origin location ID.<br> Example: 6121
     */
    originLocationNumbers?: Array<number>;
    /**
     * Indicate the destination postal code.<br> Example: 38017
     */
    destinationPostalCode?: string;
    /**
     * Indicate the shipment Commit Date. <br> Example: 2019-07-22T08:30:00
     */
    commitDate?: string;
    /**
     * Indicate the ASTRA description for the label. <br> Example: XXXL1ST
     */
    astraDescription?: string;
    /**
     * Indicate the delivery date. <br> Example: 2019-07-22T08:30:00
     */
    deliveryDate?: string;
    /**
     * Indicate the delivery eligibilities.
     */
    deliveryEligibilities?: Array<string>;
    /**
     * indicate if ineligible For Money Back Guarantee.
     */
    ineligibleForMoneyBackGuarantee?: boolean;
    /**
     * Specify Maximum transit time. <br> Example: THREE_DAYS
     */
    MaximumTransitTime?: string;
    /**
     * Indicate Astra Planned Service Level. <br> Example: astraPlannedServicelevel
     */
    astraPlannedServiceLevel?: string;
    /**
     * Indicate Destination Location Ids. <br> Example: HKAA
     */
    destinationLocationIds?: Array<string>;
    /**
     * Indicate destination location State Or Province code. <br> Example: TN<br><a onclick='loadDocReference("canadaprovincecodes")'>Click here to see State Or Province Code</a>
     */
    destinationLocationStateOrProvinceCodes?: Array<string>;
    /**
     * Indicate the Transit Time in days. <br> Example: THREE_DAYS
     */
    transitTime?: string;
    /**
     * Indicate the Packaging Code. <br> Example: M1M1M1
     */
    packagingCode?: string;
    /**
     * Indicate the Destination Location Numbers. <br> Example: 386
     */
    destinationLocationNumbers?: Array<number>;
    /**
     * Indicate the Published Delivery Time. <br> Example: THREE_DAYS
     */
    publishedDeliveryTime?: string;
    /**
     * Indicate the Country Code.<br>Example: [ US, IN]<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    countryCodes?: Array<string>;
    /**
     * Specifies state Or Province Code. State code is required for US, CA, PR and not required for other countries. Conditional. Max length is 2. <br> Example: TN
     */
    stateOrProvinceCodes?: Array<string>;
    /**
     * This is FedEx URSA Prefix Code. <br> Example: PrefixCode
     */
    ursaPrefixCode?: string;
    /**
     * This is URSA Suffix Code. <br> Example: SuffixCode
     */
    ursaSuffixCode?: string;
    /**
     * This is Destination Service Areas. <br> Example: A2
     */
    destinationServiceAreas?: Array<string>;
    /**
     * This is Origin Postal Codes. <br> Example: M1M1M1
     */
    originPostalCodes?: Array<string>;
    /**
     * This is Custom Transit Time in days. <br> Example: THREE_DAYS
     */
    customTransitTime?: string;
};

