/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Type of ImportControl Label. This container is applicable only for ImportControl shipments.  This container is applicable only for ImportControl shipments.
 */
export type ShipmentServiceOptions_LabelMethod = {
    /**
     * Valid LabelMethod types are:
     * 01 = ImportControl Print and Mail
     * 02 = ImportControl One-Attempt
     * 03 = ImportControl Three-Attempt
     * 04 = ImportControl Electronic Label
     * 05 = ImportControl Print Label
     */
    Code: string;
    /**
     * LabelMethod description.
     */
    Description?: string;
};

