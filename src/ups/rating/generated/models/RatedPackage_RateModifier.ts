/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RatedPackage_RateModifier = {
    /**
     * Rate Modifier Type. Example: "ORM". Applies only if SubVersion is 2205 or greater.
     */
    ModifierType: string;
    /**
     * Rate Modifier Description. Example: "Origin Modifier". Applies only if SubVersion is 2205 or greater.
     */
    ModifierDesc: string;
    /**
     * Amount. Example: "-1.00","0.25". It contains positive or negative values. Applies only if SubVersion is 2205 or greater.
     */
    Amount: string;
};

