/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The list of delivery dates associated with the package.
 */
export type DeliveryDate = {
    /**
     * The date of this delivery detail. Format - YYYYMMDD
     */
    date?: string;
    /**
     * The list of delivery dates associated with the package.  Valid values: SDD - Scheduled Delivery Date RDD - Rescheduled Delivery Date DEL - Delivered Date
     */
    type?: string;
};

