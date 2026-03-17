/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeWindow } from './TimeWindow';
/**
 * Field which specifies the details of the requested appointment.
 */
export type RequestedAppointmentDetail = {
    /**
     * Field which holds the requested appointment date.<br>Format: YYYY-MM-DD<br> example: '2019-05-07'
     */
    date?: string;
    /**
     * Array of different appointment time windows available on the date specified such as, Morning, afternoon, mid-day.
     */
    window?: Array<TimeWindow>;
};

