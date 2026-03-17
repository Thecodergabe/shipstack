/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * TotalChargesWithTaxes container would be returned only if TaxInformationIndicator is present in request and when Negotiated Rates are not applicable. TotalChargesWithTaxes contains total charges including total taxes applied to a shipment.
 */
export type RatedShipment_TotalChargesWithTaxes = {
    /**
     * TotalChargesWithTaxes currency code type. The currency code used in the Shipment request is returned.
     */
    CurrencyCode: string;
    /**
     * TotalChargesWithTaxes monetary value amount.  Valid values are from 0 to 99999999999999.99
     */
    MonetaryValue: string;
};

