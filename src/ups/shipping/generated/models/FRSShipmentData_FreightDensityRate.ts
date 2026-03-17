/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * FreightDensityRate container for Density based rating.
 */
export type FRSShipmentData_FreightDensityRate = {
    /**
     * Density is returned if the Shipper is eligible for Density based rate.   Valid values are 0 to 999.9
     */
    Density: string;
    /**
     * Total Cubic feet is returned if the Shipper is eligible for Density based rate.   Valid values are 0 to 99999.999
     */
    TotalCubicFeet: string;
};

