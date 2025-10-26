/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BatteryDetail = {
    /**
     * Describe the packing arrangement of the battery or cell with respect to other items within the same package.
     */
    batteryPackingType?: BatteryDetail.batteryPackingType;
    /**
     * This is a regulation specific classification for the battery or the cell.
     */
    batteryRegulatoryType?: BatteryDetail.batteryRegulatoryType;
    /**
     * Indicate the material composition of the battery or cell.
     */
    batteryMaterialType?: BatteryDetail.batteryMaterialType;
};
export namespace BatteryDetail {
    /**
     * Describe the packing arrangement of the battery or cell with respect to other items within the same package.
     */
    export enum batteryPackingType {
        CONTAINED_IN_EQUIPMENT = 'CONTAINED_IN_EQUIPMENT',
        PACKED_WITH_EQUIPMENT = 'PACKED_WITH_EQUIPMENT',
    }
    /**
     * This is a regulation specific classification for the battery or the cell.
     */
    export enum batteryRegulatoryType {
        IATA_SECTION_II = 'IATA_SECTION_II',
    }
    /**
     * Indicate the material composition of the battery or cell.
     */
    export enum batteryMaterialType {
        LITHIUM_METAL = 'LITHIUM_METAL',
        LITHIUM_ION = 'LITHIUM_ION',
    }
}

