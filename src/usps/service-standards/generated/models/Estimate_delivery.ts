/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Facility } from './Facility';
/**
 * Section Heading that displays Delivery Date information. For all Mail Classes, occurs once for each HFPU Location. Additionally, for PME Street & PO Box, occurs once for each Customer Delivery Option.
 */
export type Estimate_delivery = {
    /**
     * The estimated delivery date in locale time at the destination.
     */
    scheduledDeliveryDateTime?: string;
    /**
     * If true, the scheduledDeliveryDateTime is guaranteed.
     */
    guaranteedDelivery?: boolean;
    holdForPickupLocation?: Facility;
};

