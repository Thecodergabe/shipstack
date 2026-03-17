/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The available tracking documents for the shipment being tracked. Available tracking documents includes SPOD and Bill of lading.
 */
export type AvailableImagesDetail = {
    /**
     * Field which holds the size of available images for the shipment being tracked. Example: LARGE
     */
    size?: AvailableImagesDetail.size;
    /**
     * Field which holds the type of available images for the shipment being tracked.<br> Example: BILL_OF_LADING
     */
    type?: AvailableImagesDetail.type;
};
export namespace AvailableImagesDetail {
    /**
     * Field which holds the size of available images for the shipment being tracked. Example: LARGE
     */
    export enum size {
        SMALL = 'SMALL',
        LARGE = 'LARGE',
    }
    /**
     * Field which holds the type of available images for the shipment being tracked.<br> Example: BILL_OF_LADING
     */
    export enum type {
        SIGNATURE_PROOF_OF_DELIVERY = 'SIGNATURE_PROOF_OF_DELIVERY',
        BILL_OF_LADING = 'BILL_OF_LADING',
    }
}

