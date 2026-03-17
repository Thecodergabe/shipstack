/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Master_Pickup } from './Master_Pickup';
import type { Master_SoldTo } from './Master_SoldTo';
import type { Master_TradeComplianceDetails } from './Master_TradeComplianceDetails';
import type { TradeDirect_NotificationBeforeDelivery } from './TradeDirect_NotificationBeforeDelivery';
/**
 * A collection of small package and LTL/TL shipments that are transported by UPS from the customer to the destination CFS.
 */
export type TradeDirect_Master = {
    /**
     * If Present indicates the Sold to and Ship To are the same.
     */
    SoldToSameAsShipTo?: string;
    SoldTo?: Master_SoldTo;
    Pickup?: Master_Pickup;
    TradeComplianceDetails?: Master_TradeComplianceDetails;
    /**
     * The type of measurement used for the shipment. Imperial(lbs, in) & Metric(kgs, cm)
     *
     * Valid values are:
     *
     * - Imperial    = This system of measurement uses units such as pounds (lbs) for weight and inches (in) for length.
     *
     * - Metric = This system of measurement uses units such as kilograms (kgs) for weight and centimeters (cm) for length.
     *
     */
    UomType: TradeDirect_Master.UomType;
    NotificationBeforeDelivery?: TradeDirect_NotificationBeforeDelivery;
};
export namespace TradeDirect_Master {
    /**
     * The type of measurement used for the shipment. Imperial(lbs, in) & Metric(kgs, cm)
     *
     * Valid values are:
     *
     * - Imperial    = This system of measurement uses units such as pounds (lbs) for weight and inches (in) for length.
     *
     * - Metric = This system of measurement uses units such as kilograms (kgs) for weight and centimeters (cm) for length.
     *
     */
    export enum UomType {
        IMPERIAL = 'Imperial',
        METRIC = 'Metric',
    }
}

