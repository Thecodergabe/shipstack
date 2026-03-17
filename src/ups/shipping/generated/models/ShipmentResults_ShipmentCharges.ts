/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentCharges_BaseServiceCharge } from './ShipmentCharges_BaseServiceCharge';
import type { ShipmentCharges_ItemizedCharges } from './ShipmentCharges_ItemizedCharges';
import type { ShipmentCharges_ServiceOptionsCharges } from './ShipmentCharges_ServiceOptionsCharges';
import type { ShipmentCharges_TaxCharges } from './ShipmentCharges_TaxCharges';
import type { ShipmentCharges_TotalCharges } from './ShipmentCharges_TotalCharges';
import type { ShipmentCharges_TotalChargesWithTaxes } from './ShipmentCharges_TotalChargesWithTaxes';
import type { ShipmentCharges_TransportationCharges } from './ShipmentCharges_TransportationCharges';
/**
 * Shipment charges Container. Shipment charges info.
 */
export type ShipmentResults_ShipmentCharges = {
    /**
     * Rate Type with which Shipment is rated. Possible RateChart values for different regions will be:
     * US 48 origin:
     * - 1 – Daily Rates
     * - 3 – Standard List Rates
     * - 4 – Retail Rates.
     *
     * Alaska/Hawaii origin:
     * - 1 – Daily Rates
     * - 3 – Standard List Rates
     * - 4 – Retail Rates.
     *
     * All Other origins:
     * - 1 – Rates
     * - 5 - Regional Rates
     * - 6 - General List Rates.
     *
     * 3 and 4 do not apply.
     *
     */
    RateChart?: string;
    BaseServiceCharge?: ShipmentCharges_BaseServiceCharge;
    TransportationCharges: ShipmentCharges_TransportationCharges;
    /**
     * Itemized Charges are returned only when the Subversion element is present and greater than or equal to 1601.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    ItemizedCharges?: Array<ShipmentCharges_ItemizedCharges>;
    ServiceOptionsCharges: ShipmentCharges_ServiceOptionsCharges;
    /**
     * TaxCharges container are returned only when TaxInformationIndicator is present in request and when Negotiated Rates are not applicable. TaxCharges container contains Tax information for a given shipment.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    TaxCharges?: Array<ShipmentCharges_TaxCharges>;
    TotalCharges: ShipmentCharges_TotalCharges;
    TotalChargesWithTaxes?: ShipmentCharges_TotalChargesWithTaxes;
};

