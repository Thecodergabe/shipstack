/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are COD Transportation Charges Detail.
 */
export type CODTransportationChargesDetail = {
    /**
     * Specify COD Rate Type.
     */
    rateType?: CODTransportationChargesDetail.rateType;
    /**
     * Specify whether the rate applied on bundle or indiividual package.
     */
    rateLevelType?: CODTransportationChargesDetail.rateLevelType;
    /**
     * Specify whether the charges applied on current or all packages.
     */
    chargeLevelType?: CODTransportationChargesDetail.chargeLevelType;
    /**
     * Specify the Charges Type.
     */
    chargeType?: CODTransportationChargesDetail.chargeType;
};
export namespace CODTransportationChargesDetail {
    /**
     * Specify COD Rate Type.
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
     * Specify whether the rate applied on bundle or indiividual package.
     */
    export enum rateLevelType {
        BUNDLED_RATE = 'BUNDLED_RATE',
        INDIVIDUAL_PACKAGE_RATE = 'INDIVIDUAL_PACKAGE_RATE',
    }
    /**
     * Specify whether the charges applied on current or all packages.
     */
    export enum chargeLevelType {
        CURRENT_PACKAGE = 'CURRENT_PACKAGE',
        SUM_OF_PACKAGES = 'SUM_OF_PACKAGES',
    }
    /**
     * Specify the Charges Type.
     */
    export enum chargeType {
        COD_SURCHARGE = 'COD_SURCHARGE',
        NET_CHARGE = 'NET_CHARGE',
        NET_FREIGHT = 'NET_FREIGHT',
        TOTAL_CUSTOMER_CHARGE = 'TOTAL_CUSTOMER_CHARGE',
    }
}

