/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { COD_CODAmount } from './COD_CODAmount';
/**
 * COD container  Indicates COD is requested. Shipment COD is only available for EU origin countries or territories and for shippers account type Daily Pickup and Drop Shipping. Not available to shipment with return service.
 */
export type ShipmentServiceOptions_COD = {
    /**
     * For valid values refer to: Rating and Shipping COD Supported Countries or Territories in the Appendix.
     */
    CODFundsCode: string;
    CODAmount: COD_CODAmount;
};

