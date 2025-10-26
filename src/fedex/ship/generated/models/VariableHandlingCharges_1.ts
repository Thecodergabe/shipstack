/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money_1 } from './Money_1';
/**
 * Optional. The variable handling charge amount calculated based on the requested variable handling charge detail.
 */
export type VariableHandlingCharges_1 = {
    /**
     * Optional. The variable handling charge amount calculated based on the requested variable handling charge detail
     */
    variableHandlingCharge?: Money_1;
    /**
     * Optional. The variable handling charge amount calculated based on the requested variable handling charge detail.
     */
    fixedVariableHandlingCharge?: Money_1;
    /**
     * Optional. The variable handling charge amount calculated based on the requested variable handling charge detail
     */
    percentVariableHandlingCharge?: Money_1;
    /**
     * Specifies the total customer assessed handling charges.<br> Example: 445.54
     */
    totalCustomerCharge?: Money_1;
};

