/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Details of where to pickup packages.
 */
export type SchedulePickupRequest_pickupLocation = {
    /**
     * This is the location of the packages ready for pick-up at the pickup address.
     */
    packageLocation: SchedulePickupRequest_pickupLocation.packageLocation;
    /**
     * Additional details on where the packages can be picked-up. This is required when the package location is 'OTHER'.
     */
    specialInstructions?: string;
    /**
     * Used to notify the carrier if a dog is present at the pickup location.
     */
    dogPresent?: boolean;
};
export namespace SchedulePickupRequest_pickupLocation {
    /**
     * This is the location of the packages ready for pick-up at the pickup address.
     */
    export enum packageLocation {
        FRONT_DOOR = 'FRONT_DOOR',
        BACK_DOOR = 'BACK_DOOR',
        SIDE_DOOR = 'SIDE_DOOR',
        KNOCK_ON_DOOR = 'KNOCK_ON_DOOR',
        MAIL_ROOM = 'MAIL_ROOM',
        OFFICE = 'OFFICE',
        PORCH = 'PORCH',
        RECEPTION = 'RECEPTION',
        MAILBOX = 'MAILBOX',
        OTHER = 'OTHER',
    }
}

