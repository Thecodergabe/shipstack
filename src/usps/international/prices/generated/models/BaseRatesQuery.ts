/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { height } from './height';
import type { internationalPriceType } from './internationalPriceType';
import type { length } from './length';
import type { mailingDate } from './mailingDate';
import type { originZIPCode } from './originZIPCode';
import type { weightPounds } from './weightPounds';
import type { width } from './width';
/**
 * Search parameters for base rates.
 */
export type BaseRatesQuery = {
    originZIPCode: originZIPCode;
    weight: weightPounds;
    length: length;
    width: width;
    height: height;
    /**
     * The mail service requested.
     * * 'FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE'
     * * 'PRIORITY_MAIL_INTERNATIONAL'
     * * 'PRIORITY_MAIL_EXPRESS_INTERNATIONAL'
     * * 'GLOBAL_EXPRESS_GUARANTEED' - Global Express Guaranteed Service is suspended as of September 29, 2024.
     */
    mailClass: BaseRatesQuery.mailClass;
    /**
     * Value designates if shipment is `MACHINABLE`, `NONSTANDARD, or `FLATS`.
     *
     * Note:
     * * `NON_MACHINABLE` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
     */
    processingCategory: BaseRatesQuery.processingCategory;
    /**
     * Use to specify USPS&#174; containers/packaging or container attributes that may affect postage.
     * * E4 - Priority Mail Express Flat Rate Envelope - Post Office To Addressee
     * * E6 - Priority Mail Express Legal Flat Rate Envelope
     * * FA - Legal Flat Rate Envelope
     * * FB - Medium Flat Rate Box/Large Flat Rate Bag
     * * FE - Flat Rate Envelope
     * * FP - Padded Flat Rate Envelope
     * * FS - Small Flat Rate Box
     * * PA - Priority Mail Express International Single Piece
     * * PL - Large Flat Rate Box
     * * SP - Single Piece
     * * EP - ECOMPRO Single Piece
     * * HA - ECOMPRO Legal Flat Rate Envelope
     * * HB - ECOMPRO Medium Flat Rate Box
     * * HE - ECOMPRO Flat Rate Envelope
     * * HL - ECOMPRO Large Flat Rate Box
     * * HP - ECOMPRO Padded Flat Rate Envelope
     * * HS - ECOMPRO Small Flat Rate Box
     * * LE - Single-piece parcel
     */
    rateIndicator: BaseRatesQuery.rateIndicator;
    /**
     * Types of Facilities
     * * NONE - Translate to Destination Rate Indicator N
     * * INTERNATIONAL_SERVICE_CENTER - Translate to Destination Rate Indicator I
     */
    destinationEntryFacilityType: BaseRatesQuery.destinationEntryFacilityType;
    priceType: internationalPriceType;
    mailingDate?: mailingDate;
    /**
     * The foreign ZIP Code&#8482; for the package.
     */
    foreignPostalCode?: string;
    /**
     * A 2-digit country code is required for Country of destination.
     */
    destinationCountryCode: string;
    /**
     * The type of payment account linked to a contract rate.
     *
     * Note:
     * - `METER` pricing is only available to PC Postage providers.
     *
     */
    accountType?: BaseRatesQuery.accountType;
    /**
     * The Enterprise Payment Account, Permit number or PC Postage meter number associated with a contract.
     */
    accountNumber?: string;
};
export namespace BaseRatesQuery {
    /**
     * The mail service requested.
     * * 'FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE'
     * * 'PRIORITY_MAIL_INTERNATIONAL'
     * * 'PRIORITY_MAIL_EXPRESS_INTERNATIONAL'
     * * 'GLOBAL_EXPRESS_GUARANTEED' - Global Express Guaranteed Service is suspended as of September 29, 2024.
     */
    export enum mailClass {
        FIRST_CLASS_PACKAGE_INTERNATIONAL_SERVICE = 'FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE',
        PRIORITY_MAIL_INTERNATIONAL = 'PRIORITY_MAIL_INTERNATIONAL',
        PRIORITY_MAIL_EXPRESS_INTERNATIONAL = 'PRIORITY_MAIL_EXPRESS_INTERNATIONAL',
        GLOBAL_EXPRESS_GUARANTEED = 'GLOBAL_EXPRESS_GUARANTEED',
    }
    /**
     * Value designates if shipment is `MACHINABLE`, `NONSTANDARD, or `FLATS`.
     *
     * Note:
     * * `NON_MACHINABLE` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
     */
    export enum processingCategory {
        FLATS = 'FLATS',
        MACHINABLE = 'MACHINABLE',
        NON_MACHINABLE = 'NON_MACHINABLE',
        NONSTANDARD = 'NONSTANDARD',
    }
    /**
     * Use to specify USPS&#174; containers/packaging or container attributes that may affect postage.
     * * E4 - Priority Mail Express Flat Rate Envelope - Post Office To Addressee
     * * E6 - Priority Mail Express Legal Flat Rate Envelope
     * * FA - Legal Flat Rate Envelope
     * * FB - Medium Flat Rate Box/Large Flat Rate Bag
     * * FE - Flat Rate Envelope
     * * FP - Padded Flat Rate Envelope
     * * FS - Small Flat Rate Box
     * * PA - Priority Mail Express International Single Piece
     * * PL - Large Flat Rate Box
     * * SP - Single Piece
     * * EP - ECOMPRO Single Piece
     * * HA - ECOMPRO Legal Flat Rate Envelope
     * * HB - ECOMPRO Medium Flat Rate Box
     * * HE - ECOMPRO Flat Rate Envelope
     * * HL - ECOMPRO Large Flat Rate Box
     * * HP - ECOMPRO Padded Flat Rate Envelope
     * * HS - ECOMPRO Small Flat Rate Box
     * * LE - Single-piece parcel
     */
    export enum rateIndicator {
        E4 = 'E4',
        E6 = 'E6',
        E7 = 'E7',
        FA = 'FA',
        FB = 'FB',
        FE = 'FE',
        FP = 'FP',
        FS = 'FS',
        PA = 'PA',
        PL = 'PL',
        SP = 'SP',
        EP = 'EP',
        HA = 'HA',
        HB = 'HB',
        HE = 'HE',
        HL = 'HL',
        HP = 'HP',
        HS = 'HS',
        LE = 'LE',
    }
    /**
     * Types of Facilities
     * * NONE - Translate to Destination Rate Indicator N
     * * INTERNATIONAL_SERVICE_CENTER - Translate to Destination Rate Indicator I
     */
    export enum destinationEntryFacilityType {
        NONE = 'NONE',
        INTERNATIONAL_SERVICE_CENTER = 'INTERNATIONAL_SERVICE_CENTER',
    }
    /**
     * The type of payment account linked to a contract rate.
     *
     * Note:
     * - `METER` pricing is only available to PC Postage providers.
     *
     */
    export enum accountType {
        EPS = 'EPS',
        PERMIT = 'PERMIT',
        METER = 'METER',
    }
}

