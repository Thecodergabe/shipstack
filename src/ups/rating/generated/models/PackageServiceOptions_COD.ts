/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { COD_CODAmount } from './COD_CODAmount';
/**
 * COD Container. Indicates COD is requested.   Valid for the following country or territory combinations: US/PR to US/PRCA to CACA to USNot allowed for CA to US for packages that are designated as Letters or Envelopes.
 */
export type PackageServiceOptions_COD = {
    /**
     * Indicates the type of funds that will be used for the C.O.D. payment.  For valid values, refer to Rating and Shipping COD Supported Countries or Territories in the Appendix.
     */
    CODFundsCode: string;
    CODAmount: COD_CODAmount;
};

