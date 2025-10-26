/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describe the attributes of a battery or cell that are used for classification purposes. Typically this structure would be used to allow customers to declare batteries or cells for which full dangerous goods documentation and procedures are not required.
 */
export type BatteryClassificationDetail = {
    /**
     * Describes the material composition of the battery or cell. Example: LITHIUM_METAL
     */
    material?: BatteryClassificationDetail.material;
    /**
     * Specify the regulation specific classification for the battery or cell.
     */
    regulatorySubType?: BatteryClassificationDetail.regulatorySubType;
    /**
     * Indicate the packing arrangement of the battery or cell with respect to other items within the same package. Example: CONTAINED_IN_EQUIPMENT
     */
    packing?: BatteryClassificationDetail.packing;
};
export namespace BatteryClassificationDetail {
    /**
     * Describes the material composition of the battery or cell. Example: LITHIUM_METAL
     */
    export enum material {
        LITHIUM_METAL = 'LITHIUM_METAL',
        LITHIUM_ION = 'LITHIUM_ION',
    }
    /**
     * Specify the regulation specific classification for the battery or cell.
     */
    export enum regulatorySubType {
        IATA_SECTION_II = 'IATA_SECTION_II',
    }
    /**
     * Indicate the packing arrangement of the battery or cell with respect to other items within the same package. Example: CONTAINED_IN_EQUIPMENT
     */
    export enum packing {
        CONTAINED_IN_EQUIPMENT = 'CONTAINED_IN_EQUIPMENT',
        PACKED_WITH_EQUIPMENT = 'PACKED_WITH_EQUIPMENT',
    }
}

