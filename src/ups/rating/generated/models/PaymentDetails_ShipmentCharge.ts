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
export type PaymentDetails_ShipmentCharge = {
    /**
     * Values are 01 = Transportation, 02 = Duties and Taxes
     */
    Type: string;
    BillShipper?: ShipmentCharge_BillShipper;
    BillReceiver?: ShipmentCharge_BillReceiver;
    BillThirdParty?: ShipmentCharge_BillThirdParty;
    /**
     * Consignee Billing payment option indicator. The presence indicates consignee billing option is selected. The absence indicates one of the other payment options is selected.  Empty Tag. This element or its sibling element, BillShipper, BillReceiver or BillThirdParty, must be present but no more than one can be present. This billing option is valid for a shipment charge type of Transportation only. Only applies to US/PR and PR/US shipment origins and destination.
     */
    ConsigneeBilledIndicator?: string;
};

