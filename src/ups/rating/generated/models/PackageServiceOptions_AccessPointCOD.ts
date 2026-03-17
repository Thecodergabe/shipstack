/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Access Point COD indicates Package COD is requested for a shipment.  Valid only for : 01 - Hold For Pickup At UPS Access Point, Shipment Indication type. Package Access Point COD is valid only for shipment without return service from US/PR to US/PR and CA to CA. Not valid with (Package) COD.
 */
export type PackageServiceOptions_AccessPointCOD = {
    /**
     * Access Point COD Currency Code.  Required if Access Point COD container is present. UPS does not support all international currency codes. Refer to the appendix for a list of valid codes.
     */
    CurrencyCode: string;
    /**
     * Access Point COD Monetary Value.  Required if Access Point COD container is present.
     *
     * 8 digits prior to the decimal place and 2 after.
     *
     */
    MonetaryValue: string;
};

