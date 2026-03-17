/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceInformation } from './ReferenceInformation';
/**
 * Specifies the request elements for Track by alternate reference.<br> For a valid request there are two combinations:<br> 1.) A referenceValue and accountNumber is required OR <br>2.) referenceType & carrierCode, shipdateBegin and shipDateEnd, destinationPostalCode and destinationCountryCode are required.
 */
export type Full_Schema_Tracking_References = {
    referencesInformation: ReferenceInformation;
    /**
     * Indicates if the detailed scans are being requested or not. If true, the detailed scans will be included in the response returned. <br>Valid values are True or False.
     */
    includeDetailedScans?: boolean;
};

