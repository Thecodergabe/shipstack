/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryTimeInformation_Pickup } from './DeliveryTimeInformation_Pickup';
import type { DeliveryTimeInformation_ReturnContractServices } from './DeliveryTimeInformation_ReturnContractServices';
/**
 * Container for requesting Time In Transit Information. Required to view time in transit information.  Required to view any time in transit information.
 */
export type Shipment_DeliveryTimeInformation = {
    /**
     * Valid values are:
     * - 02 - Document only
     * - 03 - Non-Document
     * - 04 - WWEF Pallet
     * - 07 - Domestic Pallet
     *
     * If 04 is included, Worldwide Express Freight and UPS Worldwide Express Freight Midday services (if applicable) will be included in the response.
     *
     */
    PackageBillType: string;
    Pickup?: DeliveryTimeInformation_Pickup;
    ReturnContractServices?: Array<DeliveryTimeInformation_ReturnContractServices>;
};

