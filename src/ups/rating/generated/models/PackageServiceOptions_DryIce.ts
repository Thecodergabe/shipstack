/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DryIce_DryIceWeight } from './DryIce_DryIceWeight';
/**
 * Container to hold Dry Ice information.  Lane check will happen based on postal code/ city.
 */
export type PackageServiceOptions_DryIce = {
    /**
     * Regulation set for DryIce Shipment. Valid values: CFR = For HazMat regulated by US Dept of Transportation within the U.S. or ground shipments to Canada,IATA = For Worldwide Air movement.   The following values are valid: CFR and IATA.
     */
    RegulationSet: string;
    DryIceWeight: DryIce_DryIceWeight;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. Relevant only in CFR regulation set. If present it is used to designate the Dry Ice is for any medical use and rates are adjusted for DryIce weight more than 2.5 KGS or 5.5 LBS.
     */
    MedicalUseIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. Indicates a Dry Ice audit will be performed per the Regulation Set requirements. Empty tag means indicator is present.
     */
    AuditRequired?: string;
};

