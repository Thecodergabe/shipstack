/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * PromotionalDiscountInformation container. This container contains discount information that the customer wants to request each time while placing a shipment.
 */
export type Shipment_PromotionalDiscountInformation = {
    /**
     * Promotion Code. A discount that is applied to the user.  Required if PromotionalDiscountInformation container is present.
     */
    PromoCode: string;
    /**
     * Promotion Alias code  Required if PromotionalDiscountInformation container is present.
     */
    PromoAliasCode: string;
};

