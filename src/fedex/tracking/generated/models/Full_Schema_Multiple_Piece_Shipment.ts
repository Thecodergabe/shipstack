/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterTrackingInfo } from './MasterTrackingInfo';
import type { PagingDetails } from './PagingDetails';
/**
 * The request elements for Tracking by associated shipment.
 */
export type Full_Schema_Multiple_Piece_Shipment = {
    /**
     * Indicates if detailed scans are requested or not. <br>Valid values are True, or False.
     */
    includeDetailedScans?: boolean;
    masterTrackingNumberInfo: MasterTrackingInfo;
    /**
     * The associated shipment type, such as MPS, Group MPS, or an outbound shipment which is linked to a return shipment.<br>Example: STANDARD_MPS<br>STANDARD_MPS: Single shipment with multiple packages, where tracking number got assigned to all pieces, one tracking number is treated as master tracking number while others are child tracking numbers.<br>Group MPS: Behavior is just like standard MPS but it’s created differently. The shipper must be enrolled for this by a particular reference type like ‘PO’ (purchase order).Then any package order create on the same day going to the same place that has the reference number will get grouped into GMPS relationships.<br>OUTBOUND_LINK_TO_RETURN: is an RTRN relationship.Same concept as an MPS.the OUTBOUND_LINK_TO_RETURN is the Master outbound package tracking number, that when tracked with this indicator you can get all the child return pieces.
     */
    associatedType: Full_Schema_Multiple_Piece_Shipment.associatedType;
    pagingDetails?: PagingDetails;
};
export namespace Full_Schema_Multiple_Piece_Shipment {
    /**
     * The associated shipment type, such as MPS, Group MPS, or an outbound shipment which is linked to a return shipment.<br>Example: STANDARD_MPS<br>STANDARD_MPS: Single shipment with multiple packages, where tracking number got assigned to all pieces, one tracking number is treated as master tracking number while others are child tracking numbers.<br>Group MPS: Behavior is just like standard MPS but it’s created differently. The shipper must be enrolled for this by a particular reference type like ‘PO’ (purchase order).Then any package order create on the same day going to the same place that has the reference number will get grouped into GMPS relationships.<br>OUTBOUND_LINK_TO_RETURN: is an RTRN relationship.Same concept as an MPS.the OUTBOUND_LINK_TO_RETURN is the Master outbound package tracking number, that when tracked with this indicator you can get all the child return pieces.
     */
    export enum associatedType {
        OUTBOUND_LINK_TO_RETURN = 'OUTBOUND_LINK_TO_RETURN',
        STANDARD_MPS = 'STANDARD_MPS',
        GROUP_MPS = 'GROUP_MPS',
    }
}

