/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FRSPaymentInformation_Address } from './FRSPaymentInformation_Address';
import type { FRSPaymentInformation_Type } from './FRSPaymentInformation_Type';
/**
 * Container to hold the Payment information for the Ground Freight Pricing Shipments.  Required for Ground Freight Pricing Shipments only.
 */
export type Shipment_FRSPaymentInformation = {
    Type: FRSPaymentInformation_Type;
    /**
     * The UPS account number.  If the Ground Freight Pricing indicator and FreightShipmentInformation/DensityEligibleIndicator is present in the request, this account number must be validated to check if it is Ground Freight Pricing Density Based Rating enabled.
     */
    AccountNumber: string;
    Address?: FRSPaymentInformation_Address;
};

