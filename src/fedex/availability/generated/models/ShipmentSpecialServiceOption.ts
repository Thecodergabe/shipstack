/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * FedEx Shipment Special Services options.<br><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>Click here to see Shipment Level Special Service Types</a>
 */
export type ShipmentSpecialServiceOption = {
    /**
     * Specifies customer Integration Mode
     */
    customerIntegrationMode?: string;
    /**
     * Specifies the astra label description
     */
    astraDescription?: string;
    ltlPaymentTerms?: Array<'PREPAID' | 'COLLECT' | 'COLLECT_SECTION_7_SIGNED' | 'COLLECT_SECTION_9_SIGNED'>;
    /**
     * Specifies sub-type of the special service option
     */
    subType?: string;
    /**
     * Specifies the value of the special service option.
     */
    value?: string;
    /**
     * Specify special services requested for the package.<br>Example: BROKER_SELECT_OPTION<br><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>Click here to see Shipment Level Special Service Types.</a>
     */
    specialServiceType?: string;
};

