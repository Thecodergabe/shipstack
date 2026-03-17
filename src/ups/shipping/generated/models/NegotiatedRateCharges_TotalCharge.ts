/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Total charges container. Account Based Rates info. Total charges are only returned for ABR eligible shipper account/UserId combinations when the user includes the NegotiatedRatesIndicator in the request.
 */
export type NegotiatedRateCharges_TotalCharge = {
    /**
     * Total charges currency code.
     */
    CurrencyCode: string;
    /**
     * Total charges monetary value.  Valid values are from 0 to 9999999999999999.99
     */
    MonetaryValue: string;
};

