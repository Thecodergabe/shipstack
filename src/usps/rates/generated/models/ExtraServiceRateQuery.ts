/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtraServices } from './ExtraServices';
import type { mailClass } from './mailClass';
import type { mailingDate } from './mailingDate';
import type { priceType } from './priceType';
import type { weightPounds } from './weightPounds';
/**
 * Search parameters for an extra service price.
 */
export type ExtraServiceRateQuery = {
    extraServices?: ExtraServices;
    mailClass: mailClass;
    priceType: priceType;
    /**
     * The value of the item. Required for Insurance, Registered Mail, and Collect on Delivery.
     */
    itemValue?: number;
    weight?: weightPounds;
    /**
     * The originating ZIP code for the package.
     */
    originZIPCode?: string;
    /**
     * The destination ZIP code for the package.
     */
    destinationZIPCode?: string;
    mailingDate?: mailingDate;
    /**
     * The type of payment account linked to a contract rate.
     *
     * Note:
     * - `METER` pricing is only available to PC Postage providers.
     * - `MID` pricing is only available for return mail classes.
     *
     */
    accountType?: ExtraServiceRateQuery.accountType;
    /**
     * The Enterprise Payment Account, Permit number, PC Postage meter number, or Mailer ID associated with a contract.
     */
    accountNumber?: string;
};
export namespace ExtraServiceRateQuery {
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

