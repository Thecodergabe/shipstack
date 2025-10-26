/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipperAccountNumber } from './ShipperAccountNumber';
import type { Version } from './Version';
/**
 * The request elements required to cancel a shipment.
 */
export type Full_Schema_Cancel_Shipment = {
    /**
     * The account number (account value) associated with the shipment.
     */
    accountNumber: ShipperAccountNumber;
    /**
     * A boolean flag passed by Clients to indicate that whether a shipment is a EMAIL shipment(Pending Shipment) or not. Once a shipment is confirmed, it can no longer be cancelled by having this flag as True.
     */
    emailShipment?: boolean;
    /**
     * The two-letter sender Country code(Ex: US, CA, GB..etc).<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    senderCountryCode?: string;
    /**
     * Specifies which packages in a shipment to be canceled<b>DELETE_ALL_PACKAGES</b> which will cancel all tracking numbers associated to the shipment.
     */
    deletionControl?: Full_Schema_Cancel_Shipment.deletionControl;
    /**
     * This is an unique number assigned by FedEx to the packages for tracking.<br>Example: "794953555571"
     */
    trackingNumber: string;
    version?: Version;
};
export namespace Full_Schema_Cancel_Shipment {
    /**
     * Specifies which packages in a shipment to be canceled<b>DELETE_ALL_PACKAGES</b> which will cancel all tracking numbers associated to the shipment.
     */
    export enum deletionControl {
        DELETE_ALL_PACKAGES = 'DELETE_ALL_PACKAGES',
    }
}

