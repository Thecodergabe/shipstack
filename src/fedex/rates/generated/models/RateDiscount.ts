/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RateDiscount = {
    /**
     * Indicates the details of the charges are to be added to the COD collect amount. <br> Example: 95
     */
    amount?: number;
    /**
     * Specifies the name of all of the discounts that apply to the package.<br><a onclick='loadDocReference("discounts")'>Click here to see Discounts</a>
     */
    name?: string;
    /**
     * Specifies the discounts on this package.
     */
    description?: string;
    /**
     * Specifies the type of discount.
     */
    type?: string;
    /**
     * Specifies the percentage of discount.
     */
    percent?: number;
};

