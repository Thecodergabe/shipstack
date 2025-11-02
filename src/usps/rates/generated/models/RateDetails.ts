/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
     * * Valid Options for Domestic Prices include: 'RETAIL','COMMERCIAL',  'CONTRACT' & 'NSA' (deprecated)
     * * Valid Options for International Prices include: 'RETAIL', 'COMMERCIAL', 'COMMERCIAL_BASE', 'COMMERCIAL_PLUS', 'CONTRACT' & 'NSA' (deprecated)
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
    fees?: Array<{
        /**
         * The name of the fee.
         */
        name?: string;
        /**
         * The pricing SKU for the fee.
         */
        SKU?: string;
        /**
         * The price for the fee.
         */
        price?: number;
    }>;
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
     * Indicates the calculated zone between the provided `originZIPCode` and `destinationZIPCode` for a given `mailClass`, `mailingDate`, and `weight`.
     */
    zone?: string;
    /**
     * A business friendly name for a product that can be displayed to a customer on a shipping portal
     */
    productName?: string;
    /**
     * A business friendly description for a product that can be displayed to a customer on a shipping portal
     */
    productDefinition?: string;
    /**
     * Processing category for the provided rate, this value can be used in the labels API to ensure the provided rate is applied.
     *
     * * `CARDS` - Cards, translates to PTR code `0`
     * * `LETTERS` - Letters, translates to PTR code `1`
     * * `FLATS` - Flats, translates to PTR code `2`
     * * `MACHINABLE` - Machinable Parcel, translates to PTR code `3`
     * * `IRREGULAR` - Irregular Parcel, translates to PTR code `4`
     * * `NON_MACHINABLE` - Non-machinable parcel, translates to PTR code `5`
     * * `NONSTANDARD` - Nonstandard parcel, translates to PTR code `5`
     * * `CATALOGS` - Catalogs, translates to PTR code `C`
     * * `OPEN_AND_DISTRIBUTE` - Open and Distribute, translates to PTR code `O`
     * * `RETURNS` - Returns, translates to PTR code `R`
     * * `SOFT_PACK_MACHINABLE` - Soft Pack Machinable, translates to PTR code `S`
     * * `SOFT_PACK_NON_MACHINABLE` - Soft Package Non-machinable, translates to PTR code `T`
     *
     * Note:
     * * `IRREGULAR` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
     * * `NON_MACHINABLE` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
     *
     */
    processingCategory?: RateDetails.processingCategory;
    /**
     * Two-digit rate indicator code for the provided rate, this value can be used in the labels API to ensure the provided rate is applied.
     */
    rateIndicator?: string;
    /**
     * Destination Entry Facility type for the provided rate, this value can be used in the labels API to ensure the provided rate is applied.
     *
     * * `NONE` - None, translates to PTR code `N`
     * * `AREA_DISTRIBUTION_CENTER` - Area Distribution Center, translates to PTR code `A`
     * * `AUXILIARY_SERVICE_FACILITY` - Auxiliary Service Facility, translates to PTR code `F`
     * * `DESTINATION_DELIVERY_UNIT` - Destination Delivery Unit, translates to PTR code `D`
     * * `DESTINATION_NETWORK_DISTRIBUTION_CENTER` - Destination Network Distribution Center, translates to PTR code `B`
     * * `DESTINATION_SECTIONAL_CENTER_FACILITY` - Destination Sectional Center Facility, translates to PTR code `S`
     * * `DESTINATION_SERVICE_HUB` - Destination Service Hub, translates to PTR code `H`
     *
     */
    destinationEntryFacilityType?: RateDetails.destinationEntryFacilityType;
};
export namespace RateDetails {
    /**
     * The type of price applied.
     * * Valid Options for Domestic Prices include: 'RETAIL','COMMERCIAL',  'CONTRACT' & 'NSA' (deprecated)
     * * Valid Options for International Prices include: 'RETAIL', 'COMMERCIAL', 'COMMERCIAL_BASE', 'COMMERCIAL_PLUS', 'CONTRACT' & 'NSA' (deprecated)
     */
    export enum priceType {
        RETAIL = 'RETAIL',
        COMMERCIAL = 'COMMERCIAL',
        COMMERCIAL_BASE = 'COMMERCIAL_BASE',
        COMMERCIAL_PLUS = 'COMMERCIAL_PLUS',
        CONTRACT = 'CONTRACT',
        NSA = 'NSA',
    }
    /**
     * Processing category for the provided rate, this value can be used in the labels API to ensure the provided rate is applied.
     *
     * * `CARDS` - Cards, translates to PTR code `0`
     * * `LETTERS` - Letters, translates to PTR code `1`
     * * `FLATS` - Flats, translates to PTR code `2`
     * * `MACHINABLE` - Machinable Parcel, translates to PTR code `3`
     * * `IRREGULAR` - Irregular Parcel, translates to PTR code `4`
     * * `NON_MACHINABLE` - Non-machinable parcel, translates to PTR code `5`
     * * `NONSTANDARD` - Nonstandard parcel, translates to PTR code `5`
     * * `CATALOGS` - Catalogs, translates to PTR code `C`
     * * `OPEN_AND_DISTRIBUTE` - Open and Distribute, translates to PTR code `O`
     * * `RETURNS` - Returns, translates to PTR code `R`
     * * `SOFT_PACK_MACHINABLE` - Soft Pack Machinable, translates to PTR code `S`
     * * `SOFT_PACK_NON_MACHINABLE` - Soft Package Non-machinable, translates to PTR code `T`
     *
     * Note:
     * * `IRREGULAR` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
     * * `NON_MACHINABLE` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
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
     * Destination Entry Facility type for the provided rate, this value can be used in the labels API to ensure the provided rate is applied.
     *
     * * `NONE` - None, translates to PTR code `N`
     * * `AREA_DISTRIBUTION_CENTER` - Area Distribution Center, translates to PTR code `A`
     * * `AUXILIARY_SERVICE_FACILITY` - Auxiliary Service Facility, translates to PTR code `F`
     * * `DESTINATION_DELIVERY_UNIT` - Destination Delivery Unit, translates to PTR code `D`
     * * `DESTINATION_NETWORK_DISTRIBUTION_CENTER` - Destination Network Distribution Center, translates to PTR code `B`
     * * `DESTINATION_SECTIONAL_CENTER_FACILITY` - Destination Sectional Center Facility, translates to PTR code `S`
     * * `DESTINATION_SERVICE_HUB` - Destination Service Hub, translates to PTR code `H`
     *
     */
    export enum destinationEntryFacilityType {
        NONE = 'NONE',
        AREA_DISTRIBUTION_CENTER = 'AREA_DISTRIBUTION_CENTER',
        AUXILIARY_SERVICE_FACILITY = 'AUXILIARY_SERVICE_FACILITY',
        DESTINATION_DELIVERY_UNIT = 'DESTINATION_DELIVERY_UNIT',
        DESTINATION_NETWORK_DISTRIBUTION_CENTER = 'DESTINATION_NETWORK_DISTRIBUTION_CENTER',
        DESTINATION_SECTIONAL_CENTER_FACILITY = 'DESTINATION_SECTIONAL_CENTER_FACILITY',
        DESTINATION_SERVICE_HUB = 'DESTINATION_SERVICE_HUB',
    }
}

