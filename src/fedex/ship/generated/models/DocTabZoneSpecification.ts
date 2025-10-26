/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the doc tab zone specification.
 */
export type DocTabZoneSpecification = {
    /**
     * It is a non-negative integer that represents the portion of doc-tab in a label.<br>Example: 1
     */
    zoneNumber?: number;
    /**
     * Indicates the parameter name in the header for the doc tab zone. The maximum charater limit is 7.<br>Example:  WHT
     */
    header?: string;
    /**
     * Indicate the path request/reply element to be printed on doc tab.<br>Example: <ul><li> REQUEST/PACKAGE/weight/Value</li><li> REQUEST/PACKAGE/weight/Value</li><li> REQUEST/PACKAGE/InsuredValue/Amount</li><li> REQUEST/SHIPMENT/SpecialServicesRequested/CodDetail/CodCollectionAmount/Amount</li><li>REQUEST/SHIPMENT/Shipper/Address/StreetLines[1]CLIENT/MeterNumber</li><li> TRANSACTION/CustomerTransactionId</li><li> REQUEST/SHIPMENT/TotalWeight/Value</li><li> REQUEST/SHIPMENT/ShipTimestamp</li><li> REQUEST/SHIPMENT/Recipient/Contact/PersonName</li><li> REPLY/SHIPMENT/OperationalDetail/DeliveryDate</li><li>  REPLY/SHIPMENT/RATES/ACTUAL/totalBaseCharge/Amount</li><li> REPLY/SHIPMENT/RATES/ACTUAL/totalFreightDiscounts/Amount</li><li>  REPLY/SHIPMENT/RATES/ACTUAL/totalSurcharges/Amount</li><li> REPLY/SHIPMENT/RATES/ACTUAL/totalNetCharge/Amount</li><li> REPLY/SHIPMENT/RATES/PAYOR_ACCOUNT_PACKAGE/totalSurcharges/Amount</li></ul>
     */
    dataField?: string;
    /**
     * Indicates the actual data to be printed in the label<br>
     */
    literalValue?: string;
    /**
     * Indicates the justification format for the string.
     */
    justification?: DocTabZoneSpecification.justification;
};
export namespace DocTabZoneSpecification {
    /**
     * Indicates the justification format for the string.
     */
    export enum justification {
        LEFT = 'LEFT',
        RIGHT = 'RIGHT',
    }
}

