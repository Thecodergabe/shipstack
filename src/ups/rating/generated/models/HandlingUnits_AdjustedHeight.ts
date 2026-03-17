/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdjustedHeight_UnitOfMeasurement } from './AdjustedHeight_UnitOfMeasurement';
/**
 * Container to hold Adjusted Height information.
 */
export type HandlingUnits_AdjustedHeight = {
    /**
     * Adjusted Height value for the handling unit.  Adjusted Height is done only when Handling unit type is SKD = Skid or PLT = Pallet.
     */
    Value: string;
    UnitOfMeasurement: AdjustedHeight_UnitOfMeasurement;
};

