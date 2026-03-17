/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LTL_Handling_Units } from './LTL_Handling_Units';
import type { LTL_Reference_Number } from './LTL_Reference_Number';
/**
 * LTL package information. Applicable only for LTL child.
 */
export type Child_LTL_Package = {
    /**
     * Number of identical units in the package/ltl.
     */
    NumberOfIdenticalUnits: string;
    HandlingUnits: LTL_Handling_Units;
    ReferenceNumber?: LTL_Reference_Number;
};

