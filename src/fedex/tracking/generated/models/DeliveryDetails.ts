/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressVO1 } from './AddressVO1';
import type { DeliveryOptionElgibilityDetails } from './DeliveryOptionElgibilityDetails';
/**
 * Delivery related information for the tracked package. Provides delivery details as actual delivery address once the package is delivered, the number of delivery attempts made etc.
 */
export type DeliveryDetails = {
    /**
     * Field which holds the name of the person who received the package, if applicable.<br> Example: Receiver
     */
    receivedByName?: string;
    /**
     * Field which holds the destination service area code.<br> Example: EDDUNAVAILABLE
     */
    destinationServiceArea?: string;
    /**
     * Field which holds the description corresponding to the destination service area.<br> Example: Appointment Required
     */
    destinationServiceAreaDescription?: string;
    /**
     * Field which holds the FedEx location description for the package destination.<br> Example: Receptionist/Front Desk
     */
    locationDescription?: string;
    actualDeliveryAddress?: AddressVO1;
    /**
     * This element indicates whether the package will be delivered today. The value 'True', indicates that today is package delivery.<br> Example: true
     */
    deliveryToday?: boolean;
    /**
     * Field which holds the FedEx location type code for the package destination. If  Location Type not available we will get empty value.
     */
    locationType?: DeliveryDetails.locationType;
    /**
     * Field which holds the name of the person who signed for the package, if applicable.<br> Example: Reciever
     */
    signedByName?: string;
    /**
     * Field which identifies the method of office order delivery. 'Pickup' - the recipient will be picking up the office order from the FedEx Office Center. 'Shipment' - the office order will be delivered to the recipient as a FedEx shipment using the FedEx Service Type requested. 'Courier' - the office order will be delivered to the recipient by local courier. <br> Example: Courier
     */
    officeOrderDeliveryMethod?: string;
    /**
     * Field which holds the number of delivery attempts made to deliver the package.<br> Example: 0
     */
    deliveryAttempts?: string;
    /**
     * Specifies eligibility type for the different delivery option.
     */
    deliveryOptionEligibilityDetails?: Array<DeliveryOptionElgibilityDetails>;
};
export namespace DeliveryDetails {
    /**
     * Field which holds the FedEx location type code for the package destination. If  Location Type not available we will get empty value.
     */
    export enum locationType {
        RECEPTIONIST_OR_FRONT_DESK = 'RECEPTIONIST_OR_FRONT_DESK',
        SHIPPING_RECEIVING = 'SHIPPING_RECEIVING',
        MAILROOM = 'MAILROOM',
        RESIDENCE = 'RESIDENCE',
        GUARD_OR_SECURITY_STATION = 'GUARD_OR_SECURITY_STATION',
        FEDEX_LOCATION = 'FEDEX_LOCATION',
        IN_BOND_OR_CAGE = 'IN_BOND_OR_CAGE',
        PHARMACY = 'PHARMACY',
        GATE_HOUSE = 'GATE_HOUSE',
        MANAGER_OFFICE = 'MANAGER_OFFICE',
        MAIN_OFFICE = 'MAIN_OFFICE',
        LEASING_OFFICE = 'LEASING_OFFICE',
        RENTAL_OFFICE = 'RENTAL_OFFICE',
        APARTMENT_OFFICE = 'APARTMENT_OFFICE',
        OTHER = 'OTHER',
    }
}

