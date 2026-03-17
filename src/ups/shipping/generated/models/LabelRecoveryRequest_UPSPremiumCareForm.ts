/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * UPS Premium Care Form container.  Default is PDF when container is not provided.
 * Valid only for Canada to Canada movements. UPS Premium Care Form will be returned in  both US English and Canadian French language.
 */
export type LabelRecoveryRequest_UPSPremiumCareForm = {
    /**
     * Size of UPS Premium Care Form.  Valid values:
     * 01 = A4 Size
     * 02 = Letter Size
     */
    PageSize: string;
    /**
     * Format of UPS Premium Care Form.  Valid values:
     * 01 = PNG
     * 02 = PDF
     */
    PrintType: string;
};

