/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for returned Rate Modifier information.  Applies if SubVersion is 2407 or greater and supports only for oAuth shipments.
 */
export type NegotiatedCharges_RateModifier = {
    /**
     * Rate Modifier Type .
     * Example- "ORM"  Applies if SubVersion is 2407 or greater and supports only for oAuth shipments.
     */
    ModifierType: string;
    /**
     * Rate Modifier Description .
     * Example- "Origin Modifier"  Applies if SubVersion is 2407 or greater and supports only for oAuth shipments.
     */
    ModifierDesc: string;
    /**
     * Amount .
     * Example- "-1.00","0.25"
     *
     * It contains positive or negative values.  Applies if SubVersion is 2407 or greater and supports only for oAuth shipments.
     */
    Amount: string;
};

