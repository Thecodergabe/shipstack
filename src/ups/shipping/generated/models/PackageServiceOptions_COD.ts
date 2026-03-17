/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageServiceOptions_COD_CODAmount } from './PackageServiceOptions_COD_CODAmount';
/**
 * Container for COD.  Indicates COD is requested. Package level COD is available for shipment without return service from US/PR to US/PR, CA to CA, and CA to US. CA to US COD is not allowed for package Letter/ Envelope. COD is not valid for return service movements.
 */
export type PackageServiceOptions_COD = {
    /**
     * For valid values refer to: Rating and Shipping COD Supported Countries or Territories in the Appendix.
     */
    CODFundsCode: string;
    CODAmount: PackageServiceOptions_COD_CODAmount;
};

