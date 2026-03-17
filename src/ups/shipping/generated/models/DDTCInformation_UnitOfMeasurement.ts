/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for unit of measurement.  Applies to EEI form only. It is required for EEIFilingOption code 3.
 */
export type DDTCInformation_UnitOfMeasurement = {
    /**
     * Required for EEI form. Unit of measurement code. The two or three (3) alpha unit of measurement for the article being shipped. For example: BAG/BG - bags  Applies to EEI form only.  It is required for EEIFilingOption code 1A and 3.
     */
    Code: string;
    /**
     * Description for Unit of Measurement.  Applies to EEI form only.
     */
    Description?: string;
};

