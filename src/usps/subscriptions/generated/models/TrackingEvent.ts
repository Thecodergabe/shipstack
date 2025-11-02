/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventTimestamp } from './EventTimestamp';
export type TrackingEvent = {
    /**
     * Action code for the event.
     */
    actionCode?: string;
    /**
     * Collect on delivery amount due. Only applicable for Arrival at Unit (07) or Available for Pickup (14) events.
     */
    CODAmountDue?: string;
    /**
     * The city where the event occurred.
     */
    eventCity?: string;
    /**
     * Tracking event code. Refer to Domestic Scan Event list provided in USPS® Pub 199 Appendix G for all possible values.
     */
    eventCode?: string;
    /**
     * The country where the event occurred.
     */
    eventCountry?: string;
    /**
     * The name of the partner associated to the event.
     */
    eventPartner?: string;
    /**
     * The state where the event occurred.
     */
    eventState?: string;
    eventTimestamp?: EventTimestamp;
    /**
     * The description of the event (e.g. Delivery).
     */
    eventType?: string;
    /**
     * The ZIP Code™ of the event.
     */
    eventZIPCode?: string;
    /**
     * The company name if delivered to a company.
     */
    firm?: string;
    /**
     * The date and time of the event in Greenwich Mean Time (GMT).
     */
    GMTTimestamp?: string;
    /**
     * The offset of the local time of the event from Greenwich Mean Time (GMT).
     */
    GMTOffset?: string;
    /**
     * Reason code for the event.
     */
    reasonCode?: string;
    /**
     * The name of the person signing for delivery (if available).
     */
    recipientName?: string;
    /**
     * Delivery scan location certified, if applicable.
     */
    veriPoint?: boolean;
};

