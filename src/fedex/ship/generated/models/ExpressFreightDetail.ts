/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the advance booking number, shipper load /count and packing list details. This details must be provided by the user during freight shipment.
 */
export type ExpressFreightDetail = {
    /**
     * This is an advanced booking number that must be acquired through the appropriate channel in the shipment origin country. Without the booking number pickup and space allocation for the Express Freight shipment are not guaranteed. <br>Minimum length: 5 digits <br> Maximum length: 12 digits  <br>Example: XXXX56789812
     */
    bookingConfirmationNumber?: string;
    /**
     * Indicates the content of a container were loaded and counted by the shipper.<br>Minimum length: 1 digits <br> Maximum length: 5 digits <br>Example:  If a skid has 32 small boxes on it that are shrinkwrapped, the shippersLoadAndCount should be “32”
     */
    shippersLoadAndCount?: number;
    /**
     * This indicates whether or not the Packing List is enclosed with the shipment. A packing list is a document that includes details about the contents of a package. <br> Example: true
     */
    packingListEnclosed?: boolean;
};

