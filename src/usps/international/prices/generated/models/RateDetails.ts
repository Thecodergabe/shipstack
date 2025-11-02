/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RateDetails_fees } from './RateDetails_fees';
/**
 * Informative details about the price.
 */
export type RateDetails = {
    /**
     * The stock keeping unit for the designated rate.
     */
    SKU?: string;
    /**
     * The description of the price.
     */
    description?: string;
    /**
     * The type of price applied.
     * * Valid Options for Domestic Prices include: 'RETAIL','COMMERCIAL' & 'CONTRACT'
     * * Valid Options for International Prices include: 'RETAIL', 'COMMERCIAL', 'COMMERCIAL_BASE', 'COMMERCIAL_PLUS' & 'CONTRACT'
     */
    priceType?: RateDetails.priceType;
    /**
     * The postage price.
     */
    price?: number;
    /**
     * The calculated weight for the package based on user input.  The greater of dimWeight and weight will be used to calculated the rate.
     */
    weight?: number;
    /**
     * The calculated dimensional weight for the package based on user provided dimensions. The greater of dimWeight and weight will be used to calculated the rate.
     */
    dimWeight?: number;
    /**
     * The fees associated with the package.
     */
    fees?: Array<RateDetails_fees>;
    /**
     * Effective start date of the rate.
     */
    startDate?: string;
    /**
     * Effective end date of the rate.  If blank the rate doesn't have an end date as of yet.
     */
    endDate?: string;
    /**
     * The mail class of the price.
     */
    mailClass?: string;
    /**
     * Indicates the price group for a given `destinationCountryCode`, `mailClass`, `mailingDate`, and `rateIndicator`.
     */
    zone?: string;
    /**
     * Processing category for the provided rate, this value can be used in the international labels API to ensure the provided rate is applied.
     *
     * * `CARDS` - Cards, translates to PTR code `0`
     * * `LETTERS` - Letters, translates to PTR code `1`
     * * `FLATS` - Flats, translates to PTR code `2`
     * * `MACHINABLE` - Machinable Parcel, translates to PTR code `3`
     * * `IRREGULAR` - Irregular Parcel, translates to PTR code `4` - This option is deprecated in favor of `NONSTANDARD` and will no longer be returned as of 01/19/2025.
     * * `NON_MACHINABLE` - Non-machinable parcel, translates to PTR code `5` - This option is deprecated in favor of `NONSTANDARD` and will no longer be returned as of 01/19/2025.
     * * `NONSTANDARD` - Nonstandard Parcel, translates to PTR code `5`
     * * `CATALOGS` - Catalogs, translates to PTR code `C`
     * * `OPEN_AND_DISTRIBUTE` - Open and Distribute, translates to PTR code `O`
     * * `RETURNS` - Returns, translates to PTR code `R`
     * * `SOFT_PACK_MACHINABLE` - Soft Pack Machinable, translates to PTR code `S`
     * * `SOFT_PACK_NON_MACHINABLE` - Soft Package Non-machinable, translates to PTR code `T`
     *
     */
    processingCategory?: RateDetails.processingCategory;
    /**
     * Two-digit rate indicator code for the provided rate, this value can be used in the international labels API to ensure the provided rate is applied.
     */
    rateIndicator?: string;
    /**
     * Destination Entry Facility type for the provided rate, this value can be used in the international labels API to ensure the provided rate is applied.
     *
     * * `NONE` - None, translates to PTR code `N`
     * * `INTERNATIONAL_SERVICE_CENTER` - International Service Center, translates to PTR code `I`
     *
     */
    destinationEntryFacilityType?: RateDetails.destinationEntryFacilityType;
};
export namespace RateDetails {
    /**
     * The type of price applied.
     * * Valid Options for Domestic Prices include: 'RETAIL','COMMERCIAL' & 'CONTRACT'
     * * Valid Options for International Prices include: 'RETAIL', 'COMMERCIAL', 'COMMERCIAL_BASE', 'COMMERCIAL_PLUS' & 'CONTRACT'
     */
    export enum priceType {
        RETAIL = 'RETAIL',
        COMMERCIAL = 'COMMERCIAL',
        COMMERCIAL_BASE = 'COMMERCIAL_BASE',
        COMMERCIAL_PLUS = 'COMMERCIAL_PLUS',
        CONTRACT = 'CONTRACT',
    }
    /**
     * Processing category for the provided rate, this value can be used in the international labels API to ensure the provided rate is applied.
     *
     * * `CARDS` - Cards, translates to PTR code `0`
     * * `LETTERS` - Letters, translates to PTR code `1`
     * * `FLATS` - Flats, translates to PTR code `2`
     * * `MACHINABLE` - Machinable Parcel, translates to PTR code `3`
     * * `IRREGULAR` - Irregular Parcel, translates to PTR code `4` - This option is deprecated in favor of `NONSTANDARD` and will no longer be returned as of 01/19/2025.
     * * `NON_MACHINABLE` - Non-machinable parcel, translates to PTR code `5` - This option is deprecated in favor of `NONSTANDARD` and will no longer be returned as of 01/19/2025.
     * * `NONSTANDARD` - Nonstandard Parcel, translates to PTR code `5`
     * * `CATALOGS` - Catalogs, translates to PTR code `C`
     * * `OPEN_AND_DISTRIBUTE` - Open and Distribute, translates to PTR code `O`
     * * `RETURNS` - Returns, translates to PTR code `R`
     * * `SOFT_PACK_MACHINABLE` - Soft Pack Machinable, translates to PTR code `S`
     * * `SOFT_PACK_NON_MACHINABLE` - Soft Package Non-machinable, translates to PTR code `T`
     *
     */
    export enum processingCategory {
        CARDS = 'CARDS',
        LETTERS = 'LETTERS',
        FLATS = 'FLATS',
        MACHINABLE = 'MACHINABLE',
        IRREGULAR = 'IRREGULAR',
        NON_MACHINABLE = 'NON_MACHINABLE',
        NONSTANDARD = 'NONSTANDARD',
        CATALOGS = 'CATALOGS',
        OPEN_AND_DISTRIBUTE = 'OPEN_AND_DISTRIBUTE',
        RETURNS = 'RETURNS',
        SOFT_PACK_MACHINABLE = 'SOFT_PACK_MACHINABLE',
        SOFT_PACK_NON_MACHINABLE = 'SOFT_PACK_NON_MACHINABLE',
    }
    /**
     * Destination Entry Facility type for the provided rate, this value can be used in the international labels API to ensure the provided rate is applied.
     *
     * * `NONE` - None, translates to PTR code `N`
     * * `INTERNATIONAL_SERVICE_CENTER` - International Service Center, translates to PTR code `I`
     *
     */
    export enum destinationEntryFacilityType {
        NONE = 'NONE',
        INTERNATIONAL_SERVICE_CENTER = 'INTERNATIONAL_SERVICE_CENTER',
    }
}

