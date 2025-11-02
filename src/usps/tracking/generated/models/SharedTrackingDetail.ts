/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MailingDate } from './MailingDate';
import type { State } from './State';
/**
 * Shared tracking attributes between internal and external requests.
 */
export type SharedTrackingDetail = {
    /**
     * The human-readable representation of the item, commonly known as a tracking number.
     */
    trackingNumber?: string;
    /**
     * Additional tracking number on the item.
     */
    associatedTrackingNumber?: string;
    /**
     * The destination city.
     */
    destinationCity?: string;
    /**
     * The two-character destination country code.
     */
    destinationCountry?: string;
    destinationState?: State;
    /**
     * The destination ZIP Code&#8482;.
     */
    destinationZIPCode?: string;
    /**
     * Kahala Posts Group (KPG) member indicator.
     */
    kahalaIndicator?: boolean;
    /**
     * Indicates the mail class of the item.
     */
    mailClass?: string;
    /**
     * Indicates the abbreviated mail class of the item.
     */
    mailClassCode?: string;
    mailingDate?: MailingDate;
    /**
     * Indicates the mail type of the item (e.g. Domestic, International Inbound, Military Outbound).
     */
    mailType?: string;
    /**
     * The origin city.
     */
    originCity?: string;
    /**
     * The two-character origin country code.
     */
    originCountry?: string;
    originState?: State;
    /**
     * The origin ZIP Code&#8482;.
     */
    originZIPCode?: string;
    /**
     * Additional services on the item. May be purchased or inherent to the product. Refer to USPS&#174; [Pub 199](http://postalpro.usps.com/pub199) Appendix J: Table 7 Extra Service Codes for all possible published values.
     */
    services?: Array<string>;
    /**
     * The service type code of the item. Refer to USPS&#174; [Pub 199](http://postalpro.usps.com/pub199) Appendix I: Intelligent Mail Package Barcode Service Type Codes for all possible published values.
     */
    serviceTypeCode?: string;
    /**
     * The item status.  Refer to USPS&#174; [Pub 199](http://postalpro.usps.com/pub199) Appendix G-4: USPS Domestic Tracking Scan Events and Appendix G-5: Scan Event Codes - International Mail for all possible values.
     */
    status?: string;
    /**
     * The item status category.  Refer to USPS&#174; [Pub 199](http://postalpro.usps.com/pub199) Appendix G-4: USPS Domestic Tracking Scan Events and Appendix G-5: Scan Event Codes - International Mail for all possible values.
     */
    statusCategory?: string;
    /**
     * The status summary.
     */
    statusSummary?: string;
    /**
     * The unique tracking identifier used to reconcile duplicate tracking number scenarios.
     */
    uniqueTrackingID?: string;
};

