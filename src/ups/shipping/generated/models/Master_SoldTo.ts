/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradeDirect_Address } from './TradeDirect_Address';
import type { TradeDirect_Phone } from './TradeDirect_Phone';
/**
 * Contains the address and contact details of the shipments.
 */
export type Master_SoldTo = {
    /**
     * Master Sold To Company Name.
     */
    Name: string;
    /**
     * Master Sold to Contact Name.
     */
    AttentionName?: string;
    /**
     * Master Sold To Tax Identification Number. This element has been deprecated, replacement can be found in the GlobalTaxInformation container.
     * @deprecated
     */
    TaxIdentificationNumber?: string;
    Phone?: TradeDirect_Phone;
    /**
     * The text associated with the code will be printed in the sold to section of the USMCA form.  The values indicate the following: 01 – Unknown.  Applies to USMCA form. Possible Values are 01 and 02.
     */
    Option?: string;
    Address: TradeDirect_Address;
    /**
     * Master Sold To Email Address.
     */
    EmailAddress: string;
    /**
     * Master Sold To Account Number.
     */
    AccountNumber?: string;
};

