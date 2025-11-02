/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Estimates } from '../models/Estimates';
import type { RateHolderCRID } from '../models/RateHolderCRID';
import type { Standards } from '../models/Standards';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Allows customers to get estimates on delivery standards.
     * Allows customers to get estimates on delivery standards between 3 or 5 digit ZIP Code&#8482;s for the selected mail classes. When requesting estimates for USPS_GROUND_ADVANTAGE two estimates will be returned (one for packages greater than or equal to a pound and one for packages less than a pound. This will be called out in the notes field) unless a weight is provided.
     * @param originZipCode The ZIP Code&#8482; where the package is shipped from using either all 9 digits, 5 digits, or first 3 digits.
     * @param destinationZipCode The ZIP Code&#8482; where the package is shipped to using either all 9 digits or 5 digits.
     * @param acceptanceDate Date Package will be mailed. Acceptance date may be up to 30 days in advance. Today's date is used if omitted.
     * @param acceptanceTime Time Package will be mailed. Today's time defaults to 8:00 am if omitted.
     * @param mailClass The Postal Service divides mail into different services, called "classes." Each class of mail has different features, service levels, postage prices, and presort requirements.
     * Note: Mail class enumerations "LETTERS", "CARDS", and FLATS" are specific to First Class Mail only.
     * @param destinationType Destination type indicator for non-expedited mailing. Defaults to 'STREET' if omitted.
     * @param serviceTypeCodes Service Type Codes are designators used to represent USPS classes of mail in conjunction with the type of Extra Service(s) being requested. For a list of Service Type Codes to utilize in the API call please refer to [Publication 199](http://postalpro.usps.com/pub199).
     * @param destinationEntryFacilityType Types of Facilities:
     * * NONE
     * * DESTINATION_NETWORK_DISTRIBUTION_CENTER
     * * DESTINATION_SECTIONAL_CENTER_FACILITY
     * * DESTINATION_DELIVERY_UNIT
     * * DESTINATION_SERVICE_HUB
     * @param weight The weight of the package being shipped. For getting estimates with `USPS_GROUND_ADVANTAGE`, if the package weight is greater than one pound then weight will be required. `weight` is also required for Priority Mail Next Day packages and must be no greater than 20 pounds. If the package is greater than 20 pounds, it will be treated as standard Priority Mail.
     * @param weightUom Weight Unit of Measurement
     * * lb - Pounds
     * @param length The length of the container, in dimensionsUOM. If partial dimensions are provided, an error response will return. `length`, `width`, and `height` are required only for Priority Mail Next Day packages.
     * @param height The height of the container, in dimensionsUOM. If partial dimensions are provided, an error response will return. `length`, `width`, and `height` are required only for Priority Mail Next Day packages.
     * @param width The width of the container, in dimensionsUOM. If partial dimensions are provided, an error response will return. `length`, `width`, and `height` are required only for Priority Mail Next Day packages.
     * @param dimensionsUom Dimensions unit of measure
     * * in - Inches
     * @param rateHolderCrid Customer Registration ID (CRID) associated with the business or mailer.
     * @param presort Indicates whether the Presort feature is to be used for this mail piece. Presort is only available for `mailClass`
     * values of `LETTERS`, `FLATS`, or `CARDS`.
     * @returns Estimates Successful Operation
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getEstimates(
        originZipCode: string,
        destinationZipCode: string,
        acceptanceDate?: string,
        acceptanceTime?: string,
        mailClass?: 'BOUND_PRINTED_MATTER' | 'FIRST-CLASS_PACKAGE_SERVICE' | 'CARDS' | 'FLATS' | 'LETTERS' | 'LIBRARY_MAIL' | 'MEDIA_MAIL' | 'PARCEL_SELECT' | 'PARCEL_SELECT_LIGHTWEIGHT' | 'PRIORITY_MAIL' | 'PRIORITY_MAIL_EXPRESS' | 'USPS_GROUND_ADVANTAGE' | 'ALL',
        destinationType: 'STREET' | 'PO_BOX' | 'HOLD_FOR_PICKUP' = 'STREET',
        serviceTypeCodes?: string,
        destinationEntryFacilityType?: 'NONE' | 'DESTINATION_NETWORK_DISTRIBUTION_CENTER' | 'DESTINATION_SECTIONAL_CENTER_FACILITY' | 'DESTINATION_DELIVERY_UNIT' | 'DESTINATION_SERVICE_HUB',
        weight?: number,
        weightUom: 'lb' = 'lb',
        length?: number,
        height?: number,
        width?: number,
        dimensionsUom: 'in' = 'in',
        rateHolderCrid?: RateHolderCRID,
        presort: boolean = false,
    ): CancelablePromise<Estimates | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/estimates',
            query: {
                'originZIPCode': originZipCode,
                'destinationZIPCode': destinationZipCode,
                'acceptanceDate': acceptanceDate,
                'acceptanceTime': acceptanceTime,
                'mailClass': mailClass,
                'destinationType': destinationType,
                'serviceTypeCodes': serviceTypeCodes,
                'destinationEntryFacilityType': destinationEntryFacilityType,
                'weight': weight,
                'weightUOM': weightUom,
                'length': length,
                'height': height,
                'width': width,
                'dimensionsUOM': dimensionsUom,
                'rateHolderCRID': rateHolderCrid,
                'presort': presort,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized request`,
                403: `Access is denied`,
                404: `Resource Not Found`,
                503: `Service Unavailable`,
            },
        });
    }
    /**
     * Allows customers to get standards.
     * Returns the average number of days it will take a package to arrive at its destination for the selected mail class. When requesting standards for USPS_GROUND_ADVANTAGE two standards will be returned (one for packages greater than or equal to a pound and one for packages less than a pound, this will be called out in the notes field), unless a weight is provided.
     * @param originZipCode The ZIP Code&#8482; where the package is shipped from using either all 9 digits, 5 digits, or first 3 digits.
     * @param destinationZipCode The ZIP Code&#8482; where the package is shipped to using either all 9 digits or 5 digits.
     * @param mailClass The Postal Service divides mail into different services, called "classes." Each class of mail has different features, service levels, postage prices, and presort requirements.
     * Note: Mail class enumerations "LETTERS", "CARDS", and FLATS" are specific to First Class Mail only.
     * @param destinationType Destination type indicator for non-expedited mailing. Defaults to 'STREET' if omitted.
     * @param serviceTypeCodes Service Type Codes are designators used to represent USPS classes of mail in conjunction with the type of Extra Service(s) being requested. For a list of Service Type Codes to utilize in the API call please refer to [Publication 199](http://postalpro.usps.com/pub199).
     * @param destinationEntryFacilityType Types of Facilities:
     * * NONE
     * * DESTINATION_NETWORK_DISTRIBUTION_CENTER
     * * DESTINATION_SECTIONAL_CENTER_FACILITY
     * * DESTINATION_DELIVERY_UNIT
     * * DESTINATION_SERVICE_HUB
     * @param weight The weight of the package being shipped. Required if looking up `USPS_GROUND_ADVANTAGE` estimates or standards. For getting estimates with `USPS_GROUND_ADVANTAGE`, if the package weight is greater than one pound then weight will be required.
     * @param length The length of the container, in dimensionsUOM. If partial dimensions are provided, an error response will return. `length`, `width`, and `height` are required only for Priority Mail Next Day packages.
     * @param height The height of the container, in dimensionsUOM. If partial dimensions are provided, an error response will return. `length`, `width`, and `height` are required only for Priority Mail Next Day packages.
     * @param width The width of the container, in dimensionsUOM. If partial dimensions are provided, an error response will return. `length`, `width`, and `height` are required only for Priority Mail Next Day packages.
     * @param dimensionsUom Dimensions unit of measure
     * * in - Inches
     * @param rateHolderCrid Customer Registration ID (CRID) associated with the business or mailer.
     * @param presort Indicates whether the Presort feature is to be used for this mail piece. Presort is only available for `mailClass`
     * values of `LETTERS`, `FLATS`, or `CARDS`.
     * @returns Standards Successful Operation
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getStandards(
        originZipCode: string,
        destinationZipCode: string,
        mailClass?: 'BOUND_PRINTED_MATTER' | 'FIRST-CLASS_PACKAGE_SERVICE' | 'CARDS' | 'FLATS' | 'LETTERS' | 'LIBRARY_MAIL' | 'MEDIA_MAIL' | 'PARCEL_SELECT' | 'PARCEL_SELECT_LIGHTWEIGHT' | 'PRIORITY_MAIL' | 'PRIORITY_MAIL_EXPRESS' | 'USPS_GROUND_ADVANTAGE' | 'ALL',
        destinationType: 'STREET' | 'PO_BOX' | 'HOLD_FOR_PICKUP' = 'STREET',
        serviceTypeCodes?: string,
        destinationEntryFacilityType?: 'NONE' | 'DESTINATION_NETWORK_DISTRIBUTION_CENTER' | 'DESTINATION_SECTIONAL_CENTER_FACILITY' | 'DESTINATION_DELIVERY_UNIT' | 'DESTINATION_SERVICE_HUB',
        weight?: number,
        length?: number,
        height?: number,
        width?: number,
        dimensionsUom: 'in' = 'in',
        rateHolderCrid?: RateHolderCRID,
        presort: boolean = false,
    ): CancelablePromise<Standards | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/standards',
            query: {
                'originZIPCode': originZipCode,
                'destinationZIPCode': destinationZipCode,
                'mailClass': mailClass,
                'destinationType': destinationType,
                'serviceTypeCodes': serviceTypeCodes,
                'destinationEntryFacilityType': destinationEntryFacilityType,
                'weight': weight,
                'length': length,
                'height': height,
                'width': width,
                'dimensionsUOM': dimensionsUom,
                'rateHolderCRID': rateHolderCrid,
                'presort': presort,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized request`,
                403: `Access is denied`,
                404: `Resource Not Found`,
                503: `Service Unavailable`,
            },
        });
    }
}
