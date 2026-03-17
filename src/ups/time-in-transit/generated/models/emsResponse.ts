/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { services } from './services';
export type emsResponse = {
    /**
     * The date the shipment is tendered to UPS for shipping (can be dropped off at UPS or picked up by UPS).  This date may or may not be the UPS business date.
     *
     * Valid Format: YYYY-MM-DD
     */
    shipDate: string;
    /**
     * The time the shipment is tendered to UPS for shipping (can be dropped off at UPS or picked up by UPS).
     *
     * Valid Format: HH:MM:SS
     */
    shipTime: string;
    /**
     * Service Levels being returned.
     *
     * A = all service levels.
     *
     * Blank is the default for all Service Level values.
     */
    serviceLevel: string;
    /**
     * Represents the shipment type.
     *
     * Valid values: "02","03","04","07"
     * 02 - Document
     * 03 - Non-Document
     * 04 - WWEF
     * 07 - Pallet
     */
    billType: string;
    /**
     * Populated with valid duty types for international transactions only.
     *
     * Valid Duty Types: "01","02","03","04","05","06","07","08","09"
     * 01 - Dutiable
     * 02 - Non Dutiable
     * 03 - Low Value
     * 04 - Courier Remission
     * 05 - Gift
     * 06 - Military
     * 07 - Exception
     * 08 - Line Release
     * 09 - Low Value
     */
    dutyType?: string;
    /**
     * residential Indicator that was sent in on the request.
     *
     * Valid values: "01","02"
     *
     * 01 - Residential
     * 02 - Commercial
     */
    residentialIndicator: string;
    /**
     * Destination country name value
     */
    destinationCountryName: string;
    /**
     * Destination country code, conforms to ISO-defined country codes.
     */
    destinationCountryCode: string;
    /**
     * The shipment destination postal code.  Required for US domestic requests.
     *
     * Either 5, or 9-digit US zip codes must be used for U.S. addresses.  For non-US addresses, this is recommended for all countries that utilize postal codes.
     */
    destinationPostalCode?: string;
    /**
     * The shipment destination postal code low range.  Value may or may not differ from destinationPostalCode.
     *
     * Either 5, or 9-digit US zip codes must be used for U.S. addresses.  For non-US addresses, this is recommended for all countries that utilize postal codes.
     */
    destinationPostalCodeLow?: string;
    /**
     * The shipment destination postal code high range.  Value may or may not differ from destinationPostalCode.
     *
     * Either 5, or 9-digit US zip codes must be used for U.S. addresses.  For non-US addresses, this is recommended for all countries that utilize postal codes.
     */
    destinationPostalCodeHigh?: string;
    /**
     * The shipment destination state or province.
     *
     * For U.S. addresses, the value will be a valid 2-Character value (per U.S. Mail Standards).
     *
     * For non-U.S. addresses the full State or Province name will be returned.
     */
    destinationStateProvince?: string;
    /**
     * The shipment destination city.
     *
     * Required for International requests for those countries that do not utilize postal codes.
     */
    destinationCityName?: string;
    /**
     * Origin country name value
     */
    originCountryName: string;
    /**
     * Origin country code, conforms to ISO-defined country codes.
     */
    originCountryCode: string;
    /**
     * The shipment origin postal code.  Required for US domestic requests.
     *
     * Either 5, or 9-digit US zip codes must be used for U.S. addresses.  For non-US addresses, this is recommended for all countries that utilize postal codes.
     */
    originPostalCode?: string;
    /**
     * The shipment origin postal code low range.  Value may or may not differ from destinationPostalCode.
     *
     * Either 5, or 9-digit US zip codes must be used for U.S. addresses.  For non-US addresses, this is recommended for all countries that utilize postal codes.
     */
    originPostalCodeLow?: string;
    /**
     * The shipment origin postal code high range.  Value may or may not differ from destinationPostalCode.
     *
     * Either 5, or 9-digit US zip codes must be used for U.S. addresses.  For non-US addresses, this is recommended for all countries that utilize postal codes.
     */
    originPostalCodeHigh?: string;
    /**
     * The shipment origin state or province.
     *
     * For U.S. addresses, the value will be a valid 2-Character value (per U.S. Mail Standards).
     *
     * For non-U.S. addresses the full State or Province name will be returned.
     */
    originStateProvince?: string;
    /**
     * The shipment origin city.
     *
     * Required for International requests for those countries that do not utilize postal codes.
     */
    originCityName?: string;
    /**
     * Shipment weight.  Value is only required for international shipment.
     *
     * Defaults to 0.0
     */
    weight?: string;
    /**
     * Returned on response when weight was present on the request.
     */
    weightUnitOfMeasure?: string;
    /**
     * Shipment contents value. Value is only required for international shipment.
     *
     * Defaults to 0.0
     */
    shipmentContentsValue?: string;
    /**
     * Returned on response when shipmentContentsValue was present on the request.
     */
    shipmentContentsCurrencyCode?: string;
    /**
     * Returns TRUE if the shipment dates fall within a defined peak date range. When the guarantee is suspended, it is suspended for all services in the response.
     *
     * The logic for determining if guarantees are suspended applies per origin country.
     *
     * The following will be used to determine if a shipment falls within a defined peak date range: shipDate (from the response), deliveryDate (from the response), server Date.
     *
     * Defined peak date range (range for when guarantees are suspended) is inclusive of start and end dates.
     */
    guaranteeSuspended: boolean;
    /**
     * Number of services being returned in the services array.
     */
    numberOfServices: number;
    services?: Array<services>;
};

