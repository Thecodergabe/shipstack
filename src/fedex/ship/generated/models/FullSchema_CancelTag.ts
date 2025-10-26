/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompletedTagDetail_2 } from './CompletedTagDetail_2';
import type { PartyAccountNumber_2 } from './PartyAccountNumber_2';
/**
 * The input details required to cancel a tag.
 */
export type FullSchema_CancelTag = {
    /**
     * The specific FedEx customer account number (account value and account key) associated with the shipment.
     */
    accountNumber: PartyAccountNumber_2;
    /**
     * This is the FedEx service type associated with the shipment.<br>Example: PRIORITY_OVERNIGHT<br><a onclick='loadDocReference("servicetypes")'>Click here to see Service Types</a>
     */
    serviceType: string;
    /**
     * The tracking number for the Express or Ground Tag to the cancelled.<br>Example: 301025281523<br><a onclick='loadDocReference("mocktrackingnumbersforfedexexpressandfedexground")'>Click here to see mock tracking numbers for FedEx Express and FedEx Ground.</a>
     */
    trackingNumber?: string;
    /**
     * The details of the package for which shipping has been completed. The details include dispatch confirmation number, dispatch date, location, and the cxs alerts associated with the process.
     */
    completedTagDetail: CompletedTagDetail_2;
};

