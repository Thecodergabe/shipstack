/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductWeight_UnitOfMeasurement } from './ProductWeight_UnitOfMeasurement';
/**
 * The shipping weight, including containers, for each commodity with a separate Harmonized Tariff Code / Schedule B Number. This weight does not include carrier equipment.  Applies to CO and EEI forms only. Required for CO and EEI forms.
 */
export type Product_ProductWeight = {
    UnitOfMeasurement: ProductWeight_UnitOfMeasurement;
    /**
     * Weight of Product.  Applies to CO and EEI forms only. Valid characters are 0-9 and '.' (Decimal point). Limit to 1 digit after the decimal. The maximum length of the field is 5 including '.' and can hold up to 1 decimal place.
     */
    Weight: string;
};

