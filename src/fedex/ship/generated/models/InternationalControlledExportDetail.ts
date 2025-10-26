/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this object to specify International Controlled Export shipment Details.<br>Note: licenseOrPermitExpirationDate and licenseOrPermitNumber are not required when type is WAREHOUSE_WITHDRAWAL.
 */
export type InternationalControlledExportDetail = {
    /**
     * Indicate the expiration date for the license or permit. The format is YYYY-MM-DD.<br>Example: "2019-12-03"
     */
    licenseOrPermitExpirationDate?: string;
    /**
     * Indicate License Or Permit Number for the commodity being exported.<br>Example: 11
     */
    licenseOrPermitNumber?: string;
    /**
     * Indicate Entry Number for the export.<br>Example: 125
     */
    entryNumber?: string;
    /**
     * Indicate the Foreign Trade Zone Code.<br>Example: US
     */
    foreignTradeZoneCode?: string;
    /**
     * International Controlled Export Type<br>Example: WAREHOUSE_WITHDRAWAL
     */
    type: InternationalControlledExportDetail.type;
};
export namespace InternationalControlledExportDetail {
    /**
     * International Controlled Export Type<br>Example: WAREHOUSE_WITHDRAWAL
     */
    export enum type {
        DEA_036 = 'DEA_036',
        DEA_236 = 'DEA_236',
        DSP_05 = 'DSP_05',
        DSP_61 = 'DSP_61',
        DSP_73 = 'DSP_73',
        DSP_85 = 'DSP_85',
        DSP_LICENSE_AGREEMENT = 'DSP_LICENSE_AGREEMENT',
        WAREHOUSE_WITHDRAWAL = 'WAREHOUSE_WITHDRAWAL',
        FROM_FOREIGN_TRADE_ZONE = 'FROM_FOREIGN_TRADE_ZONE',
        DEA_486 = 'DEA_486',
        DSP_94 = 'DSP_94',
    }
}

