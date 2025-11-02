/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SchedulePickupRequest_packages = {
    /**
     * This is the type of package ready for pick-up
     */
    packageType: SchedulePickupRequest_packages.packageType;
    /**
     * Number of packages ready for pick-up for the associated Mail Class.
     */
    packageCount: number;
};
export namespace SchedulePickupRequest_packages {
    /**
     * This is the type of package ready for pick-up
     */
    export enum packageType {
        FIRST_CLASS_PACKAGE_SERVICE = 'FIRST-CLASS_PACKAGE_SERVICE',
        PRIORITY_MAIL_EXPRESS = 'PRIORITY_MAIL_EXPRESS',
        PRIORITY_MAIL = 'PRIORITY_MAIL',
        RETURNS = 'RETURNS',
        USPS_GROUND_ADVANTAGE = 'USPS_GROUND_ADVANTAGE',
        INTERNATIONAL = 'INTERNATIONAL',
        OTHER = 'OTHER',
    }
}

