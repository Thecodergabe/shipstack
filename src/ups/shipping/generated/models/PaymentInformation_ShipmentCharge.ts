/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentCharge_BillReceiver } from './ShipmentCharge_BillReceiver';
import type { ShipmentCharge_BillShipper } from './ShipmentCharge_BillShipper';
import type { ShipmentCharge_BillThirdParty } from './ShipmentCharge_BillThirdParty';
/**
 * Shipment charge container.  If Duty and Tax charges are applicable to a shipment and a payer is not specified, the default payer of Duty and Tax charges is Bill to Receiver. There will be no default payer of Duty and Tax charges for DDU and DDP service.
 */
export type PaymentInformation_ShipmentCharge = {
    /**
     * Valid values:
     * 01 = Transportation
     * 02 = Duties and Taxes 03 = Broker of Choice  A shipment charge type of 01 = Transportation is required.
     *
     * A shipment charge type of 02 = Duties and Taxes is not required; however, this charge type is invalid for Qualified Domestic Shipments.
     *
     * A Qualified Domestic Shipment is any shipment in which one of the following applies:
     *
     * 1) The origin and destination country or territory is the same.
     *
     * 2) US to PR shipment.
     *
     * 3) PR to US shipment.
     *
     * 4) The origin and destination country or territory are both European Union countries or territories and the GoodsNotInFreeCirculation indicator is not present.
     *
     * 5) The origin and destination IATA code is the same.                                                                                                                                                                                                                                                                                                                                                                                                                                                      03 = Broker of Choice
     */
    Type: string;
    BillShipper?: ShipmentCharge_BillShipper;
    BillReceiver?: ShipmentCharge_BillReceiver;
    BillThirdParty?: ShipmentCharge_BillThirdParty;
    /**
     * Consignee Billing payment option indicator. The presence indicates consignee billing option is selected. The absence indicates one of the other payment options is selected.  This is an empty tag, any value inside is ignored. This element or its sibling element, BillShipper, BillReceiver or BillThirdParty, must be present but no more than one can be present. This billing option is valid for a shipment charge type of Transportation only. Only applies to US/PR and PR/US shipment origins and destination.
     *
     * This payment method allows you to bill the charges for a specified shipment to a consignee who has agreed to pay the charges. All shipping charges are billed to the consignees UPS account number including the following accessorials: Additional Handling, Delivery Area Surcharges, Delivery Change Requests, Early AM Premium, Early AM Out of Territory, Fuel Surcharge, Hazardous Material Surcharges, Large Package Surcharge, Over Max Limits, and Saturday Delivery.
     *
     * Declared Value, Delivery Confirmation, On Call Pickup, Remote Area Surcharge, Saturday Pickup of Delivery fees are not passed to the consignee. These charges are billed to the shippers UPS account number.
     */
    ConsigneeBilledIndicator?: string;
};

