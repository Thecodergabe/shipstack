/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UPSPremier_HandlingInstructions } from './UPSPremier_HandlingInstructions';
/**
 * UPS Premier Container.
 */
export type Package_UPSPremier = {
    /**
     * UPS Premier Category.  Valid values are 01,02,03 UPS Premier Silver -01
     * UPS Premier Gold - 02
     * UPS Premier Platinum - 03
     */
    Category: string;
    /**
     * SensorID is RFID for UPS Premier Silver. SensorID is MeshID for UPS Premier Gold or UPS Premier Platinum Package.
     */
    SensorID?: string;
    HandlingInstructions: Array<UPSPremier_HandlingInstructions>;
};

