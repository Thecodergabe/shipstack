/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { mailingDate } from './mailingDate';
import type { weightPounds } from './weightPounds';
/**
 * Search parameters for extra services rates.
 */
export type ExtraServiceRateQuery = {
    /**
     * Extra Service Code requested
     * * `370` - USPS Delivery Duties Paid Fee
     * * `813` - Hazardous Materials - Class 7 – Radioactive Materials
     * * `820` - Hazardous Materials - Class 9 – Unmarked Lithium Batteries
     * * `826` - Hazardous Materials - Division 6.2 Biological Materials
     * * `857` - Hazardous Materials
     * * `930` - Insurance <= $500
     * * `931` - Insurance > $500
     * * `955` - Return Receipt (Unsupported as of 01/19/2025)
     */
    extraServices?: Array<370 | 813 | 820 | 826 | 857 | 930 | 931 | 955>;
    /**
     * Extra Service Code requested
     * * `370` - USPS Delivery Duties Paid Fee
     * * `813` - Hazardous Materials - Class 7 – Radioactive Materials
     * * `820` - Hazardous Materials - Class 9 – Unmarked Lithium Batteries
     * * `826` - Hazardous Materials - Division 6.2 Biological Materials
     * * `857` - Hazardous Materials
     * * `930` - Insurance <= $500
     * * `931` - Insurance > $500
     * * `955` - Return Receipt (Unsupported as of 01/19/2025)
     */
    extraService?: ExtraServiceRateQuery.extraService;
    /**
     * The mail service requested.
     * * 'FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE'
     * * 'PRIORITY_MAIL_INTERNATIONAL'
     * * 'PRIORITY_MAIL_EXPRESS_INTERNATIONAL'
     * * 'GLOBAL_EXPRESS_GUARANTEED' - Global Express Guaranteed Service is suspended as of September 29, 2024.
     */
    mailClass: ExtraServiceRateQuery.mailClass;
    /**
     * Price type can be
     * * 'RETAIL'
     * * 'COMMERCIAL'
     * * 'COMMERCIAL_PLUS'
     * * 'NSA
     */
    priceType: ExtraServiceRateQuery.priceType;
    /**
     * The value of the item. Required for Insurance and Registered Mail.
     */
    itemValue?: string;
    weight: weightPounds;
    mailingDate?: mailingDate;
    /**
     * Use to specify USPS containers/packaging or container attributes that may affect postage.
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
    rateIndicator: ExtraServiceRateQuery.rateIndicator;
    /**
     * Country of destination.
     */
    destinationCountryCode: string;
    /**
     * The type of payment account linked to a contract rate.
     *
     * Note:
     * - `METER` pricing is only available to PC Postage providers.
     *
     */
    accountType?: ExtraServiceRateQuery.accountType;
    /**
     * The Enterprise Payment Account, Permit number or PC Postage meter number associated with a contract.
     */
    accountNumber?: string;
};
export namespace ExtraServiceRateQuery {
    /**
     * Extra Service Code requested
     * * `370` - USPS Delivery Duties Paid Fee
     * * `813` - Hazardous Materials - Class 7 – Radioactive Materials
     * * `820` - Hazardous Materials - Class 9 – Unmarked Lithium Batteries
     * * `826` - Hazardous Materials - Division 6.2 Biological Materials
     * * `857` - Hazardous Materials
     * * `930` - Insurance <= $500
     * * `931` - Insurance > $500
     * * `955` - Return Receipt (Unsupported as of 01/19/2025)
     */
    export enum extraService {
        '_370' = 370,
        '_813' = 813,
        '_820' = 820,
        '_826' = 826,
        '_857' = 857,
        '_930' = 930,
        '_931' = 931,
        '_955' = 955,
    }
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
     * Price type can be
     * * 'RETAIL'
     * * 'COMMERCIAL'
     * * 'COMMERCIAL_PLUS'
     * * 'NSA
     */
    export enum priceType {
        RETAIL = 'RETAIL',
        COMMERCIAL = 'COMMERCIAL',
        COMMERCIAL_PLUS = 'COMMERCIAL_PLUS',
        NSA = 'NSA',
    }
    /**
     * Use to specify USPS containers/packaging or container attributes that may affect postage.
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

