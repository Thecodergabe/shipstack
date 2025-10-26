/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money } from './Money';
/**
 * Indicate the details about how to calculate variable handling charges at the shipment level. They can be based on a percentage of the shipping charges or a fixed amount. If indicated, element rateLevelType is required.
 */
export type VariableHandlingChargeDetail = {
    /**
     * The rate type indicates what type of rate request is being returned; account, preferred, incentive, etc<br>Example: PREFERRED_CURRENCY
     */
    rateType?: VariableHandlingChargeDetail.rateType;
    /**
     * This is the variable handling percentage. If the percent value is mentioned as 10, it means 10%(multiplier of 0.1).<br>Example: 12.45
     */
    percentValue?: number;
    /**
     * indicates whether or not the rating is being done at the package level, or if the packages are bundled together. At the package level, charges are applied based on the details of each individual package. If they are bundled, one package is chosen as the parent and charges are applied based on that one package.<br>Example: INDIVIDUAL_PACKAGE_RATE
     */
    rateLevelType?: VariableHandlingChargeDetail.rateLevelType;
    /**
     * This is to specify a fixed handling charge on the shipment. The element allows entry of 7 characters before the decimal and 2 characters following the decimal. <br>Example: 5.00.
     */
    fixedValue?: Money;
    /**
     * Specify the charge type upon which the variable handling percentage amount is calculated.
     */
    rateElementBasis?: VariableHandlingChargeDetail.rateElementBasis;
};
export namespace VariableHandlingChargeDetail {
    /**
     * The rate type indicates what type of rate request is being returned; account, preferred, incentive, etc<br>Example: PREFERRED_CURRENCY
     */
    export enum rateType {
        ACCOUNT = 'ACCOUNT',
        ACTUAL = 'ACTUAL',
        CURRENT = 'CURRENT',
        CUSTOM = 'CUSTOM',
        LIST = 'LIST',
        INCENTIVE = 'INCENTIVE',
        PREFERRED = 'PREFERRED',
        PREFERRED_INCENTIVE = 'PREFERRED_INCENTIVE',
        PREFERRED_CURRENCY = 'PREFERRED_CURRENCY',
    }
    /**
     * indicates whether or not the rating is being done at the package level, or if the packages are bundled together. At the package level, charges are applied based on the details of each individual package. If they are bundled, one package is chosen as the parent and charges are applied based on that one package.<br>Example: INDIVIDUAL_PACKAGE_RATE
     */
    export enum rateLevelType {
        BUNDLED_RATE = 'BUNDLED_RATE',
        INDIVIDUAL_PACKAGE_RATE = 'INDIVIDUAL_PACKAGE_RATE',
    }
    /**
     * Specify the charge type upon which the variable handling percentage amount is calculated.
     */
    export enum rateElementBasis {
        NET_CHARGE = 'NET_CHARGE',
        NET_FREIGHT = 'NET_FREIGHT',
        BASE_CHARGE = 'BASE_CHARGE',
        NET_CHARGE_EXCLUDING_TAXES = 'NET_CHARGE_EXCLUDING_TAXES',
    }
}

