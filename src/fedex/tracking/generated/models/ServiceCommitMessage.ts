/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Commitment message for this package. Informative messages related to the package. Used to convey information such as FedEx has received information about a package but has not yet taken possession of it. FedEx has handed the package off to a third party for final delivery. The package delivery has been cancelled.
 */
export type ServiceCommitMessage = {
    /**
     * Field which holds the commitment message for this package.<br> Example: No scheduled delivery date available at this time.
     */
    message?: string;
    /**
     * Field which holds the type of service commit message.<br> Example: ESTIMATED_DELIVERY_DATE_UNAVAILABLE
     */
    type?: ServiceCommitMessage.type;
};
export namespace ServiceCommitMessage {
    /**
     * Field which holds the type of service commit message.<br> Example: ESTIMATED_DELIVERY_DATE_UNAVAILABLE
     */
    export enum type {
        BROKER_DELIVERED_DESCRIPTION = 'BROKER_DELIVERED_DESCRIPTION',
        CANCELLED_DESCRIPTION = 'CANCELLED_DESCRIPTION',
        DELIVERY_IN_MULTIPLE_PIECE_SHIPMENT = 'DELIVERY_IN_MULTIPLE_PIECE_SHIPMENT',
        ESTIMATED_DELIVERY_DATE_UNAVAILABLE = 'ESTIMATED_DELIVERY_DATE_UNAVAILABLE',
        EXCEPTION_IN_MULTIPLE_PIECE_SHIPMENT = 'EXCEPTION_IN_MULTIPLE_PIECE_SHIPMENT',
        FINAL_DELIVERY_ATTEMPTED = 'FINAL_DELIVERY_ATTEMPTED',
        FIRST_DELIVERY_ATTEMPTED = 'FIRST_DELIVERY_ATTEMPTED',
        HELD_PACKAGE_AVAILABLE_FOR_RECIPIENT_PICKUP = 'HELD_PACKAGE_AVAILABLE_FOR_RECIPIENT_PICKUP',
        HELD_PACKAGE_AVAILABLE_FOR_RECIPIENT_PICKUP_WITH_ADDRESS = 'HELD_PACKAGE_AVAILABLE_FOR_RECIPIENT_PICKUP_WITH_ADDRESS',
        HELD_PACKAGE_NOT_AVAILABLE_FOR_RECIPIENT_PICKUP = 'HELD_PACKAGE_NOT_AVAILABLE_FOR_RECIPIENT_PICKUP',
        SHIPMENT_LABEL_CREATED = 'SHIPMENT_LABEL_CREATED',
        SUBSEQUENT_DELIVERY_ATTEMPTED = 'SUBSEQUENT_DELIVERY_ATTEMPTED',
        USPS_DELIVERED = 'USPS_DELIVERED',
        USPS_DELIVERING_ = 'USPS_DELIVERING"',
    }
}

