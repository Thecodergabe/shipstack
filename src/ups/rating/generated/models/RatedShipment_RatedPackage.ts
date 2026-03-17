/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RatedPackage_Accessorial } from './RatedPackage_Accessorial';
import type { RatedPackage_BaseServiceCharge } from './RatedPackage_BaseServiceCharge';
import type { RatedPackage_BillingWeight } from './RatedPackage_BillingWeight';
import type { RatedPackage_ItemizedCharges } from './RatedPackage_ItemizedCharges';
import type { RatedPackage_NegotiatedCharges } from './RatedPackage_NegotiatedCharges';
import type { RatedPackage_RateModifier } from './RatedPackage_RateModifier';
import type { RatedPackage_ServiceOptionsCharges } from './RatedPackage_ServiceOptionsCharges';
import type { RatedPackage_SimpleRate } from './RatedPackage_SimpleRate';
import type { RatedPackage_TotalCharges } from './RatedPackage_TotalCharges';
import type { RatedPackage_TransportationCharges } from './RatedPackage_TransportationCharges';
export type RatedShipment_RatedPackage = {
    BaseServiceCharge?: RatedPackage_BaseServiceCharge;
    TransportationCharges?: RatedPackage_TransportationCharges;
    ServiceOptionsCharges?: RatedPackage_ServiceOptionsCharges;
    TotalCharges?: RatedPackage_TotalCharges;
    /**
     * The weight of the package in the rated Package.
     */
    Weight?: string;
    BillingWeight?: RatedPackage_BillingWeight;
    /**
     * The container for Accessorial indicators. This information would be returned only if ItemizedChargesRequested was present during Rate request. This is valid only for UPS Worldwide Express Freight and UPS Worldwide Express Freight Mid-day service request with Dry Ice or Oversize Pallet and SubVersion greater than or equal to 1707.  This is valid only for UPS Worldwide Express Freight and UPS Worldwide Express Freight Middday Service.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    Accessorial?: Array<RatedPackage_Accessorial>;
    /**
     * Itemized Charges are returned only when the subversion element is present and greater than or equal to '1607'.  These charges would be returned only when subversion is greater than or equal to 1607.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    ItemizedCharges?: Array<RatedPackage_ItemizedCharges>;
    NegotiatedCharges?: RatedPackage_NegotiatedCharges;
    SimpleRate?: RatedPackage_SimpleRate;
    /**
     * Container for returned Rate Modifier information. Applies only if SubVersion is 2205 or greater.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    RateModifier?: Array<RatedPackage_RateModifier>;
};

