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
 * Informative details about all possible rate based on the ingredients.
 */
export type InternationalRateListQuery = {
    originZIPCode: originZIPCode;
    /**
     * The foreign ZIP Code&#8482; for the package.
     */
    foreignPostalCode?: string;
    /**
     * Country of destination.
     */
    destinationCountryCode: string;
    weight: weightPounds;
    mailingDate?: mailingDate;
    length: length;
    width: width;
    height: height;
    priceType?: internationalPriceType;
    /**
     * The mail service requested.
     * * 'FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE'
     * * 'PRIORITY_MAIL_INTERNATIONAL'
     * * 'PRIORITY_MAIL_EXPRESS_INTERNATIONAL'
     * * 'GLOBAL_EXPRESS_GUARANTEED' - Global Express Guaranteed Service is suspended as of September 29, 2024.
     * * 'ALL'
     */
    mailClass?: InternationalRateListQuery.mailClass;
    /**
     * The type of payment account linked to a contract rate.
     *
     * Note:
     * - `METER` pricing is only available to PC Postage providers.
     *
     */
    accountType?: InternationalRateListQuery.accountType;
    /**
     * The Enterprise Payment Account, Permit number or PC Postage meter number associated with a contract.
     */
    accountNumber?: string;
};
export namespace InternationalRateListQuery {
    /**
     * The mail service requested.
     * * 'FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE'
     * * 'PRIORITY_MAIL_INTERNATIONAL'
     * * 'PRIORITY_MAIL_EXPRESS_INTERNATIONAL'
     * * 'GLOBAL_EXPRESS_GUARANTEED' - Global Express Guaranteed Service is suspended as of September 29, 2024.
     * * 'ALL'
     */
    export enum mailClass {
        FIRST_CLASS_PACKAGE_INTERNATIONAL_SERVICE = 'FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE',
        PRIORITY_MAIL_INTERNATIONAL = 'PRIORITY_MAIL_INTERNATIONAL',
        PRIORITY_MAIL_EXPRESS_INTERNATIONAL = 'PRIORITY_MAIL_EXPRESS_INTERNATIONAL',
        GLOBAL_EXPRESS_GUARANTEED = 'GLOBAL_EXPRESS_GUARANTEED',
        ALL = 'ALL',
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

