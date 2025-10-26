/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Weight_1 } from './Weight_1';
/**
 * This is the descriptive data required for a FedEx shipment containing dangerous materials. This element is required when SpecialServiceType DRY_ICE is selected.<p><i>Note:<ul><li>Dry Ice is a Package level Special Service for Domestic and International shipments.</li><li>Dry Ice must be declared at both Shipment and Package level for International MPS shipments to print the compliance statement on Airway Bill labels.</li></ul></i></p>
 */
export type ShipmentDryIceDetail_1 = {
    totalWeight?: Weight_1;
    /**
     * Indicates the total number of packages in the shipment that contain dry ice.<br>Example: 12
     */
    packageCount?: number;
};

