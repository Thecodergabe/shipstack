/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Routing Instruction Container.
 */
export type LabelSpecification_Instruction = {
    /**
     * For Exchange Forward Shipment, by default Label will have Exchange Routing instruction Text as EXCHANGE-LIKE ITEM ONLY. If code value is: 01- EXCHANGE-LIKE ITEM ONLY, 02- EXCHANGE-DRIVER INSTRUCTIONS INSIDE.
     */
    Code: string;
    /**
     * Description of the label Instruction code.
     */
    Description?: string;
};

