/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransportationCharges_DiscountAmount } from './TransportationCharges_DiscountAmount';
import type { TransportationCharges_GrossCharge } from './TransportationCharges_GrossCharge';
import type { TransportationCharges_NetCharge } from './TransportationCharges_NetCharge';
/**
 * Transportation charges container. Ground Freight Pricing transportation charges. These are only returned for Ground Freight Pricing enabled shipper account number when the user includes the FRSShipmentIndicator in the request.
 */
export type FRSShipmentData_TransportationCharges = {
    GrossCharge: TransportationCharges_GrossCharge;
    DiscountAmount: TransportationCharges_DiscountAmount;
    /**
     * It indicates the shipment level discount percentage for transportation charges.
     */
    DiscountPercentage: string;
    NetCharge: TransportationCharges_NetCharge;
};

