/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FRSPaymentInformation_Address } from './FRSPaymentInformation_Address';
import type { FRSPaymentInformation_Type } from './FRSPaymentInformation_Type';
/**
 * UPS Ground Freight Pricing (GFP) Payment Information container.  Required only for GFP and when the FRSIndicator is present.
 */
export type Shipment_FRSPaymentInformation = {
    Type: FRSPaymentInformation_Type;
    /**
     * UPS Account Number.
     */
    AccountNumber?: string;
    Address?: FRSPaymentInformation_Address;
};

