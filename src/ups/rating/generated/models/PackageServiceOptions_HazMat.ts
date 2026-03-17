/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HazMat_HazMatChemicalRecord } from './HazMat_HazMatChemicalRecord';
/**
 * Container to hold HazMat information.  Applies only if SubVersion is greater than or equal to 1701.
 */
export type PackageServiceOptions_HazMat = {
    /**
     * Identifies the package containing Dangerous Goods.  Required if SubVersion is greater than or equal to 1701.
     */
    PackageIdentifier?: string;
    /**
     * QValue is required when a HazMat shipment specifies AllPackedInOneIndicator and the regulation set for that shipment is IATA.   Applies only if SubVersion is greater than or equal to 1701. Valid values are : 0.1; 0.2; 0.3; 0.4; 0.5; 0.6; 0.7; 0.8; 0.9; 1.0
     */
    QValue?: string;
    /**
     * Presence/Absence Indicator. Any value is ignored. Presence indicates that shipment is overpack.  Applies only if SubVersion is greater than or equal to 1701.
     */
    OverPackedIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value is ignored. Indicates the hazmat shipment/package is all packed in one.  Applies only if SubVersion is greater than or equal to 1701.
     */
    AllPackedInOneIndicator?: string;
    HazMatChemicalRecord: Array<HazMat_HazMatChemicalRecord>;
};

