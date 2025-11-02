/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoreTrackingDetail } from './CoreTrackingDetail';
export type ScanEventDetails = (CoreTrackingDetail & {
    /**
     * Indicates if the delivery address information is the original address as provided in the shipping services file, if the delivery address has been standardized or if the delivery address information is invalid address.
     */
    addressStandardizedCode?: string;
    /**
     * 6 or 9 digit Mailer ID or a 7 digit alphanumeric code.
     */
    addressServiceParticipantCode?: string;
    /**
     * Address correction service code and option.
     */
    ancillaryServiceEndorsement?: string;
    /**
     * Reference numbers used for customer internal identification purposes.
     */
    customerReferenceNumber?: Array<string>;
    /**
     * Delivery address in the destination address or Standardized Address.
     */
    deliveryAddress?: string;
    /**
     * Destination ZIP +4.
     */
    destinationZIPCodePlus4?: string;
    /**
     * Unique number assigned to identify the electronic file.
     */
    electronicFileNumber?: string;
    /**
     * IMpb Compliance Report Code.
     */
    impbComplianceReportCode?: string;
    /**
     * MID of company that manages the mailing of this shipment.
     */
    logisticsManagerMailerID?: string;
    /**
     * Mailer ID number unique to this mailer as shown in the Postal Service database. Six-or Nine-digit MID.
     */
    mailerID?: string;
    /**
     * Mailer name associated with Mailer ID.
     */
    mailerName?: string;
    /**
     * Mail Owner Mailer ID.
     */
    mailOwnerMailerID?: string;
    /**
     * Original tracking number.
     */
    originalTrackingNumber?: string;
    /**
     * Foreign country postal code.
     */
    postalCode?: string;
    /**
     * Item weight, in ounces
     */
    productWeight?: string;
    startTheClockTimestamp?: string;
});

