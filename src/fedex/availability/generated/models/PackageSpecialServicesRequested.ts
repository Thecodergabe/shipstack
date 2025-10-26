/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlcoholDetail } from './AlcoholDetail';
import type { BatteryDetail } from './BatteryDetail';
import type { DangerousGoodsDetail } from './DangerousGoodsDetail';
import type { PackageSpecialServicesRequestedCodDetail } from './PackageSpecialServicesRequestedCodDetail';
import type { SignatureOptionDetail } from './SignatureOptionDetail';
import type { StandaloneBatteryDetails } from './StandaloneBatteryDetails';
import type { Weight_Without_Link } from './Weight_Without_Link';
/**
 * These are special services that are available at the package level for some or all service types.
 */
export type PackageSpecialServicesRequested = {
    /**
     * Indicate the Signature Type.<br>Valid Values:<ul><li>ADULT - Adult signature required, at recipient address.</li><li>DIRECT - Signature required, at recipient address.</li><li>INDIRECT - Signature required, alternate address is accepted.(This option is available for residential deliveries only)</li><li>NO_SIGNATURE_REQUIRED - Signature is not required.</li><li>SERVICE_DEFAULT - Signature handled as per current Service Guide.</li></ul>
     */
    signatureOptionType?: PackageSpecialServicesRequested.signatureOptionType;
    signatureOptionDetail?: SignatureOptionDetail;
    alcoholDetail?: AlcoholDetail;
    dangerousGoodsDetail?: DangerousGoodsDetail;
    /**
     * Provide the pieceCount or VerificationBoxCount for batteries or cells that are contained within this specific package.
     */
    pieceCountVerificationBoxCount?: number;
    /**
     * Indicates the battery details.
     */
    batteryDetails?: Array<BatteryDetail>;
    /**
     * Special services requested for the shipment.<br>Example: <ul><li>RETURN_SHIPMENT</li><li>BROKER_SELECT_OPTION</li><li>CALL_BEFORE_DELIVERY</li><li>COD</li><li>CUSTOM_DELIVERY_WINDOW</li></ul><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>Click here to see Shipment level Special Service Types</a>
     */
    specialServiceTypes?: Array<string>;
    codDetail: PackageSpecialServicesRequestedCodDetail;
    /**
     * These are the weight details.
     */
    dryIceWeight?: Weight_Without_Link;
    /**
     * Provide details about the batteries or cells that are contained within this specific package.
     */
    standaloneBatteryDetails?: Array<StandaloneBatteryDetails>;
};
export namespace PackageSpecialServicesRequested {
    /**
     * Indicate the Signature Type.<br>Valid Values:<ul><li>ADULT - Adult signature required, at recipient address.</li><li>DIRECT - Signature required, at recipient address.</li><li>INDIRECT - Signature required, alternate address is accepted.(This option is available for residential deliveries only)</li><li>NO_SIGNATURE_REQUIRED - Signature is not required.</li><li>SERVICE_DEFAULT - Signature handled as per current Service Guide.</li></ul>
     */
    export enum signatureOptionType {
        SERVICE_DEFAULT = 'SERVICE_DEFAULT',
        NO_SIGNATURE_REQUIRED = 'NO_SIGNATURE_REQUIRED',
        INDIRECT = 'INDIRECT',
        DIRECT = 'DIRECT',
        ADULT = 'ADULT',
    }
}

