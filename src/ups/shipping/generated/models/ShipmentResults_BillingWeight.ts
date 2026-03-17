/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingWeight_UnitOfMeasurement } from './BillingWeight_UnitOfMeasurement';
/**
 * Billing Weight container.
 */
export type ShipmentResults_BillingWeight = {
    UnitOfMeasurement: BillingWeight_UnitOfMeasurement;
    /**
     * Billing weight. Higher of the actual shipment weight versus the shipment dimensional weight.  When using a negotiated divisor different from the published UPS divisor (139 for inches and 5,000 for cm), the weight returned is based on the published divisor. Rates, however, are based on the negotiated divisor.
     */
    Weight: string;
};

