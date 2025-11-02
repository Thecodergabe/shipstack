/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerReference } from './CustomerReference';
import type { ExtraService } from './ExtraService';
import type { InternationalPackageOptions } from './InternationalPackageOptions';
import type { PackageDescription } from './PackageDescription';
export type InternationalPackageDescription = (PackageDescription & {
    /**
     * International Mail classes for label  The mail service requested.
     * * FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE
     * * PRIORITY_MAIL_INTERNATIONAL
     * * PRIORITY_MAIL_EXPRESS_INTERNATIONAL
     */
    mailClass: InternationalPackageDescription.mailClass;
    /**
     * Use to specify USPS&#174; containers/packaging or container attributes that may affect postage. A rate indicator value will be required if a value for `packagingType` is not provided.
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
     */
    rateIndicator?: InternationalPackageDescription.rateIndicator;
    /**
     * Used to specify USPS&#174; packaging attributes that may affect postage. Can be used instead of a rate indicator. Either packagingType or rate indicator is required.
     * * FLAT_RATE_ENVELOPE
     * * LEGAL_FLAT_RATE_ENVELOPE
     * * PADDED_FLAT_RATE_ENVELOPE
     * * SM_FLAT_RATE_BOX
     * * MD_FLAT_RATE_BOX
     * * LG_FLAT_RATE_BOX
     * * VARIABLE
     */
    packagingType?: InternationalPackageDescription.packagingType;
    /**
     * Future Use - The diameter of the package, in dimensionsUOM.
     */
    diameter?: number;
    /**
     * Indicates the mail piece shape.
     * * RECTANGLE
     */
    shape?: InternationalPackageDescription.shape;
    /**
     * USPS&#174; categorizes international parcels into four processing categories. These categories are based on the physical dimensions of the piece and impact how the mail will be processed.
     * * `LETTERS`
     * * `FLATS`
     * * `MACHINABLE`
     * * `NONSTANDARD`
     * * `NON_MACHINABLE` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025
     */
    processingCategory: InternationalPackageDescription.processingCategory;
    /**
     * Types of Facilities.
     * * NONE - Translate to Destination Rate Indicator of N in USPS&#174; Pub 205
     * * INTERNATIONAL_SERVICE_CENTER - Translate to Destination Rate Indicator of I in USPS&#174; Pub 205
     */
    destinationEntryFacilityType: InternationalPackageDescription.destinationEntryFacilityType;
    /**
     * The date package will be mailed. The mailing date may be today plus 0 to 7 days in advance. Enter the date in the full-date notation as defined by [RFC 3339, section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6).
     */
    mailingDate: string;
    packageOptions?: InternationalPackageOptions;
    customerReference?: Array<CustomerReference>;
    /**
     * Extra Service Code requested on the package.
     * * 480 - Tracking Plus 6 Months
     * * 481 - Tracking Plus 1 Year
     * * 482 - Tracking Plus 3 Years
     * * 483 - Tracking Plus 5 Years
     * * 484 - Tracking Plus 7 Years
     * * 486 - Tracking Plus Signature 3 Years
     * * 487 - Tracking Plus Signature 5 Years
     * * 488 - Tracking Plus Signature 7 Years
     * * 813 - Hazardous Materials - Class 7 – Radioactive Materials
     * * 820 - Hazardous Materials - Class 9 – Unmarked Lithium Batteries
     * * 826 - Hazardous Materials - Division 6.2 Biological Materials
     * * 857 - Hazardous Materials
     * * 930 - Insurance <= $500
     * * 931 - Insurance > $500
     * * 955 - Return Receipt (Unsupported as of 01/19/2025)
     *
     * Note:
     * * Only one USPS Tracking Plus&#174; extra service and one Insurance extra service may be selected per package
     *
     */
    extraServices?: Array<ExtraService>;
    /**
     * This is the 5-digit ZIP code where the package is being mailed from.
     */
    inductionZIPCode?: string;
    /**
     * This is the mailer ID associated with the mail owner for this label This provides an additional copy of the scan extract file to the MID's outbound folder.
     */
    mailOwnerMID?: string;
    /**
     * This is the mailer ID associated with the logistics manager for this label This provides an additional copy of the scan extract file to the MID's outbound folder.
     */
    logisticsManagerMID?: string;
});
export namespace InternationalPackageDescription {
    /**
     * International Mail classes for label  The mail service requested.
     * * FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE
     * * PRIORITY_MAIL_INTERNATIONAL
     * * PRIORITY_MAIL_EXPRESS_INTERNATIONAL
     */
    export enum mailClass {
        FIRST_CLASS_PACKAGE_INTERNATIONAL_SERVICE = 'FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE',
        PRIORITY_MAIL_INTERNATIONAL = 'PRIORITY_MAIL_INTERNATIONAL',
        PRIORITY_MAIL_EXPRESS_INTERNATIONAL = 'PRIORITY_MAIL_EXPRESS_INTERNATIONAL',
    }
    /**
     * Use to specify USPS&#174; containers/packaging or container attributes that may affect postage. A rate indicator value will be required if a value for `packagingType` is not provided.
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
     */
    export enum rateIndicator {
        E4 = 'E4',
        E6 = 'E6',
        FA = 'FA',
        FB = 'FB',
        FE = 'FE',
        FP = 'FP',
        FS = 'FS',
        PA = 'PA',
        PL = 'PL',
        SP = 'SP',
    }
    /**
     * Used to specify USPS&#174; packaging attributes that may affect postage. Can be used instead of a rate indicator. Either packagingType or rate indicator is required.
     * * FLAT_RATE_ENVELOPE
     * * LEGAL_FLAT_RATE_ENVELOPE
     * * PADDED_FLAT_RATE_ENVELOPE
     * * SM_FLAT_RATE_BOX
     * * MD_FLAT_RATE_BOX
     * * LG_FLAT_RATE_BOX
     * * VARIABLE
     */
    export enum packagingType {
        FLAT_RATE_ENVELOPE = 'FLAT_RATE_ENVELOPE',
        LEGAL_FLAT_RATE_ENVELOPE = 'LEGAL_FLAT_RATE_ENVELOPE',
        PADDED_FLAT_RATE_ENVELOPE = 'PADDED_FLAT_RATE_ENVELOPE',
        SM_FLAT_RATE_BOX = 'SM_FLAT_RATE_BOX',
        MD_FLAT_RATE_BOX = 'MD_FLAT_RATE_BOX',
        LG_FLAT_RATE_BOX = 'LG_FLAT_RATE_BOX',
        VARIABLE = 'VARIABLE',
    }
    /**
     * Indicates the mail piece shape.
     * * RECTANGLE
     */
    export enum shape {
        RECTANGLE = 'RECTANGLE',
    }
    /**
     * USPS&#174; categorizes international parcels into four processing categories. These categories are based on the physical dimensions of the piece and impact how the mail will be processed.
     * * `LETTERS`
     * * `FLATS`
     * * `MACHINABLE`
     * * `NONSTANDARD`
     * * `NON_MACHINABLE` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025
     */
    export enum processingCategory {
        LETTERS = 'LETTERS',
        FLATS = 'FLATS',
        MACHINABLE = 'MACHINABLE',
        NON_MACHINABLE = 'NON_MACHINABLE',
        NONSTANDARD = 'NONSTANDARD',
    }
    /**
     * Types of Facilities.
     * * NONE - Translate to Destination Rate Indicator of N in USPS&#174; Pub 205
     * * INTERNATIONAL_SERVICE_CENTER - Translate to Destination Rate Indicator of I in USPS&#174; Pub 205
     */
    export enum destinationEntryFacilityType {
        NONE = 'NONE',
        INTERNATIONAL_SERVICE_CENTER = 'INTERNATIONAL_SERVICE_CENTER',
    }
}

