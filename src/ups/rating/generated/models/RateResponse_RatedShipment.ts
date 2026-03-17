/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RatedShipment_BaseServiceCharge } from './RatedShipment_BaseServiceCharge';
import type { RatedShipment_BillingWeight } from './RatedShipment_BillingWeight';
import type { RatedShipment_Disclaimer } from './RatedShipment_Disclaimer';
import type { RatedShipment_FRSShipmentData } from './RatedShipment_FRSShipmentData';
import type { RatedShipment_GuaranteedDelivery } from './RatedShipment_GuaranteedDelivery';
import type { RatedShipment_ItemizedCharges } from './RatedShipment_ItemizedCharges';
import type { RatedShipment_NegotiatedRateCharges } from './RatedShipment_NegotiatedRateCharges';
import type { RatedShipment_RatedPackage } from './RatedShipment_RatedPackage';
import type { RatedShipment_RatedShipmentAlert } from './RatedShipment_RatedShipmentAlert';
import type { RatedShipment_Service } from './RatedShipment_Service';
import type { RatedShipment_ServiceOptionsCharges } from './RatedShipment_ServiceOptionsCharges';
import type { RatedShipment_TaxCharges } from './RatedShipment_TaxCharges';
import type { RatedShipment_TimeInTransit } from './RatedShipment_TimeInTransit';
import type { RatedShipment_TotalCharges } from './RatedShipment_TotalCharges';
import type { RatedShipment_TotalChargesWithTaxes } from './RatedShipment_TotalChargesWithTaxes';
import type { RatedShipment_TransportationCharges } from './RatedShipment_TransportationCharges';
export type RateResponse_RatedShipment = {
    /**
     * Disclaimer is used to provide more information to the shipper regarding the processed shipment. It is used to notify the shipper about possible taxes and duties that might have been added or might apply to the shipment. Refer to the Appendix for various disclaimers. This field may be returned only if TaxInformationIndicator is present in the request.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    Disclaimer?: Array<RatedShipment_Disclaimer>;
    Service: RatedShipment_Service;
    /**
     * Rate Type with which Shipment is rated. Possible RateChart values for different regions will be:
     *
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
     * - 3 and 4 do not apply
     *
     */
    RateChart?: string;
    /**
     * The Zone field will be returned in the Rate API response only when the latest subversion 2409 or greater
     *
     */
    Zone?: string;
    /**
     * Rated Shipment Alert container. There can be zero to many RatedShipmentAlert containers with code and description.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    RatedShipmentAlert?: Array<RatedShipment_RatedShipmentAlert>;
    /**
     * Indicates whether the billable weight calculation method is utilized at the package or shipment level.  This information will be returned only if RatingMethodRequestedIndicator is present in the request.  Possible values:01 = Shipment Billable Weight02 = Package Billable Weight
     */
    BillableWeightCalculationMethod?: string;
    /**
     * Indicates whether the Shipment was rated at the shipment-level or the package-level. This information will be returned only if RatingMethodRequestedIndicator is present in the request.  Possible values:01 = Shipment level02 = Package level
     */
    RatingMethod?: string;
    BillingWeight: RatedShipment_BillingWeight;
    TransportationCharges: RatedShipment_TransportationCharges;
    BaseServiceCharge?: RatedShipment_BaseServiceCharge;
    /**
     * Itemized Charges are returned only when the subversion element is present and greater than or equal to '1601'. These charges would be returned only when subversion is greater than or equal to 1601.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    ItemizedCharges?: Array<RatedShipment_ItemizedCharges>;
    FRSShipmentData?: RatedShipment_FRSShipmentData;
    ServiceOptionsCharges: RatedShipment_ServiceOptionsCharges;
    /**
     * TaxCharges container are returned only when TaxInformationIndicator is present in request and when Negotiated Rates are not applicable. TaxCharges container contains Tax information for a given shipment.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    TaxCharges?: Array<RatedShipment_TaxCharges>;
    TotalCharges: RatedShipment_TotalCharges;
    TotalChargesWithTaxes?: RatedShipment_TotalChargesWithTaxes;
    NegotiatedRateCharges?: RatedShipment_NegotiatedRateCharges;
    /**
     * Rated Package Container.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    RatedPackage: Array<RatedShipment_RatedPackage>;
    TimeInTransit?: RatedShipment_TimeInTransit;
    GuaranteedDelivery?: RatedShipment_GuaranteedDelivery;
    /**
     * Informational only
     */
    RoarRatedIndicator?: string;
};

