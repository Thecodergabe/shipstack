/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillShipper_CreditCard } from './BillShipper_CreditCard';
/**
 * Container for the BillShipper billing option. The three payment methods that are available for the Bill Shipper billing option are alternate payment method, account number or credit card.  This element or its sibling element, BillReceiver, BillThirdParty or ConsigneeBilledIndicator, must be present but no more than one can be present.
 */
export type ShipmentCharge_BillShipper = {
    /**
     * UPS account number.  Must be the same UPS account number as the one provided in Shipper/ShipperNumber.
     *
     * Either this element or one of the sibling elements CreditCard or AlternatePaymentMethod must be provided, but all of them may not be provided.
     */
    AccountNumber?: string;
    CreditCard?: BillShipper_CreditCard;
    /**
     * Alternate Payment Method.
     *
     * Valid value: 01= PayPal
     *
     * Only valid for forward shipments. It is not valid for Return or Import Control shipments.
     *
     * This element or one of the sibling elements CreditCard or AccountNumber must be provided, but all of them may not be provided.   PayPal 01: Is only valid for forward shipments. It is not valid for Return or Import Control shipments.
     *
     * This element or one of the sibling elements CreditCard or AccountNumber must be provided, but all of them may not be provided.
     */
    AlternatePaymentMethod?: string;
};

