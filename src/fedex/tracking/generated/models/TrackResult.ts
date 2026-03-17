/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalTrackingInfo } from './AdditionalTrackingInfo';
import type { AddressVO1 } from './AddressVO1';
import type { AvailableImagesDetail } from './AvailableImagesDetail';
import type { ConsolidationDetail } from './ConsolidationDetail';
import type { ContactAndAddress1 } from './ContactAndAddress1';
import type { CustomDeliveryOption } from './CustomDeliveryOption';
import type { CXSError } from './CXSError';
import type { DeliveryDetails } from './DeliveryDetails';
import type { Distance } from './Distance';
import type { InformationNoteDetail } from './InformationNoteDetail';
import type { LocationDetail1 } from './LocationDetail1';
import type { OriginLocation } from './OriginLocation';
import type { PackageDetail } from './PackageDetail';
import type { PieceCountDetail } from './PieceCountDetail';
import type { ReasonDetail } from './ReasonDetail';
import type { ReturnDetail } from './ReturnDetail';
import type { ScanEvent } from './ScanEvent';
import type { ServiceCommitMessage } from './ServiceCommitMessage';
import type { ServiceDescriptionDetail } from './ServiceDescriptionDetail';
import type { StatusDetail } from './StatusDetail';
import type { TimeWindow } from './TimeWindow';
import type { TrackingDateAndTime } from './TrackingDateAndTime';
import type { TrackingNumberInfo_1 } from './TrackingNumberInfo_1';
import type { TrackShipmentDetail } from './TrackShipmentDetail';
import type { TrackSpecialHandling } from './TrackSpecialHandling';
/**
 * Contains detailed tracking information for the requested packages(s). In case of duplicates, multiple track details will be populated.
 */
export type TrackResult = {
    trackingNumberInfo?: TrackingNumberInfo_1;
    additionalTrackingInfo?: AdditionalTrackingInfo;
    distanceToDestination?: Distance;
    /**
     * Indicates the consolidation details.
     */
    consolidationDetail?: Array<ConsolidationDetail>;
    /**
     * The associated meter number for your FedEx account number. Maximum of 9 characters. <br> Example: 8468376
     */
    meterNumber?: string;
    returnDetail?: ReturnDetail;
    serviceDetail?: ServiceDescriptionDetail;
    /**
     * Location details for the recipient where the package will be or has been delivered.
     */
    destinationLocation?: LocationDetail1;
    latestStatusDetail?: StatusDetail;
    serviceCommitMessage?: ServiceCommitMessage;
    /**
     * Notifications to the end user that provide additional information relevant to the tracked shipment. For example, a notification may indicate that a change in behavior has occurred.
     */
    informationNotes?: Array<InformationNoteDetail>;
    error?: CXSError;
    /**
     * Indicate the special handlings on the package being tracked. Includes Special handlings requested for the package like signature options, Broker select or COD etc.<br><a onclick='loadDocReference("fedexexpressspecialhandlingcodes")'>Click here to see FedEx Express Special Handling Codes.</a>
     */
    specialHandlings?: Array<TrackSpecialHandling>;
    /**
     * The available tracking documents for the shipment being tracked. Available tracking documents includes SPOD and Bill of lading.
     */
    availableImages?: Array<AvailableImagesDetail>;
    deliveryDetails?: DeliveryDetails;
    /**
     * FedEx scan event information for a shipment. Includes the list of events and/or scans applied.
     */
    scanEvents?: Array<ScanEvent>;
    /**
     * Date and time information for the tracked shipment. Date and time information for the tracked shipment includes various type of date time including when the package was shipped, when it is expected to deliver, when it is actually delivered etc.
     */
    dateAndTimes?: Array<TrackingDateAndTime>;
    packageDetails?: PackageDetail;
    /**
     * Classification codes for the goods in package. Goods classification codes required for clearance purpose. <br> Example: goodsClassificationCode
     */
    goodsClassificationCode?: string;
    /**
     * Location details for the FedEx facility holding package for delivery. Populated only when REDIRECT_TO_HOLD_AT_LOCATION is available as custom delivery options.
     */
    holdAtLocation?: LocationDetail1;
    /**
     * List of delivery options that can be used to customize the delivery of the package.
     */
    customDeliveryOptions?: Array<CustomDeliveryOption>;
    /**
     * The estimated window for time of delivery.  May be periodically updated based on available in-flight shipment information.
     */
    estimatedDeliveryTimeWindow?: TimeWindow;
    /**
     * Piece count information at origin and destination.
     */
    pieceCounts?: Array<PieceCountDetail>;
    originLocation?: OriginLocation;
    /**
     * Contact and address information of recipient.
     */
    recipientInformation?: ContactAndAddress1;
    /**
     * The standard committed window of time by which the package is expected to be delivered.
     */
    standardTransitTimeWindow?: TimeWindow;
    shipmentDetails?: TrackShipmentDetail;
    reasonDetail?: ReasonDetail;
    /**
     * The types of email notifications that are available for the package. <br> Example:ON_DELIVERY
     */
    availableNotifications?: Array<string>;
    /**
     * Contact and address information of shipper.
     */
    shipperInformation?: ContactAndAddress1;
    /**
     * Last updated delivery address for the package.
     */
    lastUpdatedDestinationAddress?: AddressVO1;
};

