/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageIdentifier } from './PackageIdentifier';
/**
 * Additional Tracking number information like nickname, notes, shipment attributes etc.
 */
export type AdditionalTrackingInfo = {
    /**
     * Field which indicates if the current shipment has associated shipments.<br> Example: false
     */
    hasAssociatedShipments?: boolean;
    /**
     * Field which holds information about nickname of the shipment. <br> Example: Shipment nickname
     */
    nickname?: string;
    /**
     * Other related identifiers for this package such as reference numbers, purchase order number etc. Provides identifiers other than tracking number that can be used in order to track the shipment.
     */
    packageIdentifiers?: Array<PackageIdentifier>;
    /**
     * Field which holds customer assigned notes for a package.<br> Example: shipment notes
     */
    shipmentNotes?: string;
};

