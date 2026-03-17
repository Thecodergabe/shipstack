/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * TotalChargesWithTaxes container would be returned only if TaxInformationIndicator is present in request. TotalChargesWithTaxes contains total charges including total taxes applied to a shipment.
 */
export type NegotiatedRateCharges_TotalChargesWithTaxes = {
    /**
     * TotalChargesWithTaxes currency code type. The currency code used in the Shipment request is returned.
     */
    CurrencyCode: string;
    /**
     * TotalChargesWithTaxes monetary value amount.  Valid values are from 0 to 9999999999999999.99
     */
    MonetaryValue: string;
};

