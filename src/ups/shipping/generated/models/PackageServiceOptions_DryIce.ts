/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DryIce_DryIceWeight } from './DryIce_DryIceWeight';
/**
 * Container for Dry Ice.  Maximum 1 Dry Ice is allowed. Lane check will happen based on postal code/ city.
 */
export type PackageServiceOptions_DryIce = {
    /**
     * Regulation set for dryIce Shipment. Valid values: CFR = HazMat regulated by US Dept. of Transportation within the U.S. or ground shipments to Canada, IATA= Worldwide Air movement.  The following values are valid: IATA, CFR.
     */
    RegulationSet: string;
    DryIceWeight: DryIce_DryIceWeight;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. Relevant only in CFR regulation set. If present it is used to designate the dry Ice is for any medical use and rates are adjusted for DryIce weight more than 2.5 Kgs or 5.7 Lbs.
     */
    MedicalUseIndicator?: string;
};

