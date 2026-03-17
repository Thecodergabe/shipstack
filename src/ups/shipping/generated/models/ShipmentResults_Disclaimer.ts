/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ShipmentResults_Disclaimer = {
    /**
     * Code representing type of Disclaimer.   Refer to Disclaimer Codes and Messages in the Appendix for various disclaimers that would be possible for a given shipment.
     */
    Code: string;
    /**
     * Disclaimer description.   This field would be returned only if TaxInformationIndicator is present in a request.
     *
     * Refer to Disclaimer Codes and Messages in the Appendix for various disclaimers that would be possible for a given shipment.
     */
    Description?: string;
};

