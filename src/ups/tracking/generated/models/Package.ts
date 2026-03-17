/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessPointInformation } from './AccessPointInformation';
import type { Activity } from './Activity';
import type { AlternateTrackingNumber } from './AlternateTrackingNumber';
import type { DeliveryDate } from './DeliveryDate';
import type { DeliveryInformation } from './DeliveryInformation';
import type { DeliveryTime } from './DeliveryTime';
import type { Dimension } from './Dimension';
import type { Milestones } from './Milestones';
import type { PackageAddress } from './PackageAddress';
import type { PaymentInformation } from './PaymentInformation';
import type { ReferenceNumber } from './ReferenceNumber';
import type { Service } from './Service';
import type { Status } from './Status';
import type { Weight } from './Weight';
export type Package = {
    accessPointInformation?: AccessPointInformation;
    activity?: Array<Activity>;
    /**
     * The list of additional attributes that may be associated with the package. Presence of any element indicates the package has that attribute.
     */
    additionalAttributes?: Array<string>;
    /**
     * The list of additional services that may be associated with the package. Presence of any element indicates that the package has that service.
     */
    additionalServices?: Array<string>;
    alternateTrackingNumber?: Array<AlternateTrackingNumber>;
    currentStatus?: Status;
    deliveryDate?: Array<DeliveryDate>;
    deliveryInformation?: DeliveryInformation;
    deliveryTime?: DeliveryTime;
    dimension?: Dimension;
    /**
     * Indicator of whether the package is a smart package
     */
    isSmartPackage?: boolean;
    /**
     * milestones
     */
    milestones?: Array<Milestones>;
    packageAddress?: Array<PackageAddress>;
    /**
     * The total number of packages in the shipment. Note that this number may be greater than the number of returned packages in the response. In such cases subsequent calls are needed to get additional packages.
     */
    packageCount?: number;
    paymentInformation?: Array<PaymentInformation>;
    referenceNumber?: Array<ReferenceNumber>;
    service?: Service;
    statusCode?: string;
    /**
     * The activity status description. Note: this field will be translated based on the locale provided in the request.
     */
    statusDescription?: string;
    /**
     * Contains values which signify that certain data should be suppressed or hidden. Valid values: Tracking activity details should be hidden. Note: this is mainly intended for use by UPS.com applications.
     */
    suppressionIndicators?: Array<string>;
    trackingNumber?: string;
    /**
     * This indicator provides UCIX (UPS Customer Information Exchange) status Valid values: 'O' means open. 'C' means closed.
     */
    ucixStatus?: string;
    weight?: Weight;
};

