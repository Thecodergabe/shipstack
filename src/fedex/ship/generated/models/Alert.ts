/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are alert details received in the response.
 */
export type Alert = {
    /**
     * Specifies the api alert code.<br>Example: SHIPMENT.VALIDATION.SUCCESS
     */
    code?: string;
    /**
     * Specifies the api alert type.
     */
    alertType?: Alert.alertType;
    /**
     * Specifies the api alert message.<br>Example: Shipment validated successfully. No errors found.
     */
    message?: string;
};
export namespace Alert {
    /**
     * Specifies the api alert type.
     */
    export enum alertType {
        NOTE = 'NOTE',
        WARNING = 'WARNING',
    }
}

