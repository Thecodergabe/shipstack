/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RatedPackage_BillingWeight_UnitOfMeasurement } from './RatedPackage_BillingWeight_UnitOfMeasurement';
/**
 * Billing Weight Container.
 */
export type RatedPackage_BillingWeight = {
    UnitOfMeasurement: RatedPackage_BillingWeight_UnitOfMeasurement;
    /**
     * The value for the billable weight associated with the package.  When using a negotiated divisor different from the published UPS divisor (139 for inches and 5,000 for cm), the weight returned is based on the published divisor. Rates, however, are based on the negotiated divisor.
     */
    Weight: string;
};

