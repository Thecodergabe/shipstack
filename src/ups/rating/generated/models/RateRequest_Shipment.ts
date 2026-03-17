/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Shipment_AlternateDeliveryAddress } from './Shipment_AlternateDeliveryAddress';
import type { Shipment_DeliveryTimeInformation } from './Shipment_DeliveryTimeInformation';
import type { Shipment_FreightShipmentInformation } from './Shipment_FreightShipmentInformation';
import type { Shipment_FRSPaymentInformation } from './Shipment_FRSPaymentInformation';
import type { Shipment_InvoiceLineTotal } from './Shipment_InvoiceLineTotal';
import type { Shipment_Package } from './Shipment_Package';
import type { Shipment_PaymentDetails } from './Shipment_PaymentDetails';
import type { Shipment_PromotionalDiscountInformation } from './Shipment_PromotionalDiscountInformation';
import type { Shipment_Service } from './Shipment_Service';
import type { Shipment_ShipFrom } from './Shipment_ShipFrom';
import type { Shipment_ShipmentIndicationType } from './Shipment_ShipmentIndicationType';
import type { Shipment_ShipmentRatingOptions } from './Shipment_ShipmentRatingOptions';
import type { Shipment_ShipmentServiceOptions } from './Shipment_ShipmentServiceOptions';
import type { Shipment_ShipmentTotalWeight } from './Shipment_ShipmentTotalWeight';
import type { Shipment_Shipper } from './Shipment_Shipper';
import type { Shipment_ShipTo } from './Shipment_ShipTo';
/**
 * Container for Shipment Information.
 */
export type RateRequest_Shipment = {
    /**
     * The time that the request was made from the originating system. UTC time down to milliseconds. Example - 2016-07-14T12:01:33.999  Applicable only for HazMat request and with subversion greater than or equal to 1701.
     */
    OriginRecordTransactionTimestamp?: string;
    Shipper: Shipment_Shipper;
    ShipTo: Shipment_ShipTo;
    ShipFrom?: Shipment_ShipFrom;
    AlternateDeliveryAddress?: Shipment_AlternateDeliveryAddress;
    ShipmentIndicationType?: Array<Shipment_ShipmentIndicationType>;
    PaymentDetails?: Shipment_PaymentDetails;
    FRSPaymentInformation?: Shipment_FRSPaymentInformation;
    FreightShipmentInformation?: Shipment_FreightShipmentInformation;
    /**
     * Goods Not In Free Circulation indicator.  This is an empty tag, any value inside is ignored. This indicator is invalid for a package type of UPS Letter and DocumentsOnly.
     */
    GoodsNotInFreeCirculationIndicator?: string;
    Service?: Shipment_Service;
    /**
     * Total number of pieces in all pallets. Required for UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday shipments.
     */
    NumOfPieces?: string;
    ShipmentTotalWeight?: Shipment_ShipmentTotalWeight;
    /**
     * Valid values are Document and Non-document. If the indicator is present then the value is Document else Non-Document. Note: Not applicable for FRS rating  requests.  Empty Tag.
     */
    DocumentsOnlyIndicator?: string;
    Package: Array<Shipment_Package>;
    ShipmentServiceOptions?: Shipment_ShipmentServiceOptions;
    ShipmentRatingOptions?: Shipment_ShipmentRatingOptions;
    InvoiceLineTotal?: Shipment_InvoiceLineTotal;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. RatingMethodRequestedIndicator is an indicator. If present, Billable Weight Calculation method and Rating Method information would be returned in response.
     */
    RatingMethodRequestedIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. TaxInformationIndicator is an indicator. The Tax related information includes any type of Taxes, corresponding Monetary Values, Total Charges with Taxes and disclaimers (if applicable) would be returned in response.  If present, any taxes that may be applicable to a shipment would be returned in response. If this indicator is requested with NegotiatedRatesIndicator, Tax related information, if applicable, would be returned only for Negotiated Rates and not for Published Rates.
     */
    TaxInformationIndicator?: string;
    PromotionalDiscountInformation?: Shipment_PromotionalDiscountInformation;
    DeliveryTimeInformation?: Shipment_DeliveryTimeInformation;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. MasterCartonIndicator is an indicator and presence implies that shipment is Master Carton type.  If present, the shipment will be rated as a Master Carton Type. If this indicator is requested with NegotiatedRatesIndicator, rates would be returned only for Negotiated Rates and not for Published Rates.
     */
    MasterCartonIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. WWEShipmentIndicator is an indicator and presence implies that WWE service details requested for RequestOption=Shop or  RequestOption=Shoptimeintransit  RequestOption=Shop or  RequestOption=Shoptimeintransit
     */
    WWEShipmentIndicator?: string;
};

