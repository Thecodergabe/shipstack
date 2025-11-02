/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtraService } from './ExtraService';
import type { mailClass } from './mailClass';
import type { mailingDate } from './mailingDate';
import type { priceType } from './priceType';
import type { weightPounds } from './weightPounds';
/**
 * Search parameters for an extra service price.
 * @deprecated
 */
export type ExtraServiceRateQueryWithSingleExtraService = {
    extraServices?: ExtraService;
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
     */
    accountType?: ExtraServiceRateQueryWithSingleExtraService.accountType;
    /**
     * The Enterprise Payment Account, Permit number or PC Postage meter number associated with a contract.
     */
    accountNumber?: string;
};
export namespace ExtraServiceRateQueryWithSingleExtraService {
    /**
     * The type of payment account linked to a contract rate.
     */
    export enum accountType {
        EPS = 'EPS',
        PERMIT = 'PERMIT',
        METER = 'METER',
    }
}

