/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { height } from './height';
import type { length } from './length';
import type { mailClass } from './mailClass';
import type { mailingDate } from './mailingDate';
import type { priceType } from './priceType';
import type { weightPounds } from './weightPounds';
import type { width } from './width';
/**
 * Package rate ingredients used to calculate base prices.
 */
export type BaseRatesQuery = {
    /**
     * This is the originating ZIP Code&#8482; for the package.
     */
    originZIPCode: string;
    /**
     * This is destination ZIP Code&#8482; for the package.
     */
    destinationZIPCode: string;
    weight: weightPounds;
    length: length;
    width: width;
    height: height;
    mailClass: mailClass;
    /**
     * USPS categorizes parcels into one of two mail processing categories: MACHINABLE or NONSTANDARD.
     * These categories are based on the physical dimensions of the piece, regardless of the placement (orientation) of the delivery address on the piece.
     * For more information see [Domestic Mail Manual (DMM)](https://pe.usps.com/DMM300/201.htm).
     *
     * Machinable letter-size mail is:
     *
     * * Not less than 5 inches long, 3-1/2 inches high, and 0.007-inch thick. For pieces more than 4-1/4 inches high or 6 inches long, or both, the minimum thickness is 0.009.(Pieces not meeting the 0.009 thickness are non-machinable letters under 2.1.)
     * * Not more than 11-1/2 inches long, or more than 6-1/8 inches high, or greater than 1/4-inch thick.
     * * Rectangular, with four square corners and parallel opposite sides. Letter-size, card-type mailpieces made of cardstock may have finished corners that do not exceed a radius of 0.125 inch (1/8 inch) unless prepared as Customized Market Mail under 243.9.0. See Exhibit 1.1.1.
     * * Within an aspect ratio (length divided by height) of 1.3 to 2.5, inclusive.
     * * Subject to additional dimensional restrictions in 3.0, depending on mailpiece design.
     *
     * Flat-size mail must have the following characteristics:
     *
     * * Be more than 11-1/2 inches long, or more than 6-1/8 inches high, or more than 1/4 inch thick, other than automation flats under 6.0 or as allowed for USPS&#174; Marketing Mail pieces with simplified addresses under 5.2.2. Mailpieces other than automation flats or USPS&#174; Marketing Mail pieces with simplified addresses that are 1/4 inch thick or less must be at least 3-1/2 inches high and at least 5 inches long and be at least 0.007 inch thick.
     * * Be not more than 15 inches long or more than 12 inches high or more than 3/4 inch thick, except for:
     * * Periodicals non-machinable flat-size pieces mailed as specified in 207.26.0. They must not be more than 1–1/4 inches thick.
     * * Polywrapped flats, with selvage that extends beyond the contents, up to a maximum length of 15-3/4 inches or a maximum height of 12-1/2 inches. The enclosed contents must not be longer than 15 inches or higher than 12 inches.
     * * Co-mailed polywrapped flats mailed as specified in Customer Support Ruling PS-346, with selvage that extends beyond the contents, up to a maximum height of 12-7/8 inches. The enclosed contents must not be higher than 12 inches.
     * * Be rectangular with four square corners or with finished corners that do not exceed a radius of 0.125 inch (1/8 inch) unless prepared as Customized Market Mail under 9.0.
     * * Be categorized as a catalog.
     * * Other size or weight standards may apply to mail addressed to certain APOs and FPOs, and mail sent by the Department of State to U.S. government personnel abroad.
     *
     * Note:
     * * `IRREGULAR` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
     * * `NON_MACHINABLE` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
     */
    processingCategory: BaseRatesQuery.processingCategory;
    /**
     * Rate ingredient to determine pricing categorization for calculating the price
     * * 3D - 3-Digit
     * * 3N - 3-Digit Dimensional Rectangular
     * * 3R - 3-Digit Dimensional Nonrectangular
     * * 5D - 5-Digit
     * * BA - Basic
     * * BB - Mixed NDC
     * * BM - NDC
     * * C1 - Cubic Pricing Tier 1
     * * C2 - Cubic Pricing Tier 2
     * * C3 - Cubic Pricing Tier 3
     * * C4 - Cubic Pricing Tier 4
     * * C5 - Cubic Pricing Tier 5
     * * CP - Cubic Parcel
     * * CM - USPS Connect Local&#174; Mail
     * * DC - NDC
     * * DE - SCF
     * * DF - 5-Digit
     * * DN - Dimensional Nonrectangular
     * * DR - Dimensional Rectangular
     * * E4 - Priority Mail Express Flat Rate Envelope - Post Office To Addressee
     * * E6 - Priority Mail Express Legal Flat Rate Envelope
     * * E7 - Priority Mail Express Legal Flat Rate Envelope Sunday / Holiday
     * * FA - Legal Flat Rate Envelope
     * * FB - Medium Flat Rate Box/Large Flat Rate Bag
     * * FE - Flat Rate Envelope
     * * FP - Padded Flat Rate Envelope
     * * FS - Small Flat Rate Box
     * * LC - USPS Connect&#174; Local Single Piece
     * * LF - USPS Connect&#174; Local Flat Rate Box
     * * LL - USPS Connect&#174; Local Large Flat Rate Bag
     * * LO - USPS Connect&#174; Local Oversized
     * * LS - USPS Connect&#174; Local Small Flat Rate Bag
     * * NP - Non-Presorted
     * * O1 - Full Tray Box
     * * O2 - Half Tray Box
     * * O3 - EMM Tray Box
     * * O4 - Flat Tub Tray Box
     * * O5 - Surface Transported Pallet
     * * O6 - Full Pallet Box
     * * O7 - Half Pallet Box
     * * OS - Oversized
     * * P5 - Cubic Soft Pack Tier 1
     * * P6 - Cubic Soft Pack Tier 2
     * * P7 - Cubic Soft Pack Tier 3
     * * P8 - Cubic Soft Pack Tier 4
     * * P9 - Cubic Soft Pack Tier 5
     * * Q6 - Cubic Soft Pack Tier 6
     * * Q7 - Cubic Soft Pack Tier 7
     * * Q8 - Cubic Soft Pack Tier 8
     * * Q9 - Cubic Soft Pack Tier 9
     * * Q0 - Cubic Soft Pack Tier 10
     * * PA - Priority Mail Express Single Piece
     * * PL - Large Flat Rate Box
     * * PM - Large Flat Rate Box APO/FPO/DPO
     * * PR - Presorted
     * * SB - Small Flat Rate Bag
     * * SN - SCF Dimensional Nonrectangular
     * * SP - Single Piece
     * * SR - SCF Dimensional Rectangular
     */
    rateIndicator: BaseRatesQuery.rateIndicator;
    /**
     * Types of Facilities
     * * NONE - Translate to Destination Rate Indicator N
     * * DESTINATION_NETWORK_DISTRIBUTION_CENTER - Translate to Destination Rate Indicator B
     * * DESTINATION_SECTIONAL_CENTER_FACILITY - Translate to Destination Rate Indicator S
     * * DESTINATION_DELIVERY_UNIT - Translate to Destination Rate Indicator D
     * * DESTINATION_SERVICE_HUB - Translate to Destination Rate Indicator H
     */
    destinationEntryFacilityType: BaseRatesQuery.destinationEntryFacilityType;
    priceType: priceType;
    mailingDate?: mailingDate;
    /**
     * The type of payment account linked to a contract rate.
     *
     * Note:
     * - `METER` pricing is only available to PC Postage providers.
     * - `MID` pricing is only available for return mail classes.
     *
     */
    accountType?: BaseRatesQuery.accountType;
    /**
     * The Enterprise Payment Account, Permit number, PC Postage meter number, or Mailer ID associated with a contract.
     */
    accountNumber?: string;
    /**
     * Package is nonstandard. Nonstandard packages include cylindrical tubes and rolls, certain high-density items, cartons containing more than 24 ounces of liquids in one or more glass containers, cartons containing 1 gallon or more of liquid in metal or plastic containers, and items in [201.7.6.2](https://pe.usps.com/text/dmm300/201.htm#7.6.2).
     */
    hasNonstandardCharacteristics?: boolean;
};
export namespace BaseRatesQuery {
    /**
     * USPS categorizes parcels into one of two mail processing categories: MACHINABLE or NONSTANDARD.
     * These categories are based on the physical dimensions of the piece, regardless of the placement (orientation) of the delivery address on the piece.
     * For more information see [Domestic Mail Manual (DMM)](https://pe.usps.com/DMM300/201.htm).
     *
     * Machinable letter-size mail is:
     *
     * * Not less than 5 inches long, 3-1/2 inches high, and 0.007-inch thick. For pieces more than 4-1/4 inches high or 6 inches long, or both, the minimum thickness is 0.009.(Pieces not meeting the 0.009 thickness are non-machinable letters under 2.1.)
     * * Not more than 11-1/2 inches long, or more than 6-1/8 inches high, or greater than 1/4-inch thick.
     * * Rectangular, with four square corners and parallel opposite sides. Letter-size, card-type mailpieces made of cardstock may have finished corners that do not exceed a radius of 0.125 inch (1/8 inch) unless prepared as Customized Market Mail under 243.9.0. See Exhibit 1.1.1.
     * * Within an aspect ratio (length divided by height) of 1.3 to 2.5, inclusive.
     * * Subject to additional dimensional restrictions in 3.0, depending on mailpiece design.
     *
     * Flat-size mail must have the following characteristics:
     *
     * * Be more than 11-1/2 inches long, or more than 6-1/8 inches high, or more than 1/4 inch thick, other than automation flats under 6.0 or as allowed for USPS&#174; Marketing Mail pieces with simplified addresses under 5.2.2. Mailpieces other than automation flats or USPS&#174; Marketing Mail pieces with simplified addresses that are 1/4 inch thick or less must be at least 3-1/2 inches high and at least 5 inches long and be at least 0.007 inch thick.
     * * Be not more than 15 inches long or more than 12 inches high or more than 3/4 inch thick, except for:
     * * Periodicals non-machinable flat-size pieces mailed as specified in 207.26.0. They must not be more than 1–1/4 inches thick.
     * * Polywrapped flats, with selvage that extends beyond the contents, up to a maximum length of 15-3/4 inches or a maximum height of 12-1/2 inches. The enclosed contents must not be longer than 15 inches or higher than 12 inches.
     * * Co-mailed polywrapped flats mailed as specified in Customer Support Ruling PS-346, with selvage that extends beyond the contents, up to a maximum height of 12-7/8 inches. The enclosed contents must not be higher than 12 inches.
     * * Be rectangular with four square corners or with finished corners that do not exceed a radius of 0.125 inch (1/8 inch) unless prepared as Customized Market Mail under 9.0.
     * * Be categorized as a catalog.
     * * Other size or weight standards may apply to mail addressed to certain APOs and FPOs, and mail sent by the Department of State to U.S. government personnel abroad.
     *
     * Note:
     * * `IRREGULAR` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
     * * `NON_MACHINABLE` is deprecated and will convert to `NONSTANDARD` as of 01/19/2025.
     */
    export enum processingCategory {
        LETTERS = 'LETTERS',
        FLATS = 'FLATS',
        MACHINABLE = 'MACHINABLE',
        IRREGULAR = 'IRREGULAR',
        NON_MACHINABLE = 'NON_MACHINABLE',
        NONSTANDARD = 'NONSTANDARD',
    }
    /**
     * Rate ingredient to determine pricing categorization for calculating the price
     * * 3D - 3-Digit
     * * 3N - 3-Digit Dimensional Rectangular
     * * 3R - 3-Digit Dimensional Nonrectangular
     * * 5D - 5-Digit
     * * BA - Basic
     * * BB - Mixed NDC
     * * BM - NDC
     * * C1 - Cubic Pricing Tier 1
     * * C2 - Cubic Pricing Tier 2
     * * C3 - Cubic Pricing Tier 3
     * * C4 - Cubic Pricing Tier 4
     * * C5 - Cubic Pricing Tier 5
     * * CP - Cubic Parcel
     * * CM - USPS Connect Local&#174; Mail
     * * DC - NDC
     * * DE - SCF
     * * DF - 5-Digit
     * * DN - Dimensional Nonrectangular
     * * DR - Dimensional Rectangular
     * * E4 - Priority Mail Express Flat Rate Envelope - Post Office To Addressee
     * * E6 - Priority Mail Express Legal Flat Rate Envelope
     * * E7 - Priority Mail Express Legal Flat Rate Envelope Sunday / Holiday
     * * FA - Legal Flat Rate Envelope
     * * FB - Medium Flat Rate Box/Large Flat Rate Bag
     * * FE - Flat Rate Envelope
     * * FP - Padded Flat Rate Envelope
     * * FS - Small Flat Rate Box
     * * LC - USPS Connect&#174; Local Single Piece
     * * LF - USPS Connect&#174; Local Flat Rate Box
     * * LL - USPS Connect&#174; Local Large Flat Rate Bag
     * * LO - USPS Connect&#174; Local Oversized
     * * LS - USPS Connect&#174; Local Small Flat Rate Bag
     * * NP - Non-Presorted
     * * O1 - Full Tray Box
     * * O2 - Half Tray Box
     * * O3 - EMM Tray Box
     * * O4 - Flat Tub Tray Box
     * * O5 - Surface Transported Pallet
     * * O6 - Full Pallet Box
     * * O7 - Half Pallet Box
     * * OS - Oversized
     * * P5 - Cubic Soft Pack Tier 1
     * * P6 - Cubic Soft Pack Tier 2
     * * P7 - Cubic Soft Pack Tier 3
     * * P8 - Cubic Soft Pack Tier 4
     * * P9 - Cubic Soft Pack Tier 5
     * * Q6 - Cubic Soft Pack Tier 6
     * * Q7 - Cubic Soft Pack Tier 7
     * * Q8 - Cubic Soft Pack Tier 8
     * * Q9 - Cubic Soft Pack Tier 9
     * * Q0 - Cubic Soft Pack Tier 10
     * * PA - Priority Mail Express Single Piece
     * * PL - Large Flat Rate Box
     * * PM - Large Flat Rate Box APO/FPO/DPO
     * * PR - Presorted
     * * SB - Small Flat Rate Bag
     * * SN - SCF Dimensional Nonrectangular
     * * SP - Single Piece
     * * SR - SCF Dimensional Rectangular
     */
    export enum rateIndicator {
        _3D = '3D',
        _3N = '3N',
        _3R = '3R',
        _5D = '5D',
        BA = 'BA',
        BB = 'BB',
        BM = 'BM',
        C1 = 'C1',
        C2 = 'C2',
        C3 = 'C3',
        C4 = 'C4',
        C5 = 'C5',
        CP = 'CP',
        CM = 'CM',
        DC = 'DC',
        DE = 'DE',
        DF = 'DF',
        DN = 'DN',
        DR = 'DR',
        E4 = 'E4',
        E6 = 'E6',
        E7 = 'E7',
        FA = 'FA',
        FB = 'FB',
        FE = 'FE',
        FP = 'FP',
        FS = 'FS',
        LC = 'LC',
        LF = 'LF',
        LL = 'LL',
        LO = 'LO',
        LS = 'LS',
        NP = 'NP',
        O1 = 'O1',
        O2 = 'O2',
        O3 = 'O3',
        O4 = 'O4',
        O5 = 'O5',
        O6 = 'O6',
        O7 = 'O7',
        OS = 'OS',
        P5 = 'P5',
        P6 = 'P6',
        P7 = 'P7',
        P8 = 'P8',
        P9 = 'P9',
        Q6 = 'Q6',
        Q7 = 'Q7',
        Q8 = 'Q8',
        Q9 = 'Q9',
        Q0 = 'Q0',
        PA = 'PA',
        PL = 'PL',
        PM = 'PM',
        PR = 'PR',
        SB = 'SB',
        SN = 'SN',
        SP = 'SP',
        SR = 'SR',
    }
    /**
     * Types of Facilities
     * * NONE - Translate to Destination Rate Indicator N
     * * DESTINATION_NETWORK_DISTRIBUTION_CENTER - Translate to Destination Rate Indicator B
     * * DESTINATION_SECTIONAL_CENTER_FACILITY - Translate to Destination Rate Indicator S
     * * DESTINATION_DELIVERY_UNIT - Translate to Destination Rate Indicator D
     * * DESTINATION_SERVICE_HUB - Translate to Destination Rate Indicator H
     */
    export enum destinationEntryFacilityType {
        NONE = 'NONE',
        DESTINATION_NETWORK_DISTRIBUTION_CENTER = 'DESTINATION_NETWORK_DISTRIBUTION_CENTER',
        DESTINATION_SECTIONAL_CENTER_FACILITY = 'DESTINATION_SECTIONAL_CENTER_FACILITY',
        DESTINATION_DELIVERY_UNIT = 'DESTINATION_DELIVERY_UNIT',
        DESTINATION_SERVICE_HUB = 'DESTINATION_SERVICE_HUB',
    }
    /**
     * The type of payment account linked to a contract rate.
     *
     * Note:
     * - `METER` pricing is only available to PC Postage providers.
     * - `MID` pricing is only available for return mail classes.
     *
     */
    export enum accountType {
        EPS = 'EPS',
        PERMIT = 'PERMIT',
        METER = 'METER',
        MID = 'MID',
    }
}

