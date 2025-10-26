/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountNumber } from './AccountNumber';
import type { Address } from './Address';
import type { Contact } from './Contact';
import type { ProductInfo } from './ProductInfo';
import type { ReferenceInfo } from './ReferenceInfo';
/**
 * The shipper details, such as postal code, state or province code, and country code of the shipper.
 */
export type Party_Shipper = {
    address: Address;
    contact?: Contact;
    accountNumber?: AccountNumber;
    referenceInfo?: ReferenceInfo;
    /**
     * Optional. Provides delivery instructions.  MaxLength is 90.
     */
    deliveryInstructions?: string;
    /**
     * optional information aboutsender/recipient including Address, Contact, Account, TIN, DeliveryInstructions, Piece, ReferenceInfo, ProductInfo.
     */
    productInfo?: ProductInfo;
};

