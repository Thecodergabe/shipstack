/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTagRequestedShipment } from './CreateTagRequestedShipment';
import type { PartyAccountNumber } from './PartyAccountNumber';
export type Full_Schema_Create_Tag = {
    /**
     * The shipment data describing the shipment being tendered to FedEx.
     */
    requestedShipment: CreateTagRequestedShipment;
    /**
     * The specific FedEx customer account number (account value) associated with the shipment.
     */
    accountNumber: PartyAccountNumber;
};

