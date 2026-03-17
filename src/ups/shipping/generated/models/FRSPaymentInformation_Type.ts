/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold the Ground Freight Pricing payment type information.  It is required if the request has Ground Freight Pricing shipment indicator.
 */
export type FRSPaymentInformation_Type = {
    /**
     * Valid codes:
     * - 01 = Prepaid
     * - 02 = FreightCollect
     * - 03 = ThirdParty
     *
     */
    Code: string;
    /**
     * Specifies the description for Ground Freight Pricing payment type.
     */
    Description?: string;
};

