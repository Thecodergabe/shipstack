/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageResults_Accessorial } from './PackageResults_Accessorial';
import type { PackageResults_BaseServiceCharge } from './PackageResults_BaseServiceCharge';
import type { PackageResults_Form } from './PackageResults_Form';
import type { PackageResults_ItemizedCharges } from './PackageResults_ItemizedCharges';
import type { PackageResults_NegotiatedCharges } from './PackageResults_NegotiatedCharges';
import type { PackageResults_RateModifier } from './PackageResults_RateModifier';
import type { PackageResults_ServiceOptionsCharges } from './PackageResults_ServiceOptionsCharges';
import type { PackageResults_ShippingLabel } from './PackageResults_ShippingLabel';
import type { PackageResults_ShippingReceipt } from './PackageResults_ShippingReceipt';
import type { PackageResults_SimpleRate } from './PackageResults_SimpleRate';
export type ShipmentResults_PackageResults = {
    /**
     * Package 1Z number.
     * For Mail Innovations shipments, please use the USPSPICNumber when tracking packages (a non-1Z number Mail Manifest Id is returned).
     */
    TrackingNumber: string;
    /**
     * Returned Package Information.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    RateModifier?: Array<PackageResults_RateModifier>;
    BaseServiceCharge?: PackageResults_BaseServiceCharge;
    ServiceOptionsCharges?: PackageResults_ServiceOptionsCharges;
    ShippingLabel?: PackageResults_ShippingLabel;
    ShippingReceipt?: PackageResults_ShippingReceipt;
    /**
     * USPSPICNumber is USPS Package Identification; it should be used for tracking Mail Innovations shipments.
     */
    USPSPICNumber?: string;
    /**
     * USPS defined CN22 ID number format varies based on destination country or territory.
     * Not applicable as of Jan 2015.
     * Mail Innovations shipments US to VI, PR, and GU are not considered international.
     */
    CN22Number?: string;
    /**
     * The container for Accessorial indicators. This information would be returned only for UPS Worldwide Express Freight and UPS Worldwide Express Freight Mid-day service request with Dry Ice or Oversize Pallet and SubVersion greater than or equal to 1707. This is valid only for UPS Worldwide Express Freight and UPS Worldwide Express Freight Mid-day service.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    Accessorial?: Array<PackageResults_Accessorial>;
    SimpleRate?: PackageResults_SimpleRate;
    Form?: PackageResults_Form;
    /**
     * Itemized Charges are returned only when the subversion element is present and greater than or equal to 1607. Package level itemized charges are only returned for US domestic movements.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    ItemizedCharges?: Array<PackageResults_ItemizedCharges>;
    NegotiatedCharges?: PackageResults_NegotiatedCharges;
};

