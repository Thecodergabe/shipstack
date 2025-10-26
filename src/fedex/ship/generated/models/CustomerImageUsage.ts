/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the usse and identification of supplied images to be used on this document.
 */
export type CustomerImageUsage = {
    /**
     * Specify the Image ID.<br>Example:IMAGE_5
     */
    id?: CustomerImageUsage.id;
    /**
     * Specify Customer Image Type.<br>Example:SIGNATURE
     */
    type?: CustomerImageUsage.type;
    /**
     * Provided Image Type<br>Example: SIGNATURE
     */
    providedImageType?: CustomerImageUsage.providedImageType;
};
export namespace CustomerImageUsage {
    /**
     * Specify the Image ID.<br>Example:IMAGE_5
     */
    export enum id {
        IMAGE_1 = 'IMAGE_1',
        IMAGE_2 = 'IMAGE_2',
        IMAGE_3 = 'IMAGE_3',
        IMAGE_4 = 'IMAGE_4',
        IMAGE_5 = 'IMAGE_5',
    }
    /**
     * Specify Customer Image Type.<br>Example:SIGNATURE
     */
    export enum type {
        SIGNATURE = 'SIGNATURE',
        LETTER_HEAD = 'LETTER_HEAD',
    }
    /**
     * Provided Image Type<br>Example: SIGNATURE
     */
    export enum providedImageType {
        LETTER_HEAD = 'LETTER_HEAD',
        SIGNATURE = 'SIGNATURE',
    }
}

