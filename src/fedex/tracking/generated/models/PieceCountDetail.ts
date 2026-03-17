/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the count of the packages delivered and the count of the packages at the origin which can be used for verification purposes. Populated for secure users only.
 */
export type PieceCountDetail = {
    /**
     * Field which holds the piece count. <br> Example: 35
     */
    count?: string;
    /**
     * Field which holds the piece count description detail. <br> Example: picec count description
     */
    description?: string;
    /**
     * Field which holds the piece count location type. <br> Example: ORIGIN
     */
    type?: PieceCountDetail.type;
};
export namespace PieceCountDetail {
    /**
     * Field which holds the piece count location type. <br> Example: ORIGIN
     */
    export enum type {
        DESTINATION = 'DESTINATION',
        ORIGIN = 'ORIGIN',
    }
}

