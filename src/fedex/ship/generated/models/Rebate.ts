/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money_1 } from './Money_1';
export type Rebate = {
    /**
     * The type of rebate.
     */
    rebateType?: Rebate.rebateType;
    /**
     * The description of the rebate
     */
    description?: string;
    /**
     * provides the calculated rebate amount based on customer details, transaction information, and applicable rules.
     */
    amount?: Money_1;
    percent?: number;
};
export namespace Rebate {
    /**
     * The type of rebate.
     */
    export enum rebateType {
        BONUS = 'BONUS',
        EARNED = 'EARNED',
        OTHER = 'OTHER',
    }
}

