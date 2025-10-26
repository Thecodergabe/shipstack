/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Provide dangerous goods shipment details.
 */
export type DangerousGoodsDetail = {
    /**
     * A Boolean value that, when True, specifies the mode of shipment transportation should be Cargo Aircraft for Dangerous Goods. Its default value is set as False.<br>Note: An identifier DGD-CAO is added in AWB for cargo aircraft shipments.
     */
    cargoAircraftOnly?: boolean;
    /**
     * It is a HazardousCommodityRegulationType(The regulation under which the DG data has been validated).
     */
    regulation?: DangerousGoodsDetail.regulation;
    /**
     * Specify Dangerous Goods Accessibility Type. <ul><li>Inaccessible &ndash; it does not have to be accessable on the aircraft.</li><li>Accessible &ndash; it must be fully accessible on the aircraft, and is more strictly controlled.</li></ul><i>Note: Accessibility is only required for IATA controlled DG shipments.</i>
     */
    accessibility?: DangerousGoodsDetail.accessibility;
    /**
     * Indicate type of DG being reported.<br> - SMALL_QUANTITY_EXCEPTION : It is applicable for only One Piece shipment.
     */
    options?: Array<'HAZARDOUS_MATERIALS' | 'BATTERY' | 'ORM_D' | 'REPORTABLE_QUANTITIES' | 'SMALL_QUANTITY_EXCEPTION' | 'LIMITED_QUANTITIES_COMMODITIES'>;
};
export namespace DangerousGoodsDetail {
    /**
     * It is a HazardousCommodityRegulationType(The regulation under which the DG data has been validated).
     */
    export enum regulation {
        ADR = 'ADR',
        DOT = 'DOT',
        IATA = 'IATA',
        ORMD = 'ORMD',
    }
    /**
     * Specify Dangerous Goods Accessibility Type. <ul><li>Inaccessible &ndash; it does not have to be accessable on the aircraft.</li><li>Accessible &ndash; it must be fully accessible on the aircraft, and is more strictly controlled.</li></ul><i>Note: Accessibility is only required for IATA controlled DG shipments.</i>
     */
    export enum accessibility {
        ACCESSIBLE = 'ACCESSIBLE',
        INACCESSIBLE = 'INACCESSIBLE',
    }
}

