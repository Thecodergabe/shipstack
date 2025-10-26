/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlcoholDetail } from './AlcoholDetail';
import type { BatteryDetail } from './BatteryDetail';
import type { DangerousGoodsDetail } from './DangerousGoodsDetail';
import type { PackageCODDetail } from './PackageCODDetail';
import type { PriorityAlertDetail } from './PriorityAlertDetail';
import type { SignatureOptionDetail } from './SignatureOptionDetail';
import type { StandaloneBatteryDetails } from './StandaloneBatteryDetails';
import type { Weight_3 } from './Weight_3';
/**
 * These are special services that are available at the package level for some or all service types.
 */
export type PackageSpecialServicesRequested = {
    /**
     * The list of all special services requested for the package.<br><a href="/developer-portal/en-us/reference-guide.html#packagespecialservicetypes" target="_blank">Click here to see Package Special Service Types</a><br>Example:ALCOHOL
     */
    specialServiceTypes?: Array<string>;
    /**
     * Signature Option Type<br/>ADULT - Adult signature required, at recipient''s address.<br/>DIRECT - Signature required, at recipient''s address.<br>INDIRECT - Signature required, alternate address is accepted.<br/>NO_SIGNATURE_REQUIRED - Signature is not required.<br/>SERVICE_DEFAULT - Signature handled as per current Service Guide.<br>Example:ADULT
     */
    signatureOptionType?: PackageSpecialServicesRequested.signatureOptionType;
    priorityAlertDetail?: PriorityAlertDetail;
    signatureOptionDetail?: SignatureOptionDetail;
    alcoholDetail?: AlcoholDetail;
    dangerousGoodsDetail?: DangerousGoodsDetail;
    packageCODDetail?: PackageCODDetail;
    /**
     * Provide the pieceCount or VerificationBoxCount for batteries or cells that are contained within this specific package.<br>Example:1
     */
    pieceCountVerificationBoxCount?: number;
    /**
     * Provide details about the batteries or cells that are contained within this specific package.
     */
    batteryDetails?: Array<BatteryDetail>;
    dryIceWeight?: Weight_3;
    /**
     * Provide details about the batteries or cells that are contained within this specific package.
     */
    standaloneBatteryDetails?: Array<StandaloneBatteryDetails>;
};
export namespace PackageSpecialServicesRequested {
    /**
     * Signature Option Type<br/>ADULT - Adult signature required, at recipient''s address.<br/>DIRECT - Signature required, at recipient''s address.<br>INDIRECT - Signature required, alternate address is accepted.<br/>NO_SIGNATURE_REQUIRED - Signature is not required.<br/>SERVICE_DEFAULT - Signature handled as per current Service Guide.<br>Example:ADULT
     */
    export enum signatureOptionType {
        SERVICE_DEFAULT = 'SERVICE_DEFAULT',
        NO_SIGNATURE_REQUIRED = 'NO_SIGNATURE_REQUIRED',
        INDIRECT = 'INDIRECT',
        DIRECT = 'DIRECT',
        ADULT = 'ADULT',
    }
}

