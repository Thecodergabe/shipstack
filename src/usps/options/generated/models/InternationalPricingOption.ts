/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InternationalOptions } from './InternationalOptions';
import type { PaymentAccount } from './PaymentAccount';
import type { PriceTypeRequest } from './PriceTypeRequest';
export type InternationalPricingOption = {
    readonly shippingOptions?: Array<InternationalOptions>;
    priceType?: PriceTypeRequest;
    paymentAccount?: PaymentAccount;
};

