/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * containers
 */
export type Container = {
    /**
     * Unique identifier for a container.
     */
    containerID: string;
    /**
     * Sort Types requested.
     */
    sortType: Container.sortType;
};
export namespace Container {
    /**
     * Sort Types requested.
     */
    export enum sortType {
        TRUCK_BEDLOAD = 'TRUCK_BEDLOAD',
        OPEN_DISTRIBUTION_FULL_POSTAL_PAKS = 'OPEN_DISTRIBUTION_FULL_POSTAL_PAKS',
        OPEN_DISTRIBUTE_EMM_TRAY_BOX = 'OPEN_DISTRIBUTE_EMM_TRAY_BOX',
        OPEN_DISTRIBUTE_FULL_TRAY_BOX = 'OPEN_DISTRIBUTE_FULL_TRAY_BOX',
        OPEN_DISTRIBUTE_HALF_TRAY_BOX = 'OPEN_DISTRIBUTE_HALF_TRAY_BOX',
        OPEN_DISTRIBUTE_HALF_POSTAL_PAKS = 'OPEN_DISTRIBUTE_HALF_POSTAL_PAKS',
        OPEN_DISTRIBUTE_PALLET = 'OPEN_DISTRIBUTE_PALLET',
        OPEN_DISTRIBUTE_FLAT_TUB_TRAY_BOX = 'OPEN_DISTRIBUTE_FLAT_TUB_TRAY_BOX',
        PALLET = 'PALLET',
        RECEPTACLE = 'RECEPTACLE',
        SACK = 'SACK',
    }
}

