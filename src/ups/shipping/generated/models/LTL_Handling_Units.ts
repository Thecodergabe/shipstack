/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LTL_Dimensions } from './LTL_Dimensions';
import type { LTL_Package_Weight_Type } from './LTL_Package_Weight_Type';
/**
 * Used to provide information about the handling units in the package/ltl.
 */
export type LTL_Handling_Units = {
    /**
     * Quantity of handling units.
     */
    Quantity: string;
    /**
     * Type of handling unit.
     */
    Type: LTL_Handling_Units.Type;
    /**
     * Freight class of the handling unit.
     *
     * Valid values are:
     *
     * - 50 = over 50 lbs - Fits on standard shrink-wrapped 4X4 pallet, very durable
     * - 55 = 35-50 pounds - Bricks, cement, mortar, hardwood flooring
     * - 60 = 30-35 pounds - Car accessories & car parts
     * - 65 = 22.5-30 pounds - Car accessories & car parts, bottled beverages, books in boxes
     * - 70 = 15 to 22.5 pounds - Car accessories & car parts, food items, automobile engines
     * - 77.5 = 13.5 to 15 pounds - Tires, bathroom fixtures
     * - 85 =    12-13.5 pounds - Crated machinery, cast iron stoves
     * - 92.5 = 10.5-12 pounds - Computers, monitors, refrigerators
     * - 100 =    9-10.5 pounds - Boat covers, car covers, canvas, wine cases, caskets
     * - 110 =    8-9 pounds - Cabinets, framed artwork, table saw
     * - 125 =    7-8 pounds - Small Household appliances
     * - 150 =    6-7 pounds - Auto sheet metal parts, bookcases
     * - 175 =    5-6 pounds - Clothing, couches stuffed furniture
     * - 200 =    4-5 pounds - Auto sheet metal parts, aircraft parts, aluminum table, packaged mattresses
     * - 250 =    3-4 pounds - Bamboo furniture, mattress and box spring, plasma TV
     * - 300 =    2-3 pounds - Wood cabinets, tables, chairs setup, model boats
     * - 400 =    1-2 pounds - Deer antlers
     * - 500 =    Less than 1 lbs - Bags of gold dust, ping pong balls
     *
     */
    FreightClass: LTL_Handling_Units.FreightClass;
    Dimensions: LTL_Dimensions;
    PackageWeight: LTL_Package_Weight_Type;
};
export namespace LTL_Handling_Units {
    /**
     * Type of handling unit.
     */
    export enum Type {
        BAGS = 'BAGS',
        BOXES = 'BOXES',
        CARTONS = 'CARTONS',
        CRATES = 'CRATES',
        DRUMS = 'DRUMS',
        PALLET_SKIDS = 'PALLET_SKIDS',
        ROLLS = 'ROLLS',
        TUBES = 'TUBES',
    }
    /**
     * Freight class of the handling unit.
     *
     * Valid values are:
     *
     * - 50 = over 50 lbs - Fits on standard shrink-wrapped 4X4 pallet, very durable
     * - 55 = 35-50 pounds - Bricks, cement, mortar, hardwood flooring
     * - 60 = 30-35 pounds - Car accessories & car parts
     * - 65 = 22.5-30 pounds - Car accessories & car parts, bottled beverages, books in boxes
     * - 70 = 15 to 22.5 pounds - Car accessories & car parts, food items, automobile engines
     * - 77.5 = 13.5 to 15 pounds - Tires, bathroom fixtures
     * - 85 =    12-13.5 pounds - Crated machinery, cast iron stoves
     * - 92.5 = 10.5-12 pounds - Computers, monitors, refrigerators
     * - 100 =    9-10.5 pounds - Boat covers, car covers, canvas, wine cases, caskets
     * - 110 =    8-9 pounds - Cabinets, framed artwork, table saw
     * - 125 =    7-8 pounds - Small Household appliances
     * - 150 =    6-7 pounds - Auto sheet metal parts, bookcases
     * - 175 =    5-6 pounds - Clothing, couches stuffed furniture
     * - 200 =    4-5 pounds - Auto sheet metal parts, aircraft parts, aluminum table, packaged mattresses
     * - 250 =    3-4 pounds - Bamboo furniture, mattress and box spring, plasma TV
     * - 300 =    2-3 pounds - Wood cabinets, tables, chairs setup, model boats
     * - 400 =    1-2 pounds - Deer antlers
     * - 500 =    Less than 1 lbs - Bags of gold dust, ping pong balls
     *
     */
    export enum FreightClass {
        _50 = '50',
        _55 = '55',
        _60 = '60',
        _65 = '65',
        _70 = '70',
        _77_5 = '77.5',
        _85 = '85',
        _92_5 = '92.5',
        _100 = '100',
        _110 = '110',
        _125 = '125',
        _150 = '150',
        _175 = '175',
        _200 = '200',
        _250 = '250',
        _300 = '300',
        _400 = '400',
        _500 = '500',
    }
}

