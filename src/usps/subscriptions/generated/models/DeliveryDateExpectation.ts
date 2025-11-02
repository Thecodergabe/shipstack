/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GuaranteedDeliveryDateOptions } from './GuaranteedDeliveryDateOptions';
/**
 * Detailed tracking information relative to when the item is expected to arrive.
 */
export type DeliveryDateExpectation = {
    /**
     * The end of day timeframe provided is the estimated timeframe by when the carrier will attempt to deliver the package.
     */
    endOfDay?: string;
    /**
     * Indicates the Expected Delivery Date for an item, if available.
     */
    expectedDeliveryDate?: string;
    guaranteedDeliveryDate?: GuaranteedDeliveryDateOptions;
    /**
     * Special messaging related to the guarantee.
     */
    guaranteedDetails?: string;
    /**
     * The Predicted Delivery Date for the item, if available.
     */
    predictedDeliveryDate?: string;
    /**
     * The source providing Predicted Delivery details for the item.
     */
    predictedDeliverySource?: string;
    /**
     * The Predicted Delivery Window start time.
     */
    predictedDeliveryWindowStartTime?: string;
    /**
     * The Predicted Delivery Window end time.
     */
    predictedDeliveryWindowEndTime?: string;
};

