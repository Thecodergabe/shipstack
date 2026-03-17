/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for type of Return Services.
 */
export type ShipmentServiceOptions_ReturnService = {
    /**
     * Code for type of Return shipment. Valid values are:'3' =UPS One-Attempt Return Label'5' = UPS Three Attempt Return Label'8' = UPS Electronic Return Label'9' = UPS Print Return Label'10' = UPS Exchange Print Return Label                            '11' = UPS Pack & Collect Service 1-Attempt Box 1 '12' = UPS Pack & Collect Service 1-Attempt Box 2 '13' = UPS Pack & Collect Service 1-Attempt Box 3 '14' = UPS Pack & Collect Service 1-Attempt Box 4 '15' = UPS Pack & Collect Service 1-Attempt Box 5 '16' = UPS Pack & Collect Service 3-Attempt Box 1 '17' = UPS Pack & Collect Service 3-Attempt Box 2 '18' = UPS Pack & Collect Service 3-Attempt Box 3 '19' = UPS Pack & Collect Service 3-Attempt Box 4 '20' = UPS Pack & Collect Service 3-Attempt Box 5  10 = UPS Exchange Print Return Label and 5 = UPS Three Attempt Return Label are not valid for UPS WorldWide Express Freight and UPS Worldwide Express Freight Midday Services. 3 = UPS One-Attempt Return Label is not valid return service with UPS Premium Care accessorial.
     */
    Code: string;
    /**
     * Description for type of Return Service.
     */
    Description?: string;
};

