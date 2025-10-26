/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money_1 } from './Money_1';
/**
 * Estimated duties and taxes detail.
 */
export type EdtTaxDetail_1 = {
    /**
     * Estimated taxes type
     */
    taxType?: EdtTaxDetail_1.taxType;
    taxcode?: string;
    /**
     * Estimated duties and taxes effective date. Format [YYYY-MM-DD].
     */
    effectiveDate?: string;
    /**
     * The localized name of the surcharge.
     */
    name?: string;
    /**
     * Estimated duties and taxes taxable Value.
     */
    taxableValue?: Money_1;
    /**
     * FedEx pays the Duty and Tax charges on your behalf to ensure we can deliver your shipment as quickly as possible
     */
    description?: string;
    /**
     * Indicates the formula.
     */
    formula?: string;
    /**
     * Amount for the estimated duties and taxes type.
     */
    amount?: Money_1;
    /**
     * Estimated duties and taxes taxRates
     */
    taxRates?: Array<{
        value?: string;
        currency?: string;
        quantity?: number;
        unitOfMeasure?: string;
    }>;
    /**
     * provides details about PTA applied between countries for specific product.
     */
    appliedPreferentialTradeAgreement?: {
        id?: string;
        name?: string;
        description?: string;
    };
};
export namespace EdtTaxDetail_1 {
    /**
     * Estimated taxes type
     */
    export enum taxType {
        ADDITIONAL_TAXES = 'ADDITIONAL_TAXES',
        CONSULAR_INVOICE_FEE = 'CONSULAR_INVOICE_FEE',
        CUSTOMS_SURCHARGES = 'CUSTOMS_SURCHARGES',
        DUTY = 'DUTY',
        EXCISE_TAX = 'EXCISE_TAX',
        FOREIGN_EXCHANGE_TAX = 'FOREIGN_EXCHANGE_TAX',
        GENERAL_SALES_TAX = 'GENERAL_SALES_TAX',
        IMPORT_LICENSE_FEE = 'IMPORT_LICENSE_FEE',
        INTERNAL_ADDITIONAL_TAXES = 'INTERNAL_ADDITIONAL_TAXES',
        INTERNAL_SENSITIVE_PRODUCTS_TAX = 'INTERNAL_SENSITIVE_PRODUCTS_TAX',
        OTHER = 'OTHER',
        SENSITIVE_PRODUCTS_TAX = 'SENSITIVE_PRODUCTS_TAX',
        STAMP_TAX = 'STAMP_TAX',
        STATISTICAL_TAX = 'STATISTICAL_TAX',
        TRANSPORT_FACILITIES_TAX = 'TRANSPORT_FACILITIES_TAX',
    }
}

