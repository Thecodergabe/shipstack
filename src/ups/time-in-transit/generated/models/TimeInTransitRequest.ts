/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * N/A
 */
export type TimeInTransitRequest = {
    /**
     * The country code of the origin shipment.
     * Valid Values:
     * Must conform to the ISO-defined, two-letter country or territory codes.  Refer to Country or Territory Codes in the Appendix above for valid values.
     */
    originCountryCode: string;
    /**
     * The shipment origin state or province.  For U.S. addresses, the value must be a valid 2-character value (per U.S. Mail standards)
     * For non-U.S. addresses the full State or Province name should be provided.
     */
    originStateProvince?: string;
    /**
     * The shipment origin city. Required for International requests for those countries that do not utilize postal codes.
     */
    originCityName?: string;
    /**
     * The shipment origin town. Town is a subdivision of city.
     */
    originTownName?: string;
    /**
     * Required for Domestic requests.  The shipment origin postal code.
     * Either the 5, or 9-digit US zip codes must be used for U.S. addresses.  For non-U.S. addresses, this is recommended for all countries that utilize postal codes.
     */
    originPostalCode?: string;
    /**
     * The country code of the destination.
     * Valid values:
     * Must conform to ISO-defined country codes.
     */
    destinationCountryCode?: string;
    /**
     * The shipment destination state or province.  For U.S. addresses, the value must be a valid 2-character value (per U.S. Mail standards).
     * For non-U.S. addresses the full State or Province name should be provided.
     */
    destinationStateProvince?: string;
    /**
     * The shipment destination city. Required for International Requests for those countries that do not utilize postal codes.
     */
    destinationCityName?: string;
    /**
     * The shipment destination town.  Town is a subdivision of city.
     */
    destinationTownName?: string;
    /**
     * The shipment destination postal code.
     * Required for Domestic requests. Either 5, or 9-digit U.S. zip codes must be used for U.S. addresses.  For non-U.S. addresses, this is recommended for all countries that utilize postal codes.
     */
    destinationPostalCode?: string;
    /**
     * Indicates if address is residential or commercial. Required for Domestic requests.
     *
     * Valid values: "01", "02"
     *
     * 01 = Residential
     * 02 = Commercial
     *
     * Defaults to commercial for International Requests.
     */
    residentialIndicator?: string;
    /**
     * The date the shipment is tendered to UPS for shipping (can be dropped off at UPS or picked up by UPS).  Allowed range is up to 60 days in future and 35 days in past. This date may or may not be the UPS business date.
     *
     * Format is YYYY-MM-DD.
     *
     * YYYY = 4 digit year;
     *
     * MM = 2 digit month, valid values 01-12;
     *
     * DD = 2 digit day of month, valid values 01-31
     * If no value is provided, defaults to current system date.
     */
    shipDate?: string;
    /**
     * The time the shipment is tendered to UPS for shipping (can be dropped off at UPS or picked up by UPS).
     * Format is HH:MM:SS
     *
     * Defaults to current time if not provided.
     */
    shipTime?: string;
    /**
     * The weight of the shipment. Required for International requests.
     *
     * Note: If decimal values are used, valid values will be rounded to the tenths.
     *
     * Note: Maximum value is 70 kilograms or 150 pounds.
     */
    weight?: number;
    /**
     * Required for International requests and when weight value is provided.
     *
     * Valid Values: "LBS", "KGS"
     */
    weightUnitOfMeasure?: string;
    /**
     * The monetary value of shipment contents.
     *
     * Required when origin country does not equal destination country and BillType is 03 (non-documented) or 04 (WWEF)
     *
     * Required when origin country does not equal destination country, and destination country = CA, and BillType = 02 (document).
     *
     * Note: If decimal values are used, valid values will be rounded to the tenths.
     */
    shipmentContentsValue?: number;
    /**
     * The unit of currency used for values. Required if ShipmentContentsValue is populated.
     * Valid value: must conform to ISO standards.
     */
    shipmentContentsCurrencyCode?: string;
    /**
     * Required for International Requests.
     * Valid values: "02","03","04"
     * 02 - Document
     * 03 - Non Document
     * 04 - WWEF (Pallet)
     */
    billType?: string;
    /**
     * Used to bypass address validation when the address has already been validated by the calling application.
     *
     * Valid values: true, false
     *
     * Defaults to true
     * Note: not to be exposed to external customers.
     */
    avvFlag?: boolean;
    /**
     * Sets the number of packages in shipment.  Default value is 1.
     */
    numberOfPackages?: number;
    /**
     * Sets the indicator for an international Freight Pallet shipment that is going to be dropped off by shipper to a UPS facility.  The indicator is used when the Bill Type is "04".
     *
     * Valid values: "0", "1".
     *
     * 0 = WWDTProcessIF.PICKUP_BY_UPS
     * 1 = WWDTProcessIf.DROPOFF_BY_SHIPPER
     *
     * The default value is "0"
     */
    dropOffAtFacilityIndicator?: number;
    /**
     * Sets the indicator for an international Freight Pallet shipment that is going to be pick-up by consignee in a destination facility.  The indicator is used when the Bill Type is "04".
     *
     * Valid values: "0", "1".
     *
     * 0 = WWDTProcessIF.DELIVERY_BY_UPS
     * 1 = WWDTProcessIf.PICKUP_BY_CONSIGNEE
     *
     * The default value is "0"
     */
    holdForPickupIndicator?: number;
    /**
     * Used to get back a full list of services - bypassing current WWDT business rules to remove services from the list being returned to clients for US domestic that are slower than UPS Ground.
     *
     * Default value is false.
     */
    returnUnfilterdServices?: boolean;
    /**
     * Sets the limit for the number of candidates returned in candidate list.
     *
     * Default value is 200.
     */
    maxList?: number;
    /**
     * Sets the indicator for premier time in transit when the shipment contains a premier package.
     *
     * Valid values: “00”, “01”.
     *
     * 00 = Non-premier time in transit.
     *
     * 01 = Premier time in transit.
     *
     * The default value is “00”.
     */
    premierIndicator?: string;
};

