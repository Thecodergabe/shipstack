/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the API alerts.
 */
export type Alert = {
    /**
     * Indicates the API alert code.
     */
    code?: string;
    /**
     * Indicates the API alert message.
     */
    message?: string;
    /**
     * Indicates the API alert type.
     */
    alertType?: Alert.alertType;
};
export namespace Alert {
    /**
     * Indicates the API alert type.
     */
    export enum alertType {
        NOTE = 'NOTE',
        WARNING = 'WARNING',
    }
}

