/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransportationCharges_DiscountAmount } from './TransportationCharges_DiscountAmount';
import type { TransportationCharges_GrossCharge } from './TransportationCharges_GrossCharge';
import type { TransportationCharges_NetCharge } from './TransportationCharges_NetCharge';
/**
 * Transportation Charges Container
 */
export type FRSShipmentData_TransportationCharges = {
    GrossCharge: TransportationCharges_GrossCharge;
    DiscountAmount: TransportationCharges_DiscountAmount;
    /**
     * Discount Percentage
     */
    DiscountPercentage: string;
    NetCharge: TransportationCharges_NetCharge;
};

