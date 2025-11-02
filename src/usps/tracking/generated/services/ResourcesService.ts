/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MultiStatusResponse } from '../models/MultiStatusResponse';
import type { ProofOfDeliveryAcknowledgement } from '../models/ProofOfDeliveryAcknowledgement';
import type { ProofOfDeliveryRequest } from '../models/ProofOfDeliveryRequest';
import type { TrackingDetails } from '../models/TrackingDetails';
import type { TrackingNotificationAcknowledgement } from '../models/TrackingNotificationAcknowledgement';
import type { TrackingNotificationRequest } from '../models/TrackingNotificationRequest';
import type { TrackingRequest } from '../models/TrackingRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Get package tracking status and delivery information.
     * This API allows users to retrieve detailed information about a specific USPS&#174; package. Using the USPS&#174; Tracking Request, individuals can view the delivery status of various mail items, such as Priority Mail&#174;, Priority Mail Express&#174;, and Package Services (including Parcel Post&#174;, Bound Printed Matter, Library Mail, and Media Mail&#174;) that have USPS&#174; Tracking. By collecting mail class and service information from Product Tracking Systems, USPS&#174; Tracking provides users with delivery status updates. By entering the tracking number, users can view the detailed delivery status of single Priority Mail&#174; and Package Service parcels with Delivery Confirmation.
     *
     * By registering for the USPS&#174; Tracking by Email service, users can receive email notifications about their package tracking events. This service allows customers to submit their email address to be notified of current or future tracking activity. Users can choose to receive notifications for all activity to date, all future activity, or both. Whenever a mail piece receives an email notifiable event, an email with the relevant information will be generated and sent. With the new request type, users can make multiple requests for a single mail piece in a single request. Tracking status can be obtained using just the IMpb, and if multiple items are found, users can include additional details in the request.
     * @param requestBody Request information required to complete the tracking request.
     * @returns TrackingDetails Successful Operation
     * @returns any An unknown error has occurred.
     * @returns MultiStatusResponse Multi-status Response
     * @throws ApiError
     */
    public static getPackageTracking(
        requestBody: TrackingRequest,
    ): CancelablePromise<TrackingDetails | any | MultiStatusResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tracking',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Resource Not Found`,
                429: `Too Many Requests. Too many requests have been received from client in a short amout of time.`,
                503: `Service Unavailable`,
            },
        });
    }
    /**
     * Register for Tracking Notifications. COMING SOON!
     * This API allows users to register up to three email addresses to receive tracking activity notifications for an item. USPS offers three different tracking activity notification options:
     * - Delivery Date Updates: Receive a message when the expected delivery date or time window is available or changes. When USPS delivers, transfers, returns, or holds your package for any reason, you will no longer receive expected delivery information.
     * - Delivery Activity: Receive a message when package has been delivered, delayed, or action is needed (e.g. Schedule Redelivery or Pickup) related to your package.
     * - All Updates: Receive a message any time there is a new tracking update.
     * @param trackingNumber The human-readable representation of trackable barcode data, commonly known as a tracking number.
     * @param requestBody Information required to process the tracking notification request.
     * @returns any An unknown error has occurred.
     * @returns TrackingNotificationAcknowledgement Successful posting of tracking notification request.
     * @throws ApiError
     */
    public static postPackageTrackingNotifications(
        trackingNumber: string,
        requestBody: TrackingNotificationRequest,
    ): CancelablePromise<any | TrackingNotificationAcknowledgement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tracking/{trackingNumber}/notifications',
            path: {
                'trackingNumber': trackingNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Package with tracking number not found.`,
                429: `Too many requests have been received from the client in a short amount of time.`,
                503: `Service Unavailable`,
            },
        });
    }
    /**
     * Receive a proof of delivery record for a given tracking number. COMING SOON!
     * This API allows users to request a proof of delivery record via email.
     * -    Proof of Delivery (POD) is a letter containing the delivery information, the recipient's name, the tracking number, an image of the recipient’s signature, and the printed name and address. Proof of Delivery is only available for items where a Signature Confirmation&#8482; service has been purchased or is included in the mail class.
     * - Return Receipt (Electronic) is a proof of delivery record for items with Return Receipt (Electronic) service.
     * @param trackingNumber The human-readable representation of trackable barcode data, commonly known as a tracking number.
     * @param requestBody Additional information required to process the delivery record request.
     * @returns any An unknown error has occurred.
     * @returns ProofOfDeliveryAcknowledgement Successful posting of the delivery record request.
     * @throws ApiError
     */
    public static proofOfDelivery(
        trackingNumber: string,
        requestBody: ProofOfDeliveryRequest,
    ): CancelablePromise<any | ProofOfDeliveryAcknowledgement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tracking/{trackingNumber}/proof-of-delivery',
            path: {
                'trackingNumber': trackingNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Package with tracking number not found.`,
                429: `Too many requests have been received from the client in a short amount of time.`,
                503: `Service Unavailable`,
            },
        });
    }
}
