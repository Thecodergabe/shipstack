/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HandlingUnits_AdjustedHeight } from './HandlingUnits_AdjustedHeight';
import type { HandlingUnits_Dimensions } from './HandlingUnits_Dimensions';
import type { HandlingUnits_Type } from './HandlingUnits_Type';
export type FRSShipmentData_HandlingUnits = {
    /**
     * Handling Unit Quantity for Density based rating.
     */
    Quantity: string;
    Type: HandlingUnits_Type;
    Dimensions: HandlingUnits_Dimensions;
    AdjustedHeight?: HandlingUnits_AdjustedHeight;
};

