/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The container array that has all the payment information associated with the package, such as 'Collect on Delivery payment'.
 */
export type PaymentInformation = {
    /**
     * The payment amount. This value will contain the amount in dollars and cents, separated by a period (.) Example: '1025.50'.9
     */
    amount?: string;
    /**
     * The payment currency code (see API codes for possible values).
     */
    currency?: string;
    /**
     * The payment internal ID. This may be used in other systems to retrieve additional information on the payment.
     */
    id?: string;
    /**
     * The indication for whether the payment is paid or not. Valid values: 'true' the payment is paid. 'false' the payment is not paid.
     */
    paid?: boolean;
    /**
     * The applicable payment methods.
     */
    paymentMethod?: string;
    /**
     * The payment type.
     */
    type?: string;
};

