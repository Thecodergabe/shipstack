/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this object to specify the appropriate destination control statement type(s). Also make sure to specify destination country and end user.
 */
export type DestinationControlDetail = {
    /**
     * Specify End User name. Its is required if StatementTypes is entered as DEPARTMENT_OF_STATE. <br>Example: John Wick
     */
    endUser?: string;
    /**
     * Specify appropriate destination control statement type(s), Also make sure to specify destination country and end user.
     */
    statementTypes: DestinationControlDetail.statementTypes;
    /**
     * Specify DCS shipment destination country. You may enter up to four country codes in this element. Up to 11 alphanumeric characters are allowed.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>click here to see Country codes</a>
     */
    destinationCountries?: Array<string>;
};
export namespace DestinationControlDetail {
    /**
     * Specify appropriate destination control statement type(s), Also make sure to specify destination country and end user.
     */
    export enum statementTypes {
        DEPARTMENT_OF_COMMERCE = 'DEPARTMENT_OF_COMMERCE',
        DEPARTMENT_OF_STATE = 'DEPARTMENT_OF_STATE',
    }
}

