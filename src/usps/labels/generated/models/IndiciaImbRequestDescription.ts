/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IndiciaImbExtraService } from './IndiciaImbExtraService';
import type { MailingDateIndiciaOptions } from './MailingDateIndiciaOptions';
export type IndiciaImbRequestDescription = {
    /**
     * * LETTERS
     *
     * To be eligible for mailing at the price for letters, a piece must be:
     * * Rectangular
     * * At least 3-1/2 inches high x 5 inches long x 0.007 inch thick.
     * * No more than 6-1/8 inches high x 11-1/2 inches long x 1/4 inch thick.
     *
     * For additional information on letters, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Letters).
     *
     * * FLATS
     *
     * The Postal Service uses the word "flats" to refer to large envelopes, newsletters, and magazines. The words large envelopes and flats are used interchangeably. Whatever you call them, flats must:
     *
     * * Have one dimension that is greater than 6-1/8 inches high OR 11-½ inches long OR ¼ inch thick.
     * * Be no more than 12 inches high x 15 inches long x ¾ inch thick.
     *
     * For additional information on flats, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Flats).
     *
     * * CARDS
     *
     * To be eligible for mailing at the price for postcards, a piece must be:
     * * Rectangular
     * * At least 3-1/2 inches high x 5 inches long x 0.007 inch thick.
     * * No more than 4-1/4 inches high x 6 inches long x 0.016 inch thick.
     *
     * For additional information on postcards, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Cards).
     *
     */
    processingCategory: IndiciaImbRequestDescription.processingCategory;
    /**
     * The letter/flat/card weight, in ounces. The maximum weight of a letter and cards is 3.5 oz and the maximum weight of a flat is 13 oz.
     */
    weight: number;
    mailingDate: MailingDateIndiciaOptions;
    /**
     * The letter/flat/card length in inches.  For  `LETTERS` and `CARDS` the length is the dimension parallel to the delivery address as read. For  `FLATS` the length is the longest dimension.
     */
    length: number;
    /**
     * The letter/flat/card height in inches.  The height is the dimension perpendicular to the length.
     */
    height: number;
    /**
     * The letter/flat/card thickness in inches. The minimum dimension is always the thickness.
     */
    thickness: number;
    /**
     * Value of the letter, flat, or card in USD.
     *
     * Note:
     * * This value must be set if extra service codes 930 (Insurance) or 934 (Insurance (Restricted Delivery)) are in the extraServices field.
     *
     */
    itemValue?: number;
    /**
     * Extra Service Code requested for IMB letters, flats, and cards.
     *
     * * 910 - Certified Mail
     * * 911 - Certified Mail Restricted Delivery
     * * 930 - Insurance
     * * 934 - Insurance Restricted Delivery
     * * 940 - Registered Mail
     * * 941 - Registered Mail Restricted Delivery
     * * 955 - Return Receipt
     * * 957 - Return Receipt Electronic
     *
     * Note:
     * * When the extra service code "930" is provided in the request, if the item value is over $500, "930" will automatically be replaced with "931" - Insurance (Greater than $500).
     * * Some service codes require a combination with extra services such as "955" and "957". For all valid combinations, visit [https://postalpro.usps.com/IMPB_Service_Type_Codes](https://postalpro.usps.com/IMPB_Service_Type_Codes).
     *
     */
    extraServices?: Array<IndiciaImbExtraService>;
    /**
     * Set of boolean indicators used to determine whether a letter qualifies as nonmachinable.
     */
    nonMachinableIndicators?: {
        /**
         * Is the letter/flat/card polybagged, polywrapped, enclosed in any plastic material, or has an exterior surface made of a material that is not paper. Windows in envelopes made of paper do not make mailpieces nonmachinable. Attachments allowable under applicable eligibility standards do not make mailpieces nonmachinable.
         */
        isPolybagged?: boolean;
        /**
         * Does the letter/flat/card have clasps, strings, buttons, or similar closure devices.
         */
        hasClosureDevices?: boolean;
        /**
         * Does the letter/flat/card contain items such as pens, pencils, keys, or coins that cause the thickness of the mailpiece to be uneven; or loose keys or coins or similar objects not affixed to the contents within the mailpiece. Loose items may cause a letter to be nonmailable when mailed in paper envelopes; (see [DMM 601.3.3](https://pe.usps.com/text/dmm300/601.htm#ep1196660)).
         */
        hasLooseItems?: boolean;
        /**
         * Is the letter/flat/card too rigid (does not bend easily when subjected to a transport belt tension of 40 pounds around an 11-inch diameter turn).
         */
        isRigid?: boolean;
        /**
         * Is the letter/flat/card a self-mailer that is not prepared according to [DMM 201.3.14](https://pe.usps.com/text/dmm300/201.htm#ep1079302).
         */
        isSelfMailer?: boolean;
        /**
         * Is the letter/flat/card a booklet that is not prepared according to [DMM 201.3.16](https://pe.usps.com/text/dmm300/201.htm#ep1092751).
         */
        isBooklet?: boolean;
    };
};
export namespace IndiciaImbRequestDescription {
    /**
     * * LETTERS
     *
     * To be eligible for mailing at the price for letters, a piece must be:
     * * Rectangular
     * * At least 3-1/2 inches high x 5 inches long x 0.007 inch thick.
     * * No more than 6-1/8 inches high x 11-1/2 inches long x 1/4 inch thick.
     *
     * For additional information on letters, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Letters).
     *
     * * FLATS
     *
     * The Postal Service uses the word "flats" to refer to large envelopes, newsletters, and magazines. The words large envelopes and flats are used interchangeably. Whatever you call them, flats must:
     *
     * * Have one dimension that is greater than 6-1/8 inches high OR 11-½ inches long OR ¼ inch thick.
     * * Be no more than 12 inches high x 15 inches long x ¾ inch thick.
     *
     * For additional information on flats, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Flats).
     *
     * * CARDS
     *
     * To be eligible for mailing at the price for postcards, a piece must be:
     * * Rectangular
     * * At least 3-1/2 inches high x 5 inches long x 0.007 inch thick.
     * * No more than 4-1/4 inches high x 6 inches long x 0.016 inch thick.
     *
     * For additional information on postcards, please refer to the [Postal Explorer](https://pe.usps.com/businessmail101?ViewName=Cards).
     *
     */
    export enum processingCategory {
        LETTERS = 'LETTERS',
        FLATS = 'FLATS',
        CARDS = 'CARDS',
    }
}

