/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information uniquely identifying a shipment such as Tracking number, ShipDate, and Tracking number uniqueId.
 */
export type TrackingNumberInfo_2 = {
    /**
     * This is a Tracking number for FedEx packages used for tracking a single package or group of packages. <br> Example: 128667043726<br><a onclick='loadDocReference("mocktrackingnumbersforfedexexpressandfedexground")'>Click here to see Mock Tracking Numbers.</a>
     */
    trackingNumber: string;
    /**
     * This is a placeholder to provide the FedEx operating company (transportation) code used for package delivery. <br> Example: FDXE
     */
    carrierCode?: TrackingNumberInfo_2.carrierCode;
    /**
     * Unique identifier used to distinguish duplicate FedEx tracking numbers. This value will be set by FedEx systems. <br> Example: 245822\~123456789012\~FDEG
     */
    trackingNumberUniqueId?: string;
};
export namespace TrackingNumberInfo_2 {
    /**
     * This is a placeholder to provide the FedEx operating company (transportation) code used for package delivery. <br> Example: FDXE
     */
    export enum carrierCode {
        FDXE = 'FDXE',
        FDXG = 'FDXG',
        FXSP = 'FXSP',
        FXFR = 'FXFR',
        FDXC = 'FDXC',
        FXCC = 'FXCC',
        FEDEX_CARGO = 'FEDEX_CARGO',
        FEDEX_CUSTOM_CRITICAL = 'FEDEX_CUSTOM_CRITICAL',
        FEDEX_EXPRESS = 'FEDEX_EXPRESS',
        FEDEX_FREIGHT = 'FEDEX_FREIGHT',
        FEDEX_GROUND = 'FEDEX_GROUND',
        FEDEX_OFFICE = 'FEDEX_OFFICE',
        FEDEX_KINKOS = 'FEDEX_KINKOS',
        FX = 'FX',
        FDFR = 'FDFR',
        FDEG = 'FDEG',
        FXK = 'FXK',
        FDC = 'FDC',
        FDCC = 'FDCC',
    }
}

