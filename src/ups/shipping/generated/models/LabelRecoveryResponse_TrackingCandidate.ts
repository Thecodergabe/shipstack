/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackingCandidate_PickupDateRange } from './TrackingCandidate_PickupDateRange';
/**
 * Information containing the results of the users Label Recovery Request. Returned in the event the Shipper Number and Reference Number are supplied in the request.
 */
export type LabelRecoveryResponse_TrackingCandidate = {
    /**
     * Packaging Tracking Number  Only supported for the web small package shipment so only supported 18 digit
     */
    TrackingNumber: string;
    /**
     * Destination postal code candidate
     */
    DestinationPostalCode?: string;
    /**
     * Destination country or territory code candidate, like US = USA, CA = Canada  Must be valid ups country or territory code. This is required, if MasterEUConsolidationIndicator is "1".
     */
    DestinationCountryCode?: string;
    PickupDateRange?: TrackingCandidate_PickupDateRange;
};

