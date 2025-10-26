/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartyAccountNumber } from './PartyAccountNumber';
import type { Version } from './Version';
export type FullSchema_getConfirmedShipmentAsyncResults = {
    accountNumber: PartyAccountNumber;
    /**
     * Indicates the job under which the deferred shipment artifacts must be identified in the subsequent retrieval request. <br> Example: 89sxxxxx233ae24ff31xxxxx
     */
    jobId: string;
    version?: Version;
};

