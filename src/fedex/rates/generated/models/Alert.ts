/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the alerts.
 */
export type Alert = {
    /**
     * Specifies the alert code.
     */
    code?: string;
    /**
     * Specifies the alert type.
     */
    alertType?: Alert.alertType;
    /**
     * Specifies the alert message.
     */
    message?: string;
};
export namespace Alert {
    /**
     * Specifies the alert type.
     */
    export enum alertType {
        NOTE = 'NOTE',
        WARNING = 'WARNING',
    }
}

