/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Field which holds information about contents of the shipment. Populated for secure users only.
 */
export type ShipmentContent = {
    /**
     * Field holds the item number for the contents of shipment. <br> Example: RZ5678
     */
    itemNumber?: string;
    /**
     * Field which holds information about the quantity received. <br> Example: 13
     */
    receivedQuantity?: string;
    /**
     * Field which holds informative description about shipment content. <br> Example:  pulyurethane rope
     */
    description?: string;
    /**
     * Holds the part number of the content in shipment. <br> Example: RK1345
     */
    partNumber?: string;
};

