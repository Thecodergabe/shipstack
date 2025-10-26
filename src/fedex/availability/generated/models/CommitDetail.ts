/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CleansedAddressandLocationDetail } from './CleansedAddressandLocationDetail';
import type { CommitDetail_dateDetail } from './CommitDetail_dateDetail';
import type { CommitDetail_transitDays } from './CommitDetail_transitDays';
/**
 * The delivery commitment details.
 */
export type CommitDetail = {
    /**
     * The delivery commitment date/time the shipment will arrive at the border. <br>format [YYYY-MM-DDTHH:MM:SS:00Z]
     */
    brokerCommitTimestamp?: string;
    /**
     * Identifies the latest allowed ready time for the pickup option. The time is local to the pickup postal code. It includes a TZD (time zone designator) for FedEx Freight requests.<br> Format:  HH:MM:SS <br> Example: 18:30:00
     */
    cutOffTime?: string;
    /**
     * The Commodity applicable to this commitment.
     */
    commodityName?: string;
    transitDays?: CommitDetail_transitDays;
    /**
     * This is a message concerning the ability to provide an accurate delivery commitment on an International commit quote. These could be messages providing information about why a commitment could not be returned or a successful message such as 'REQUEST COMPLETED'
     */
    commitMessageDetails?: string;
    /**
     * FedEx internal destination address/location details.
     */
    derivedDestinationDetail?: CleansedAddressandLocationDetail;
    dateDetail?: CommitDetail_dateDetail;
};

