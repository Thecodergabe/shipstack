/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this object to specify C.O.D. transportation charges.
 */
export type CODTransportationChargesDetail = {
    /**
     * Specify the Rate Type used.
     */
    rateType?: CODTransportationChargesDetail.rateType;
    /**
     * Specify which level the rate to be applied.
     */
    rateLevelType?: CODTransportationChargesDetail.rateLevelType;
    /**
     * Specify which level the charges to be applied.
     */
    chargeLevelType?: CODTransportationChargesDetail.chargeLevelType;
    /**
     * Specify Charge type.
     */
    chargeType?: CODTransportationChargesDetail.chargeType;
};
export namespace CODTransportationChargesDetail {
    /**
     * Specify the Rate Type used.
     */
    export enum rateType {
        ACCOUNT = 'ACCOUNT',
        LIST = 'LIST',
        ACTUAL = 'ACTUAL',
        CURRENT = 'CURRENT',
        CUSTOM = 'CUSTOM',
    }
    /**
     * Specify which level the rate to be applied.
     */
    export enum rateLevelType {
        BUNDLED_RATE = 'BUNDLED_RATE',
        INDIVIDUAL_PACKAGE_RATE = 'INDIVIDUAL_PACKAGE_RATE',
    }
    /**
     * Specify which level the charges to be applied.
     */
    export enum chargeLevelType {
        CURRENT_PACKAGE = 'CURRENT_PACKAGE',
        SUM_OF_PACKAGES = 'SUM_OF_PACKAGES',
    }
    /**
     * Specify Charge type.
     */
    export enum chargeType {
        COD_SURCHARGE = 'COD_SURCHARGE',
        NET_CHARGE = 'NET_CHARGE',
        NET_FREIGHT = 'NET_FREIGHT',
        TOTAL_CUSTOMER_CHARGE = 'TOTAL_CUSTOMER_CHARGE',
    }
}

