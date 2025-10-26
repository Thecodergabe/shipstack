/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this element to provide valid identification details. Used for populating brazil tax id.
 */
export type RecipientCustomsId = {
    /**
     * This is ID Type.
     */
    type?: RecipientCustomsId.type;
    /**
     * This is the ID number.
     */
    value?: string;
};
export namespace RecipientCustomsId {
    /**
     * This is ID Type.
     */
    export enum type {
        COMPANY = 'COMPANY',
        INDIVIDUAL = 'INDIVIDUAL',
        PASSPORT = 'PASSPORT',
    }
}

