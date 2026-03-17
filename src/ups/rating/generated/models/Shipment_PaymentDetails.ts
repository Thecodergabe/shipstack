/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentDetails_ShipmentCharge } from './PaymentDetails_ShipmentCharge';
/**
 * Payment details container for detailed shipment charges. The two shipment charges that are available for specification are Transportation charges and Duties and Taxes.  This container is used for Who Pays What functionality.
 */
export type Shipment_PaymentDetails = {
    ShipmentCharge: Array<PaymentDetails_ShipmentCharge>;
    /**
     * Split Duty VAT Indicator. The presence indicates the payer specified for Transportation Charges will pay transportation charges and any duties that apply to the shipment. The payer specified for Duties and Taxes will pay the VAT (Value-Added Tax) only.  Empty Tag. The payment method for Transportation charges must be UPS account. The UPS account must be a daily pickup account or an occasional account.
     */
    SplitDutyVATIndicator?: string;
};

