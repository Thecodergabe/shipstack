/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreditCard_Address } from './CreditCard_Address';
/**
 * Credit card information container.  Required if neither of the following is present:
 *
 * /ShipmentRequest/Shipment/PaymentInformation/ShipmentCharge/BillShipper/AccountNumber
 * or
 * /ShipmentRequest/Shipment/PaymentInformation/ShipmentCharge/BillShipper/AlternatePaymentMethod.
 *
 * Credit card payment is valid for shipments without return service only.
 */
export type BillShipper_CreditCard = {
    /**
     * Valid values:
     * - 01 = American Express
     * - 03 = Discover
     * - 04 = MasterCard
     * - 05 = Optima
     * - 06 = VISA
     * - 07 = Bravo
     * - 08 = Diners Club
     * - 13 = Dankort
     * - 14 = Hipercard
     * - 15 = JCB
     * - 17 = Postepay
     * - 18 = UnionPay/ExpressPay
     * - 19 = Visa Electron
     * - 20 = VPAY
     * - 21 = Carte Bleue
     */
    Type: string;
    /**
     * Credit Card number.
     */
    Number: string;
    /**
     * Format is MMYYYY where MM is the 2 digit month and YYYY is the 4 digit year.  Valid month values are 01-12 and valid year values are Present Year - (Present Year + 10 years)
     */
    ExpirationDate: string;
    /**
     * Three or four digits that can be found either on top of credit card number or on the back of credit card. Number of digits varies for different type of credit card.  Valid values are 3 or 4 digits. It is required to provide the security code if credit card information is provided and when the ShipFrom countries or territories are other than the below mentioned countries or territories. Argentina, Bahamas, Costa Rica, Dominican Republic, Guatemala, Panama, Puerto Rico and Russia.
     */
    SecurityCode: string;
    Address?: CreditCard_Address;
};

