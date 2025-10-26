/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dimensions } from './Dimensions';
import type { Volume } from './Volume';
import type { Weight_Without_Link } from './Weight_Without_Link';
/**
 * Description of an individual commodity or class of content in a shipment.
 */
export type FreightShipmentLineItem = {
    /**
     * Optional <br> Total number of pieces <br> Example: 1
     */
    pieces?: number;
    volume?: Volume;
    /**
     * Optional<br>Number of individual handling units to which this line applies. (NOTE - Total of line-item-level handling units may not balance to shipment-level total handling units) <br> Example: 1
     */
    handlingUnits?: number;
    /**
     * Specify the freight class based on the item to be shipped and its weight measured per unit volume(Example: Kilograms per Cubic Meter) the shipment is categorized accordingly.<a href='http://www.fedex.com/en-us/shipping/freight/class-calculator.html' target='_blank'>Click here</a> to use Freight class calculator
     */
    freightClass: FreightShipmentLineItem.freightClass;
    /**
     * Customer-provided description of this line item <br> Example: Description
     */
    description?: string;
    /**
     * Total weight of items for this line item
     */
    weight: Weight_Without_Link;
    /**
     * Packaging type for this line item <br> Example: SELFPACKAGE
     */
    packaging?: string;
    /**
     * defaults to false. FEDEX INTERNAL USE ONLY for FedEx system that estimate freight class from customer-provided dimensions and weight <br> Example: true
     */
    classProvidedByCustomer?: boolean;
    /**
     * Indicates the kind of hazardous material content in this line item <br> Example: HAZARDOUS_MATERIALS
     */
    hazardousMaterials?: FreightShipmentLineItem.hazardousMaterials;
    /**
     * Individual line item dimensions. Conditionally required. Need volume for intra mexico rates.
     */
    dimensions?: Dimensions;
};
export namespace FreightShipmentLineItem {
    /**
     * Specify the freight class based on the item to be shipped and its weight measured per unit volume(Example: Kilograms per Cubic Meter) the shipment is categorized accordingly.<a href='http://www.fedex.com/en-us/shipping/freight/class-calculator.html' target='_blank'>Click here</a> to use Freight class calculator
     */
    export enum freightClass {
        CLASS_050 = 'CLASS_050',
        CLASS_055 = 'CLASS_055',
        CLASS_060 = 'CLASS_060',
        CLASS_065 = 'CLASS_065',
        CLASS_070 = 'CLASS_070',
        CLASS_077_5 = 'CLASS_077_5',
        CLASS_085 = 'CLASS_085',
        CLASS_092_5 = 'CLASS_092_5',
        CLASS_100 = 'CLASS_100',
        CLASS_110 = 'CLASS_110',
        CLASS_125 = 'CLASS_125',
        CLASS_150 = 'CLASS_150',
        CLASS_175 = 'CLASS_175',
        CLASS_200 = 'CLASS_200',
        CLASS_250 = 'CLASS_250',
        CLASS_300 = 'CLASS_300',
        CLASS_400 = 'CLASS_400',
        CLASS_500 = 'CLASS_500',
    }
    /**
     * Indicates the kind of hazardous material content in this line item <br> Example: HAZARDOUS_MATERIALS
     */
    export enum hazardousMaterials {
        HAZARDOUS_MATERIALS = 'HAZARDOUS_MATERIALS',
        BATTERY = 'BATTERY',
        ORM_D = 'ORM_D',
        REPORTABLE_QUANTITIES = 'REPORTABLE_QUANTITIES',
        SMALL_QUANTITY_EXCEPTION = 'SMALL_QUANTITY_EXCEPTION',
        LIMITED_QUANTITIES_COMMODITIES = 'LIMITED_QUANTITIES_COMMODITIES',
    }
}

