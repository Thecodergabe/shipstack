/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the api alerts.
 */
export type Alert = {
    /**
     * Specifies the api alert code.
     */
    code?: string;
    /**
     * Specifies the api alert type.
     */
    alertType?: Alert.alertType;
    /**
     * Specifies the api alert message.
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

