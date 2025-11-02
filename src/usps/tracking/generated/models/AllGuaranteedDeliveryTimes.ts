/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GuaranteedDeliveryDate } from './GuaranteedDeliveryDate';
import type { GuaranteedDeliveryText } from './GuaranteedDeliveryText';
import type { GuaranteedDeliveryTimestamp } from './GuaranteedDeliveryTimestamp';
/**
 * Guaranteed Delivery information, if available. Value may follow date, date and time, or text format (e.g. YYYY-MM-DD, YYYY-MM-DDTHH:MI, or "# Business Days").
 */
export type AllGuaranteedDeliveryTimes = (GuaranteedDeliveryDate | GuaranteedDeliveryText | GuaranteedDeliveryTimestamp);

