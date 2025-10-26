/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this object to specify International Controlled Export shipment Details.
 */
export type TransitTimeRequestedShipment_shipmentSpecialServices_internationalControlledExportDetail = {
    /**
     * Indicate International Controlled Export Type.<br>Example: WAREHOUSE_WITHDRAWAL
     */
    type?: TransitTimeRequestedShipment_shipmentSpecialServices_internationalControlledExportDetail.type;
};
export namespace TransitTimeRequestedShipment_shipmentSpecialServices_internationalControlledExportDetail {
    /**
     * Indicate International Controlled Export Type.<br>Example: WAREHOUSE_WITHDRAWAL
     */
    export enum type {
        DEA_036 = 'DEA_036',
        DEA_236 = 'DEA_236',
        DEA_486 = 'DEA_486',
        DSP_05 = 'DSP_05',
        DSP_61 = 'DSP_61',
        DSP_73 = 'DSP_73',
        DSP_85 = 'DSP_85',
        DSP_94 = 'DSP_94',
        DSP_LICENSE_AGREEMENT = 'DSP_LICENSE_AGREEMENT',
        FROM_FOREIGN_TRADE_ZONE = 'FROM_FOREIGN_TRADE_ZONE',
        WAREHOUSE_WITHDRAWAL = 'WAREHOUSE_WITHDRAWAL',
    }
}

