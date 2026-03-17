/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentInformation_ShipmentCharge } from './PaymentInformation_ShipmentCharge';
/**
 * Payment information container for detailed shipment charges. The two shipment charges that are available for specification are Transportation charges and Duties and Taxes.  It is required for non-Ground Freight Pricing shipments only.
 */
export type Shipment_PaymentInformation = {
    ShipmentCharge: Array<PaymentInformation_ShipmentCharge>;
    /**
     * Split Duty VAT Indicator. The presence indicates the payer specified for Transportation Charges will pay transportation charges and any duties that apply to the shipment. The payer specified for Duties and Taxes will pay the VAT (Value-Added Tax) only.  This is an empty tag, any value inside is ignored. The payment method for Transportation charges must be UPS account. The UPS account must be a daily pickup account or an occasional account.
     */
    SplitDutyVATIndicator?: string;
};

