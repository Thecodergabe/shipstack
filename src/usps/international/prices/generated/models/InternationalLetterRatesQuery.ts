/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { mailingDate } from './mailingDate';
import type { weightOunces } from './weightOunces';
/**
 * Letter rate ingredients for calculating base prices.
 */
export type InternationalLetterRatesQuery = {
    weight: weightOunces;
    /**
     * The letter/flat length measured in inches.  For  _`LETTERS`_ the length is the dimension parallel to the delivery address as read. For  _`FLATS`_ the length is the longest dimension.
     */
    length: number;
    /**
     * The letter/flat height measured in inches.  The height is the dimension perpendicular to the length.
     */
    height: number;
    /**
     * The letter/flat thickness measured in inches. The minimum dimension is always the thickness.
     */
    thickness: number;
    /**
     * To be eligible for mailing at the price for letters, a piece must be:
     * * Rectangular
     * * At least 3-1/2 inches high x 5 inches long x 0.007 inch thick.
     * * No more than 6-1/8 inches high x 11-1/2 inches long x 1/4 inch thick.
     *
     * For additional information on letters, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Letters).
     *
     * The Postal Service uses the word "flats" to refer to large envelopes, newsletters, and magazines. The words large envelopes and flats are used interchangeably. Whatever you call them, flats must:
     *
     * * Have one dimension that is greater than 6-1/8 inches high OR 11-½ inches long OR ¼ inch thick.
     * * Be no more than 12 inches high x 15 inches long x ¾ inch thick.
     *
     * For additional information on flats, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Flats).
     *
     * * LETTERS
     * * FLATS
     */
    processingCategory: InternationalLetterRatesQuery.processingCategory;
    mailingDate?: mailingDate;
    /**
     * Set of boolean indicators used to determine whether a letter qualifies as nonmachinable.
     */
    nonMachinableIndicators?: {
        /**
         * Is the letter/flat polybagged, polywrapped, enclosed in any plastic material, or has an exterior surface made of a material that is not paper. Windows in envelopes made of paper do not make mailpieces nonmachinable. Attachments allowable under applicable eligibility standards do not make mailpieces nonmachinable.
         */
        isPolybagged?: boolean;
        /**
         * Does the letter/flat have clasps, strings, buttons, or similar closure devices.
         */
        hasClosureDevices?: boolean;
        /**
         * Does the letter/flat contain items such as pens, pencils, keys, or coins that cause the thickness of the mailpiece to be uneven; or loose keys or coins or similar objects not affixed to the contents within the mailpiece. Loose items may cause a letter to be nonmailable when mailed in paper envelopes; (see [DMM 601.3.3](https://pe.usps.com/text/dmm300/601.htm#ep1196660)).
         */
        hasLooseItems?: boolean;
        /**
         * Is the letter/flat too rigid (does not bend easily when subjected to a transport belt tension of 40 pounds around an 11-inch diameter turn).
         */
        isRigid?: boolean;
        /**
         * Is the letter/flat a self-mailer that is not prepared according to [DMM 201.3.14](https://pe.usps.com/text/dmm300/201.htm#ep1079302).
         */
        isSelfMailer?: boolean;
        /**
         * Is the letter/flat a booklet that is not prepared according to [DMM 201.3.16](https://pe.usps.com/text/dmm300/201.htm#ep1092751).
         */
        isBooklet?: boolean;
    };
    /**
     * Extra Service Code requested.
     * * 940 - Registered Mail
     * * 955 - Return Receipt
     *
     */
    extraServices?: Array<940 | 955>;
    /**
     * A 2-digit country code is required for Country of destination.
     */
    destinationCountryCode: string;
    /**
     * The value of the item. Required for insurance.
     */
    itemValue?: number;
};
export namespace InternationalLetterRatesQuery {
    /**
     * To be eligible for mailing at the price for letters, a piece must be:
     * * Rectangular
     * * At least 3-1/2 inches high x 5 inches long x 0.007 inch thick.
     * * No more than 6-1/8 inches high x 11-1/2 inches long x 1/4 inch thick.
     *
     * For additional information on letters, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Letters).
     *
     * The Postal Service uses the word "flats" to refer to large envelopes, newsletters, and magazines. The words large envelopes and flats are used interchangeably. Whatever you call them, flats must:
     *
     * * Have one dimension that is greater than 6-1/8 inches high OR 11-½ inches long OR ¼ inch thick.
     * * Be no more than 12 inches high x 15 inches long x ¾ inch thick.
     *
     * For additional information on flats, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Flats).
     *
     * * LETTERS
     * * FLATS
     */
    export enum processingCategory {
        LETTERS = 'LETTERS',
        FLATS = 'FLATS',
        CARDS = 'CARDS',
    }
}

