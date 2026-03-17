/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeInTransit_ServiceSummary } from './TimeInTransit_ServiceSummary';
/**
 * Container for returned Time in Transit information.  Will only be returned if request option was either "ratetimeintransit" or "shoptimeintransit" and DeliveryTimeInformation container was present in request.
 */
export type RatedShipment_TimeInTransit = {
    /**
     * The date the user requests UPS to pickup the package from the origin. Format: YYYYMMDD. In the event this Pickup date differs from the Pickup date in the Estimated Arrival Container, a warning will be returned.  In the event this Pickup date differs from the Pickup date in the Estimated Arrival Container, a warning will be returned.
     */
    PickupDate: string;
    /**
     * If the indicator is present then the shipment was processed as Document Only.
     */
    DocumentsOnlyIndicator?: string;
    /**
     * Package bill type for the shipment. Valid values:02 - Document only 03 - Non-Document04 - Pallet
     */
    PackageBillType?: string;
    ServiceSummary: TimeInTransit_ServiceSummary;
    /**
     * Required output for International requests. If Documents indicator is set for Non-document a duty is automatically calculated. The possible values to be returned are: 01 - Dutiable02 - Non-Dutiable03 - Low-value04 - Courier Remission05 - Gift06 - Military07 - Exception08 - Line Release09 - Section 321 low value.
     */
    AutoDutyCode?: string;
    /**
     * The Disclaimer is provided based upon the origin and destination country or territory codes provided in the request document. The possible disclaimers that can be returned are available in the Service Guaranteed Disclaimers table.
     */
    Disclaimer?: string;
};

