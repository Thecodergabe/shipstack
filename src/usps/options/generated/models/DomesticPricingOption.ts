/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomesticOptions } from './DomesticOptions';
import type { PaymentAccount } from './PaymentAccount';
import type { PriceTypeRequest } from './PriceTypeRequest';
export type DomesticPricingOption = {
    readonly shippingOptions?: Array<DomesticOptions>;
    priceType?: PriceTypeRequest;
    paymentAccount?: (PaymentAccount & Record<string, any>);
};

