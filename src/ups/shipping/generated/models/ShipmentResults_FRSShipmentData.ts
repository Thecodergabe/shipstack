/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FRSShipmentData_FreightDensityRate } from './FRSShipmentData_FreightDensityRate';
import type { FRSShipmentData_HandlingUnits } from './FRSShipmentData_HandlingUnits';
import type { FRSShipmentData_TransportationCharges } from './FRSShipmentData_TransportationCharges';
/**
 * Ground Freight Pricing Shipment data container. Ground Freight Pricing shipment data is only guaranteed to be returned for Ground Freight Pricing shipments only.
 */
export type ShipmentResults_FRSShipmentData = {
    TransportationCharges: FRSShipmentData_TransportationCharges;
    FreightDensityRate?: FRSShipmentData_FreightDensityRate;
    /**
     * Handling Unit for Density based rating container.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    HandlingUnits?: Array<FRSShipmentData_HandlingUnits>;
};

