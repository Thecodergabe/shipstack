/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlcoholDetail } from './AlcoholDetail';
import type { BatteryClassificationDetail } from './BatteryClassificationDetail';
import type { DangerousGoodsDetail } from './DangerousGoodsDetail';
import type { PackageCODDetail } from './PackageCODDetail';
import type { StandaloneBatteryDetails } from './StandaloneBatteryDetails';
import type { Weight_1_2 } from './Weight_1_2';
/**
 * These special services are available at the package level for some or all service types. Needs Indicated, if rate data is being requested for the special services.
 */
export type PackageSpecialServicesRequested = {
    /**
     * Indicate the special services  requested.<br><a onclick='loadDocReference("packagelevelspecialservicetypes")'>Click here to see Package level Special Service Types</a>
     */
    specialServiceTypes?: Array<string>;
    /**
     * Type of a Signature Option.
     */
    signatureOptionType?: PackageSpecialServicesRequested.signatureOptionType;
    alcoholDetail?: AlcoholDetail;
    dangerousGoodsDetail?: DangerousGoodsDetail;
    packageCODDetail?: PackageCODDetail;
    /**
     * Provide the pieceCount or VerificationBoxCount for batteries or cells that are contained within this specific package.
     */
    pieceCountVerificationBoxCount?: number;
    /**
     * Specify the details about the batteries or cells that are contained within this specific package.
     */
    batteryDetails?: Array<BatteryClassificationDetail>;
    dryIceWeight?: Weight_1_2;
    /**
     * Provides details about the batteries or cells that are contained within this specific package.
     */
    standaloneBatteryDetails?: Array<StandaloneBatteryDetails>;
};
export namespace PackageSpecialServicesRequested {
    /**
     * Type of a Signature Option.
     */
    export enum signatureOptionType {
        SERVICE_DEFAULT = 'SERVICE_DEFAULT',
        NO_SIGNATURE_REQUIRED = 'NO_SIGNATURE_REQUIRED',
        INDIRECT = 'INDIRECT',
        DIRECT = 'DIRECT',
        ADULT = 'ADULT',
    }
}

