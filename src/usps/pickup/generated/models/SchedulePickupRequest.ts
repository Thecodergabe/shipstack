/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PickupAddress } from './PickupAddress';
import type { SchedulePickupRequest_packages } from './SchedulePickupRequest_packages';
import type { SchedulePickupRequest_pickupLocation } from './SchedulePickupRequest_pickupLocation';
/**
 * The Schedule Carrier Pickup Request includes all of the necessary information to schedule a package pickup from your carrier.
 */
export type SchedulePickupRequest = {
    /**
     * This is the requested pickup date. You can schedule pickups Monday - Saturday until 2:00 AM CT on the day of the pickup. After 2:00 AM CT, same-day pickup is not available.
     */
    pickupDate: string;
    pickupAddress: PickupAddress;
    /**
     * The details on the types and amounts of packages ready for pick-up.
     */
    packages: Array<SchedulePickupRequest_packages>;
    /**
     * Estimated aggregate weight (in pounds) of all packages ready for pick-up.
     */
    estimatedWeight: number;
    pickupLocation: SchedulePickupRequest_pickupLocation;
    /**
     * If you specify a pickup on a date when pickup service is not available.  The API will automatically schedule your pickup for the next available day when pickup is available.
     */
    nextAvailablePickup?: boolean;
};

