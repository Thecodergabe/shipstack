/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeclaredValue_Type } from './DeclaredValue_Type';
/**
 * Container for Declared Value.
 */
export type PackageServiceOptions_DeclaredValue = {
    Type?: DeclaredValue_Type;
    /**
     * Declared value amount currency type. Defaults to the non-Euro currency used in the shippers country or territory.  Code must represent a currency that is a valid for Shipper country or territory.
     */
    CurrencyCode: string;
    /**
     * Declared value amount.
     */
    MonetaryValue: string;
};

