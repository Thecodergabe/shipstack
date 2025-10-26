/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommitDetail } from './CommitDetail';
import type { CustomerMessage } from './CustomerMessage';
import type { Distance } from './Distance';
import type { LocationDetail } from './LocationDetail';
/**
 * These are the transit time associated with the available shipment services.
 */
export type TransitTimeDetail = {
    /**
     * Type of the service is returned.
     */
    serviceType?: string;
    /**
     * These are messages returned in the response.
     */
    customerMessages?: Array<CustomerMessage>;
    distance?: Distance;
    commit?: CommitDetail;
    destinationLocation?: LocationDetail;
    /**
     * Name of service returned.
     */
    serviceName?: string;
};

