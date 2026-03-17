/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentServiceOptions_COD_CODAmount } from './ShipmentServiceOptions_COD_CODAmount';
/**
 * If present, indicates C.O.D. is requested for the shipment.  Shipment level C.O.D. is only available for EU origin countries or territories.C.O.D. shipments are only available for Shippers with Daily Pickup and Drop Shipping accounts.
 */
export type ShipmentServiceOptions_COD = {
    /**
     * For valid values, refer to Rating and Shipping COD Supported Countries or Territories in the Appendix.
     */
    CODFundsCode: string;
    CODAmount: ShipmentServiceOptions_COD_CODAmount;
};

