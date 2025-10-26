/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this object to provide Dangerous Goods Detail in the shipment.
 */
export type DangerousGoodsDetail = {
    /**
     * Specify the Dangerous Goods Accessibility Type. Valid Values: <ul><li>INACCESSIBLE - It does not have to be accessible on the aircraft.</li><li>ACCESSIBLE - It must be fully accessible on the aircraft, and is more strictly controlled.</li></ul>
     */
    accessibility?: DangerousGoodsDetail.accessibility;
    /**
     * Indicate the kind of content being reported.
     */
    options?: Array<'HAZARDOUS_MATERIALS' | 'BATTERY' | 'ORM_D' | 'REPORTABLE_QUANTITIES' | 'SMALL_QUANTITY_EXCEPTION' | 'LIMITED_QUANTITIES_COMMODITIES'>;
};
export namespace DangerousGoodsDetail {
    /**
     * Specify the Dangerous Goods Accessibility Type. Valid Values: <ul><li>INACCESSIBLE - It does not have to be accessible on the aircraft.</li><li>ACCESSIBLE - It must be fully accessible on the aircraft, and is more strictly controlled.</li></ul>
     */
    export enum accessibility {
        ACCESSIBLE = 'ACCESSIBLE',
        INACCESSIBLE = 'INACCESSIBLE',
    }
}

