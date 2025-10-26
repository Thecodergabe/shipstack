/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies documentation and limits for validation of an individual packing group/category. DG Data Upload Mode: Required (IATA), Optional (Other), DG Full Validation Mode: Required (IATA), Optional (Other),
 */
export type HazardousCommodityPackingDetail01 = {
    /**
     * Coded specification for how commodity is to be packed.<br>Example: packing Instructions
     */
    packingInstructions?: string;
    /**
     * A Boolean value that, when True, specifies the mode of shipment transportation should be Cargo Aircraft for Dangerous Goods. <br>Note: An identifier DGD-CAO is added in AWB for cargo aircraft shipments.Example: true
     */
    cargoAircraftOnly: boolean;
};

