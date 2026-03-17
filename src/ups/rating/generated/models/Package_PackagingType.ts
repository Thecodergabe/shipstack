/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Packaging Type Container.
 */
export type Package_PackagingType = {
    /**
     * The code for the UPS packaging type associated with the package.  Valid values:
     * - 00 - UNKNOWN
     * - 01 - UPS Letter
     * - 02 - Package
     * - 03 - Tube
     * - 04 - Pak
     * - 21 - Express Box
     * - 24 - 25KG Box
     * - 25 - 10KG Box
     * - 30 - Pallet
     * - 2a - Small Express Box
     * - 2b - Medium Express Box
     * - 2c - Large Express Box.
     *
     * For FRS rating requests the only valid value is customer supplied packaging “02”.
     *
     */
    Code: string;
    /**
     * A text description of the code for the UPS packaging type associated with the shipment.  Length is not validated.
     */
    Description?: string;
};

