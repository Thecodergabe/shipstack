/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContainerLevel } from './ContainerLevel';
/**
 * Appointment with full details.
 */
export type AppointmentFull = {
    /**
     * The type of appointment. PALLET = 1, BEDLOAD = 2, DROP_AND_PICK = 3, SPEEDLINE = 4.
     *
     * Required for Dropship appointments.
     *
     */
    appointmentType?: AppointmentFull.appointmentType;
    /**
     * Dropship is YES. Origin Entry is NO.
     */
    destinationEntry: AppointmentFull.destinationEntry;
    /**
     * Must have either oneTimeAppointment or recurringAppointment
     */
    recurringAppointment?: {
        /**
         * Start date of appointment. Required for Create actions.
         */
        effectiveStartDate?: string;
        /**
         * End date of appointment. Required for Create actions.
         */
        effectiveEndDate?: string;
        /**
         * Time of appointment in Local Time. Required for Create actions.
         */
        appointmentTime?: string;
        /**
         * Day of the week for the appointment.  Required for Create actions.
         */
        dayFrequencyArray?: Array<'DAILY' | 'SATURDAY' | 'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY'>;
        /**
         * Week of the month for the appointment.  Required for Create actions.
         */
        weekFrequencyArray?: Array<'WEEKLY' | 'BI_WEEKLY' | 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH' | 'FIFTH' | 'SIXTH'>;
    };
    /**
     * Must have either oneTimeAppointment or recurringAppointment
     */
    oneTimeAppointment?: {
        /**
         * Preferred appointment date and time in ISO 8601 format. Required for Create actions.
         */
        preferredAppointment?: string;
        /**
         * Details of the optional appointment start and end time.
         */
        optionalAppointment?: {
            /**
             * Optional appointment start date and time in ISO 8601 format
             */
            optionalAppointmentStart?: string;
            /**
             * Optional appointment end date and time in ISO 8601 format
             */
            optionalAppointmentEnd?: string;
        };
    };
    /**
     * Details of the appointment request.
     */
    detailInfo: {
        /**
         * Additional details of the Appointment.
         */
        uspsSummary?: Array<{
            /**
             * Indicator whether this is dropship (NO) or origin entry (YES) appointment. Required for Create actions.
             */
            destinationDiscountIndicator?: 'YES' | 'NO';
            /**
             * Zone Skip in the Content of the appointment. Required for Create actions.
             */
            zoneSkippingIndicator?: 'YES' | 'NO';
            /**
             * Indicate content is full service
             */
            fullServiceIndicator?: 'YES' | 'NO';
            /**
             * Yes/No indicator representing if IMCB is part of an eInduction Content
             */
            eInductionIndicator?: 'YES' | 'NO';
            /**
             * Details and properties of the pallets for the appointment.
             */
            pallets?: Array<{
                /**
                 * Required for Create actions.
                 */
                palletPreSortLevel?: Array<{
                    /**
                     * Details of the container and its contents.
                     */
                    uspsContainerInfo?: {
                        /**
                         * Array of CRIDs of the mail owner. Maximum of 5 values in the array.
                         */
                        mailOwnerCRID?: Array<string>;
                        /**
                         * Array of IDs of the mail owner. Maximum of 5 values in the array.
                         */
                        mailOwnerID?: Array<string>;
                        /**
                         * ID of publication (Periodicals) associated with appointment content
                         */
                        uspsPublicationID?: Array<string>;
                        /**
                         * Total count of the mail pieces
                         */
                        actualPieceCount?: number;
                        /**
                         * Weight of the container
                         */
                        containerWeight?: string;
                        /**
                         * Array of Intelligent Mail Container Barcode.  Unlimited values allowed. Required for Create actions.
                         */
                        IMCB?: Array<string>;
                        /**
                         * Is the IMCB Linked or Scanned
                         */
                        IMCBInfo?: 'LINKED' | 'SCANNED';
                        /**
                         * Array of unique IMCB barcode associated to IMCB barcode.  Unlimited values allowed.
                         */
                        siblingBarcode?: Array<string>;
                        /**
                         * Status as of induction of FAST appointment
                         */
                        postInductionStatus?: 'ACCEPTED' | 'ON_HOLD' | 'REJECTED' | 'NOT_PAID' | 'TRANSPORTATION_INFO_UPDATED' | 'DISPATCHED_FOR_INDUCTION' | 'DISPATCHED_FOR_PICKUP' | 'PICKED_UP' | 'WAREHOUSED' | 'PLANNED' | 'DOCKED' | 'MAIL_READY_FOR_PICKUP' | 'DELIVERED' | 'DEPOSITED_WITH_SHIPPER' | 'EDOC_SUBMITTED' | 'MAIL_READY_TO_BE_SHIPPED' | 'POSTAGE_FINALIZED' | 'MAIL_VERIFIED_AND_RELEASED' | 'MAIL_IN_COPAL_POOL';
                        /**
                         * 3 digit zipcode of the destination
                         */
                        containerDestination3digitZIP?: string;
                        /**
                         * 5 digit zipcode of the destination
                         */
                        containerDestination5digitZIP?: string;
                    };
                    containerLevel?: ContainerLevel;
                    /**
                     * Count for the palletPreSortLevel. Required for Create actions.
                     */
                    count?: number;
                }>;
                /**
                 * Count for pallets. Required for Create actions. (One of pallets, sacks, trays count)
                 */
                count?: number;
                /**
                 * Types of containers used in appointment. Required for Create actions.
                 */
                handlingUnitType?: 'AIRBOX' | 'SACKS' | 'BUNDLES' | 'MIXED_LENGTH_TRAYS' | '1FT_TRAY' | '2FT_TRAY' | 'EMM_TRAY' | 'FLAT_TUB' | 'PARCELS';
                /**
                 * Pallet type used to house handing units. Required for Create actions.
                 */
                palletType?: 'AIRBOX' | 'PALLET' | 'EIRS_61' | 'EIRS_61P' | 'EIRS_66' | 'EIRS_68' | 'EIRS_84' | 'EIRS_84C';
            }>;
            /**
             * Details and properties of the bedload for the appointment.
             */
            bedload?: {
                /**
                 * Details of the container and its contents.
                 */
                uspsContainerInfo?: {
                    /**
                     * Array of CRIDs of the mail owner
                     */
                    mailOwnerCRID?: Array<string>;
                    /**
                     * ID of the mail owner
                     */
                    mailOwnerID?: Array<string>;
                    /**
                     * The Publication ID
                     */
                    uspsPublicationID?: Array<string>;
                    /**
                     * Total count
                     */
                    actualPieceCount?: number;
                    /**
                     * Weight of the container
                     */
                    containerWeight?: string;
                    /**
                     * Array of Intelligent Mail Container Barcodes Required for Create actions.
                     */
                    IMCB?: Array<string>;
                    /**
                     * Is the IMCB linked or scanned
                     */
                    IMCBInfo?: 'LINKED' | 'SCANNED';
                    /**
                     * Array of unique IMCB barcode associated to IMCB barcode
                     */
                    siblingBarcode?: Array<string>;
                };
                /**
                 * Array for the sacks portion of the appointment
                 */
                sacks?: Array<{
                    /**
                     * Array for the preSortLevel objects
                     */
                    preSortLevel?: Array<{
                        containerLevel?: ContainerLevel;
                        /**
                         * Count for preSortLevel.
                         */
                        count?: number;
                    }>;
                    /**
                     * Intelligent Mail Package Barcode
                     */
                    IMPB?: string;
                    /**
                     * Count for sacks. Required for Create actions. (One of pallets, sacks, trays count)
                     */
                    count?: number;
                }>;
                /**
                 * Details and properties of the trays for the appointment.
                 */
                trays?: Array<{
                    /**
                     * Array for the preSortLevel objects
                     */
                    preSortLevel?: Array<{
                        containerLevel?: ContainerLevel;
                        /**
                         * Count for preSortLevel. Required for Create actions.
                         */
                        count?: number;
                    }>;
                    /**
                     * Intelligent Mail Tray Barcode
                     */
                    IMTB?: string;
                    /**
                     * Count for trays. Required for Create actions. (One of pallets, sacks, trays count)
                     */
                    count?: number;
                    /**
                     * Tray unit types
                     */
                    type?: 'MIXED_LENGTH_TRAYS' | '1FT_TRAY' | '2FT_TRAY' | 'EMM_TRAY' | 'FLAT_TUB';
                }>;
                /**
                 * Details and properties of the parcels for the appointment.
                 */
                parcels?: Array<{
                    /**
                     * Array for the preSortLevel objects
                     */
                    preSortLevel?: Array<{
                        containerLevel?: ContainerLevel;
                        /**
                         * Count for preSortLevel
                         */
                        count?: number;
                    }>;
                    /**
                     * Count for parcels
                     */
                    count?: number;
                }>;
                /**
                 * Details and properties of the bundles for the appointment.
                 */
                bundles?: Array<{
                    /**
                     * Array for the preSortLevel objects
                     */
                    preSortLevel?: Array<{
                        containerLevel?: ContainerLevel;
                        /**
                         * Count for preSortLevel
                         */
                        count?: number;
                    }>;
                    /**
                     * Count for bundles
                     */
                    count?: number;
                }>;
            };
            /**
             * Is it perishable. Required for Create actions.
             */
            perishable?: 'YES' | 'NO';
            /**
             * Required for Create actions.|
             * Numbers represent the mailClass within legacy systems for understanding
             * 1 FIRST CLASS MAIL 2 PERIODICALS 3 USPS MARKETING MAIL (PREVIOUSLY STANDARD MAIL) 4 PACKAGE SERVICES 6 PARCEL SELECT 7 PRIORITY MAIL
             */
            mailClass?: 'FIRST_CLASS' | 'PERIODICALS' | 'USPS_MARKETING_MAIL' | 'PACKAGE_SERVICES' | 'PARCEL_SELECT' | 'PRIORITY_MAIL' | 'USPS_GROUND_ADVANTAGE';
            /**
             * Rate type describes mail class and mail shape combination
             */
            rateType?: 'R' | 'L' | 'B' | 'C' | 'S' | 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6' | 'S7' | 'F' | 'A' | 'N' | 'P' | 'T' | 'D' | 'X' | 'H' | 'M' | 'Z' | 'E' | 'E4' | 'G' | '1' | '2' | '3' | '4' | 'J' | 'K' | 'V' | 'W' | 'Y' | 'Q';
            /**
             * Start Date of Appointment in Home DELIVERY
             */
            inHomeStart?: string;
            /**
             * End Date of Appointment in Home DELIVERY
             */
            inHomeEnd?: string;
            /**
             * Mail shape category. Required for Create actions.
             */
            processingCategory?: 'LT' | 'FL' | 'CD' | 'OS' | 'MP' | 'IR' | 'PF' | 'CM' | 'SP' | 'MB';
            /**
             * Indicator for Newspaper. Required for Create actions.
             */
            newsIndicator?: 'YES' | 'NO';
            /**
             * Priority Mail Indicator. Required for Create actions.
             */
            priorityMailIndicator?: 'YES' | 'NO';
            /**
             * Verified Location for BMEU or DMU for FAST appointment
             */
            verificationLocation?: 'BMEU' | 'DMU';
            /**
             * Shipper assigned name to content
             */
            mailContentName?: string;
            /**
             * The unique ID of the mail preparer
             */
            mailPreparerID?: string;
            /**
             * CRID of the mail preparer
             */
            mailPreparerCRID?: string;
            /**
             * The unique ID of the Scheduler
             */
            schedulerContentID?: string;
            /**
             * Consignee Content ID for this USPSSummary object
             */
            consigneeContentID?: string;
        }>;
        /**
         * Consignee Content ID to stand in for above USPSSummary object
         */
        consigneeContentID?: string;
    };
    /**
     * Information about the trailer for the appointment.
     */
    trailerInfo?: {
        /**
         * max of two objects in the array
         */
        trailer?: Array<{
            /**
             * Trailer Identifier
             */
            trailerNumber?: string;
            /**
             * Length of the trailer
             */
            trailerLength?: '20FT' | '40FT' | '45FT' | '48FT' | '53FT';
        }>;
        /**
         * Details about the carrier for the appointment.
         */
        carrier?: {
            /**
             * Name of the carrier. Required for Create actions.
             */
            carrierName?: string;
            /**
             * CRID of the carrier
             */
            carrierCRID?: string;
            /**
             * Contact details of the appointment requestor.
             */
            commonContact?: Array<{
                /**
                 * Contact name
                 */
                contactName?: string;
                /**
                 * Phone number of contact, numbers only, no delimeters, optional + sign
                 */
                telephone?: string;
                /**
                 * Cell phone number of contact, numbers only, no delimeters, optional + sign
                 */
                mobilePhone?: string;
                /**
                 * Email address of contact
                 */
                email?: string;
                /**
                 * Fax number of the contact, numbers only, no delimeters, optional +
                 */
                fax?: string;
                /**
                 * Identification details for the appointment requestor.
                 */
                contactID?: {
                    /**
                     * Number on ID
                     */
                    idValue?: string;
                    /**
                     * Type of ID used
                     */
                    idValueType?: 'DRIVERS_LICENSE' | 'EMPLOYEE_ID';
                };
                /**
                 * Carrier contact type
                 */
                contactType?: 'ACCOUNT_MANAGER' | 'CARRIER' | 'CROSS_DOCK' | 'CUSTOMER_SERVICE' | 'HELP_DESK' | 'DROP_SHIP_COORDINATOR' | 'APPT_COORDINATOR' | 'PLANT' | 'INBOUND_FREIGHT_COORDINATOR' | 'SALES_OFFICE' | 'TRUCK_DRIVER' | 'WAREHOUSE' | 'OTHER';
            }>;
        };
        /**
         * max of two values in the array
         */
        billOfLadingNumberArray?: Array<{
            /**
             * Bill of lading number.
             */
            billOfLadingNumber?: string;
        }>;
    };
    /**
     * Consignee Facility details.
     */
    consigneeFacility: {
        /**
         * Facility number. Required for Create actions.
         */
        facilityNumber?: string;
        /**
         * Type of facility
         */
        facilityType?: string;
    };
    /**
     * Facility Comments
     */
    comment?: string;
    /**
     * Special appointment types offered
     */
    valueAddedService?: AppointmentFull.valueAddedService;
    /**
     * Mailer assigned ID
     */
    shipperAppointmentRequestID: string;
    /**
     * Appointment ID assigned from FAST. Required for Update actions.
     */
    consigneeAppointmentID?: string;
    /**
     * Unique ID for mailer scheduler
     */
    schedulerID?: string;
    /**
     * Unique ID of the corporation generated by PostalOne!
     */
    schedulerCorpID?: string;
    /**
     * CRID assigned to Scheduler of FAST Appointment
     */
    CRID: string;
    /**
     * ID assigned to multistop appointments
     */
    shipperMultiStopID?: string;
    /**
     * Assigned Appointment ID for multistop appointment
     */
    consigneeMultiStopID?: string;
    /**
     * Number of multistop appointments under FAST appointment
     */
    shipperStopNumber?: string;
    /**
     * Type of delivery from mailer
     */
    pickupOrDelivery?: AppointmentFull.pickupOrDelivery;
    /**
     * The number of pallet positions in the appointment
     */
    palletPositionCount?: number;
    /**
     * Indicates the Appointment is electronically processed with barcodes
     */
    includesElectronicLoad?: AppointmentFull.includesElectronicLoad;
};
export namespace AppointmentFull {
    /**
     * The type of appointment. PALLET = 1, BEDLOAD = 2, DROP_AND_PICK = 3, SPEEDLINE = 4.
     *
     * Required for Dropship appointments.
     *
     */
    export enum appointmentType {
        PALLET = 'PALLET',
        BEDLOAD = 'BEDLOAD',
        DROP_AND_PICK = 'DROP_AND_PICK',
        SPEEDLINE = 'SPEEDLINE',
    }
    /**
     * Dropship is YES. Origin Entry is NO.
     */
    export enum destinationEntry {
        YES = 'YES',
        NO = 'NO',
    }
    /**
     * Special appointment types offered
     */
    export enum valueAddedService {
        D1 = 'D1',
        D2 = 'D2',
        D3 = 'D3',
        D4 = 'D4',
        D5 = 'D5',
        D6 = 'D6',
        D7 = 'D7',
        D8 = 'D8',
        D9 = 'D9',
        D10 = 'D10',
        D11 = 'D11',
        D12 = 'D12',
        D13 = 'D13',
        D14 = 'D14',
        D15 = 'D15',
        D16 = 'D16',
        D17 = 'D17',
        D18 = 'D18',
        D19 = 'D19',
        D20 = 'D20',
    }
    /**
     * Type of delivery from mailer
     */
    export enum pickupOrDelivery {
        PICKUP = 'PICKUP',
        DELIVERY = 'DELIVERY',
    }
    /**
     * Indicates the Appointment is electronically processed with barcodes
     */
    export enum includesElectronicLoad {
        YES = 'YES',
        NO = 'NO',
    }
}

