/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DryIceWeight_UnitOfMeasurement } from './DryIceWeight_UnitOfMeasurement';
/**
 * Container for Dry Ice weight.
 */
export type DryIce_DryIceWeight = {
    UnitOfMeasurement: DryIceWeight_UnitOfMeasurement;
    /**
     * Dry Ice Weight.  Cannot be more than package weight. Should be more than 0.0. Valid characters are 0-9 and "." (Decimal point). Limit to 1 digit after the decimal. The maximum length of the field is 5 including "." and can hold up to 1 decimal place.
     */
    Weight: string;
};

