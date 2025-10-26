/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoverageAmount } from './CoverageAmount';
/**
 * This is used specify the line item level liability coverage.
 */
export type LiabilityCoverageDetail = {
    /**
     * Optional
     * This is the liability coverage type.
     */
    coverageType?: LiabilityCoverageDetail.coverageType;
    coverageAmount?: CoverageAmount;
};
export namespace LiabilityCoverageDetail {
    /**
     * Optional
     * This is the liability coverage type.
     */
    export enum coverageType {
        NEW = 'NEW',
        USED_OR_RECONDITIONED = 'USED_OR_RECONDITIONED',
    }
}

