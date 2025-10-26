/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the low Value statement necessary for printing the USMCA for Customs documentation.
 */
export type UsmcaLowValueStatementDetail = {
    /**
     * Specify the country Of Origin of Low Value Document for Customs declaration.<br>Example:true
     */
    countryOfOriginLowValueDocumentRequested?: boolean;
    /**
     * Customs Role Type.<br>Example: EXPORTER
     */
    customsRole: UsmcaLowValueStatementDetail.customsRole;
};
export namespace UsmcaLowValueStatementDetail {
    /**
     * Customs Role Type.<br>Example: EXPORTER
     */
    export enum customsRole {
        EXPORTER = 'EXPORTER',
        IMPORTER = 'IMPORTER',
    }
}

