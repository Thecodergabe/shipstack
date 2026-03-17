/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Access Point COD indicates Package COD is requested for a shipment.  Valid only for "01 - Hold For Pickup At UPS Access Point" Shipment Indication type. Package Access Point COD is valid only for shipment without return service from US/PR to US/PR and CA to CA. Not valid with COD at package level.
 */
export type PackageServiceOptions_AccessPointCOD = {
    /**
     * Access Point COD Currency Code.
     */
    CurrencyCode: string;
    /**
     * Access Point COD Monetary Value.
     */
    MonetaryValue: string;
};

