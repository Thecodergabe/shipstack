/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the information about delays.
 */
export type DelayDetail = {
    /**
     * Specifies the type of delay.
     */
    type?: DelayDetail.type;
    /**
     * Specifies the subType of delay.
     */
    subType?: DelayDetail.subType;
    /**
     * Specifies the status of package indicating whether a package is arriving early or is on time or has been delayed.
     */
    status?: DelayDetail.status;
};
export namespace DelayDetail {
    /**
     * Specifies the type of delay.
     */
    export enum type {
        WEATHER = 'WEATHER',
        OPERATIONAL = 'OPERATIONAL',
        LOCAL = 'LOCAL',
        GENERAL = 'GENERAL',
        CLEARANCE = 'CLEARANCE',
    }
    /**
     * Specifies the subType of delay.
     */
    export enum subType {
        SNOW = 'SNOW',
        TORNADO = 'TORNADO',
        EARTHQUAKE_ETC = 'EARTHQUAKE etc',
    }
    /**
     * Specifies the status of package indicating whether a package is arriving early or is on time or has been delayed.
     */
    export enum status {
        DELAYED = 'DELAYED',
        ON_TIME = 'ON_TIME',
        EARLY = 'EARLY',
    }
}

