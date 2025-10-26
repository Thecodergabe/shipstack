/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FixedValue } from './FixedValue';
/**
 * Specifies Variable Handling Charge details
 */
export type VariableHandlingChargeDetail = {
    /**
     * variable handling percentage <br> Example: 25.67
     */
    percentValue?: number;
    fixedValue?: FixedValue;
    /**
     * Description of the percentage <br> Example: NET_CHARGE
     */
    rateElementBasis?: VariableHandlingChargeDetail.rateElementBasis;
    /**
     * Optional <br> RateType Basis <br> Example: ACCOUNT
     */
    rateTypeBasis?: VariableHandlingChargeDetail.rateTypeBasis;
};
export namespace VariableHandlingChargeDetail {
    /**
     * Description of the percentage <br> Example: NET_CHARGE
     */
    export enum rateElementBasis {
        NET_CHARGE = 'NET_CHARGE',
        NET_FREIGHT = 'NET_FREIGHT',
        BASE_CHARGE = 'BASE_CHARGE',
        NET_CHARGE_EXCLUDING_TAXES = 'NET_CHARGE_EXCLUDING_TAXES',
    }
    /**
     * Optional <br> RateType Basis <br> Example: ACCOUNT
     */
    export enum rateTypeBasis {
        ACCOUNT = 'ACCOUNT',
        ACTUAL = 'ACTUAL',
        CURRENT = 'CURRENT',
        CUSTOM = 'CUSTOM',
        LIST = 'LIST',
    }
}

