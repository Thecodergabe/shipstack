/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes attributes of a battery or cell that are used for classification purposes. Typically this structure would be used to allow customers to declare batteries or cells for which full dangerous goods documentation and procedures are not required.
 */
export type TransitTimeRequestedPackageLineItem_packageSpecialServices_batteryDetails = {
    /**
     * Describes the material composition of the battery or cell.
     */
    batteryMaterialType?: TransitTimeRequestedPackageLineItem_packageSpecialServices_batteryDetails.batteryMaterialType;
    /**
     * Describes the packing arrangement of the battery or cell with respect to other items within the same package.
     */
    batteryPackingType?: TransitTimeRequestedPackageLineItem_packageSpecialServices_batteryDetails.batteryPackingType;
    /**
     * A regulation specific classification for the battery or cell.
     */
    batteryRegulatoryType?: TransitTimeRequestedPackageLineItem_packageSpecialServices_batteryDetails.batteryRegulatoryType;
};
export namespace TransitTimeRequestedPackageLineItem_packageSpecialServices_batteryDetails {
    /**
     * Describes the material composition of the battery or cell.
     */
    export enum batteryMaterialType {
        LITHIUM_METAL = 'LITHIUM_METAL',
        LITHIUM_ION = 'LITHIUM_ION',
    }
    /**
     * Describes the packing arrangement of the battery or cell with respect to other items within the same package.
     */
    export enum batteryPackingType {
        CONTAINED_IN_EQUIPMENT = 'CONTAINED_IN_EQUIPMENT',
        PACKED_WITH_EQUIPMENT = 'PACKED_WITH_EQUIPMENT',
    }
    /**
     * A regulation specific classification for the battery or cell.
     */
    export enum batteryRegulatoryType {
        IATA_SECTION_II = 'IATA_SECTION_II',
    }
}

