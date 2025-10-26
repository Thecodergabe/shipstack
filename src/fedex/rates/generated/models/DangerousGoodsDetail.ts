/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DangerousGoodsContainer } from './DangerousGoodsContainer';
/**
 * Use this object to specify Dangerous Goods shipment Detail.
 */
export type DangerousGoodsDetail = {
    /**
     * Indicate the Dangerous Goods Accessibility Type.<br> Inaccessible means it does not have to be accessible on the aircraft.  Accessible means it must be fully accessible on the aircraft, and is more strictly controlled.
     */
    accessibility?: DangerousGoodsDetail.accessibility;
    /**
     * Specify the special handling requested for the package.<br> Example: BATTERY
     */
    options?: Array<'HAZARDOUS_MATERIALS' | 'BATTERY' | 'ORM_D' | 'REPORTABLE_QUANTITIES' | 'SMALL_QUANTITY_EXCEPTION' | 'LIMITED_QUANTITIES_COMMODITIES'>;
    /**
     * Indicate one or more containers used to pack dangerous goods commodities.
     */
    containers?: Array<DangerousGoodsContainer>;
    /**
     * The hazardous package shipment regulation type.
     */
    regulation?: DangerousGoodsDetail.regulation;
};
export namespace DangerousGoodsDetail {
    /**
     * Indicate the Dangerous Goods Accessibility Type.<br> Inaccessible means it does not have to be accessible on the aircraft.  Accessible means it must be fully accessible on the aircraft, and is more strictly controlled.
     */
    export enum accessibility {
        ACCESSIBLE = 'ACCESSIBLE',
        INACCESSIBLE = 'INACCESSIBLE',
    }
    /**
     * The hazardous package shipment regulation type.
     */
    export enum regulation {
        ADR = 'ADR',
        DOT = 'DOT',
        IATA = 'IATA',
        ORMD = 'ORMD',
    }
}

