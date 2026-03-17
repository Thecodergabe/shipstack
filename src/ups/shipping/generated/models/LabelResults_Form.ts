/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LRForm_Image } from './LRForm_Image';
/**
 * Container tag for the International Forms. Currently, represents UPS Premium Care Form for Electronic Returns Label and Electronic Import Control Label. UPS  Premium Care Form for Forward shipment if Subverion is 1903 or greater  Applicable for Electronic Return Label and Electronic Import Control Label shipments only. Applies only for Canada domestic shipments. Returned for request with SubVersion greater than or equal to 1707.  UPS  Premium Care Form for Forward shipment if Subverion is 1903 or greater
 */
export type LabelResults_Form = {
    Image: LRForm_Image;
};

