/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for type of Import Control shipments.
 */
export type ShipmentServiceOptions_ImportControl = {
    /**
     * Code for type of Import Control shipment. Valid values are: ImportControl One-Attempt '03' = ImportControl Three-Attempt'04' = ImportControl Electronic Label '05' = ImportControl Print Label.
     */
    Code: string;
    /**
     * Text description of the code representing the Import Control associated with the shipment.
     */
    Description?: string;
};

