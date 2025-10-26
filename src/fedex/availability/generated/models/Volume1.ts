/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional
 *
 * Individual line item volume.
 *
 * Conditional
 *
 * Need Volume or Rate for intra mexico rates
 */
export type Volume1 = {
    /**
     * The unit is in Cubic Feet or Cubic Meters. <br> Example: CUBIC_FT
     */
    units?: Volume1.units;
    /**
     * The amount of volume. <br> Example: 9.965781217890562
     */
    value?: number;
};
export namespace Volume1 {
    /**
     * The unit is in Cubic Feet or Cubic Meters. <br> Example: CUBIC_FT
     */
    export enum units {
        CUBIC_FT = 'CUBIC_FT',
        CUBIC_M = 'CUBIC_M',
    }
}

