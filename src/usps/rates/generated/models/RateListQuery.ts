/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { destinationZIPCode } from './destinationZIPCode';
import type { height } from './height';
import type { length } from './length';
import type { mailClassesOutboundOnly } from './mailClassesOutboundOnly';
import type { mailClassOutboundOnly } from './mailClassOutboundOnly';
import type { mailingDate } from './mailingDate';
import type { originZIPCode } from './originZIPCode';
import type { priceType } from './priceType';
import type { weightPounds } from './weightPounds';
import type { width } from './width';
/**
 * Informative details about all possible prices based on the ingredients.
 */
export type RateListQuery = {
    originZIPCode: originZIPCode;
    destinationZIPCode: destinationZIPCode;
    weight: weightPounds;
    length: length;
    width: width;
    height: height;
    mailClass?: mailClassOutboundOnly;
    mailClasses?: mailClassesOutboundOnly;
    priceType?: priceType;
    mailingDate?: mailingDate;
    /**
     * The type of payment account linked to a contract rate.
     */
    accountType?: RateListQuery.accountType;
    /**
     * The Enterprise Payment Account, Permit number or PC Postage meter number associated with a contract.
     */
    accountNumber?: string;
    /**
     * Package is nonstandard. Nonstandard packages include cylindrical tubes and rolls, certain high-density items, cartons containing more than 24 ounces of liquids in one or more glass containers, cartons containing 1 gallon or more of liquid in metal or plastic containers, and items in [201.7.6.2](https://pe.usps.com/text/dmm300/201.htm#7.6.2).
     */
    hasNonstandardCharacteristics?: boolean;
};
export namespace RateListQuery {
    /**
     * The type of payment account linked to a contract rate.
     */
    export enum accountType {
        EPS = 'EPS',
        PERMIT = 'PERMIT',
        METER = 'METER',
    }
}

