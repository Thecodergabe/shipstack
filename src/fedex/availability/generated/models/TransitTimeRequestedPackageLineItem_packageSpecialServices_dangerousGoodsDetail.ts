/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this object to specify Dangerous Goods shipment Detail.
 */
export type TransitTimeRequestedPackageLineItem_packageSpecialServices_dangerousGoodsDetail = {
    /**
     * Dangerous Goods Accessibility Type. Inaccessible means it does not have to be accessable on the aircraft.  Accessible means it must be fully accessible on the aircraft, and is more strictly controlled.
     */
    accessibility?: TransitTimeRequestedPackageLineItem_packageSpecialServices_dangerousGoodsDetail.accessibility;
    /**
     * Optional
     *
     * Specify the dangerous goods' detail from the list of available options.
     */
    options?: Array<'HAZARDOUS_MATERIALS' | 'BATTERY' | 'ORM_D' | 'REPORTABLE_QUANTITIES' | 'SMALL_QUANTITY_EXCEPTION' | 'LIMITED_QUANTITIES_COMMODITIES'>;
};
export namespace TransitTimeRequestedPackageLineItem_packageSpecialServices_dangerousGoodsDetail {
    /**
     * Dangerous Goods Accessibility Type. Inaccessible means it does not have to be accessable on the aircraft.  Accessible means it must be fully accessible on the aircraft, and is more strictly controlled.
     */
    export enum accessibility {
        ACCESSIBLE = 'ACCESSIBLE',
        INACCESSIBLE = 'INACCESSIBLE',
    }
}

