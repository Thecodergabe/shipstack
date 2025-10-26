/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdrLicenseDetail } from './AdrLicenseDetail';
import type { CompletedHazardousSummaryDetail } from './CompletedHazardousSummaryDetail';
import type { ShipmentDryIceDetail } from './ShipmentDryIceDetail';
/**
 * Completed shipment level hazardous commodity information.
 */
export type CompletedHazardousShipmentDetail = {
    hazardousSummaryDetail?: CompletedHazardousSummaryDetail;
    adrLicense?: AdrLicenseDetail;
    dryIceDetail?: ShipmentDryIceDetail;
};

