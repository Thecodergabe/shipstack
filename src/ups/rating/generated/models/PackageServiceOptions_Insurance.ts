/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Insurance_BasicFlexibleParcelIndicator } from './Insurance_BasicFlexibleParcelIndicator';
import type { Insurance_ExtendedFlexibleParcelIndicator } from './Insurance_ExtendedFlexibleParcelIndicator';
import type { Insurance_TimeInTransitFlexibleParcelIndicator } from './Insurance_TimeInTransitFlexibleParcelIndicator';
/**
 * Insurance Accesorial. Only one type of insurance can exist at a time on the shipment. Valid for UPS World Wide Express Freight shipments.
 */
export type PackageServiceOptions_Insurance = {
    BasicFlexibleParcelIndicator?: Insurance_BasicFlexibleParcelIndicator;
    ExtendedFlexibleParcelIndicator?: Insurance_ExtendedFlexibleParcelIndicator;
    TimeInTransitFlexibleParcelIndicator?: Insurance_TimeInTransitFlexibleParcelIndicator;
};

