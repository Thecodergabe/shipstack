/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HandlingUnits_UnitOfMeasurement } from './HandlingUnits_UnitOfMeasurement';
/**
 * Dimension of the HandlingUnit container for density based pricing.
 */
export type HandlingUnits_Dimensions = {
    UnitOfMeasurement: HandlingUnits_UnitOfMeasurement;
    /**
     * The length of the line item used to determine dimensional weight.
     */
    Length: string;
    /**
     * The width of the line item used to determine dimensional weight.
     */
    Width: string;
    /**
     * The height of the line item used to determine dimensional weight.
     */
    Height: string;
};

