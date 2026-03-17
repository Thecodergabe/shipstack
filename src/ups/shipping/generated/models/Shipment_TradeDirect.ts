/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradeDirect_Child } from './TradeDirect_Child';
import type { TradeDirect_Master } from './TradeDirect_Master';
/**
 * A UPS product that enables customers to ship directly from a manufacturer to end consumers in a different country.
 */
export type Shipment_TradeDirect = {
    Master?: TradeDirect_Master;
    Child?: TradeDirect_Child;
    /**
     * General description of the goods being shipped. It is required for master shipment.
     */
    GeneralDescriptionOfGoods?: string;
    /**
     * Consolidated shipment types.
     *
     * Valid values:
     * - TRADEDIRECTAIR =  TradeDirect Air - consolidation, custom clearance, deconsolidation and delivery to multiple addresses
     * within destination country, with Airport-to-door or door-to-door.
     *
     * - TRADEDIRECTOCEAN = TradeDirect Ocean - consolidation, ocean transportation, customs clearance, deconsolidation and delivery
     * to multiple addresses within a destination country, with port-to-door and door-to-door service from shipper to consignee. Available from more than 70 ports.
     *
     * - TRADEDIRECTCROSSBORDER = TradeDirect CrossBoarder - consolidation, customs clearance, deconsolidation and delivery to multiple addresses
     * within the destination country, with door-to-door service across North American borders.
     *
     */
    ShipmentType: Shipment_TradeDirect.ShipmentType;
    /**
     * The currency code for the shipment as per ISO 4217.
     */
    CurrencyCode: string;
};
export namespace Shipment_TradeDirect {
    /**
     * Consolidated shipment types.
     *
     * Valid values:
     * - TRADEDIRECTAIR =  TradeDirect Air - consolidation, custom clearance, deconsolidation and delivery to multiple addresses
     * within destination country, with Airport-to-door or door-to-door.
     *
     * - TRADEDIRECTOCEAN = TradeDirect Ocean - consolidation, ocean transportation, customs clearance, deconsolidation and delivery
     * to multiple addresses within a destination country, with port-to-door and door-to-door service from shipper to consignee. Available from more than 70 ports.
     *
     * - TRADEDIRECTCROSSBORDER = TradeDirect CrossBoarder - consolidation, customs clearance, deconsolidation and delivery to multiple addresses
     * within the destination country, with door-to-door service across North American borders.
     *
     */
    export enum ShipmentType {
        TRADEDIRECTAIR = 'TRADEDIRECTAIR',
        TRADEDIRECTOCEAN = 'TRADEDIRECTOCEAN',
        TRADEDIRECTCROSSBORDER = 'TRADEDIRECTCROSSBORDER',
    }
}

