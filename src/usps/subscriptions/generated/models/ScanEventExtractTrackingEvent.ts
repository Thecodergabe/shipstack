/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Container } from './Container';
import type { TrackingEvent } from './TrackingEvent';
export type ScanEventExtractTrackingEvent = (TrackingEvent & {
    /**
     * Barcode Input Method.
     */
    barcodeInputMethod?: string;
    /**
     * Container information.
     */
    containers?: Array<Container>;
    /**
     * Indicates if the delivery signature is electronic.
     */
    eSOL?: boolean;
    /**
     * Name of tracking event corresponding to Event Code.
     */
    scanEventExtractEventName?: string;
});

