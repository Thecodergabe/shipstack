/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrokerDetail_RateReply } from './BrokerDetail_RateReply';
import type { Commit } from './Commit';
import type { CustomerMessage } from './CustomerMessage';
import type { OperationalDetail } from './OperationalDetail';
import type { RatedShipmentDetail } from './RatedShipmentDetail';
import type { ServiceDescription } from './ServiceDescription';
import type { ServiceSubOptionDetail } from './ServiceSubOptionDetail';
/**
 * This objcet lists the rate data by service. If a service was specified in the request, there will be a single entry; if service was omitted in the request, there will be a separate entry in this for each service being compared.
 */
export type RateReplyDetail = {
    /**
     * This is the service type associated with this rate (i.e. Priority Overnight, Home Delivery, etc.)<br>For Ground/SmartPost this will be a direct copy of the service specified in the request. For domestic Express, the service may have been bumped, so it may not match the value specified on the request. For International Express the service may be bumped and not mapped.<br>Example: FEDEX_GROUND<br><a onclick='loadDocReference("servicetypes")'>Click here to see Service Types</a>
     */
    serviceType?: string;
    /**
     * This is the service name associated with this rate. <br> Example: FedEx Ground
     */
    serviceName?: string;
    /**
     * Packaging type associated with this particular rate.  For Ground/SmartPost will always be YOUR_PACKAGING.  For domestic Express, the packaging may have been bumped so it may not match the value specified on the request.  For international Express the packaging may be bumped and not mapped.<br>Example: YOUR_PACKAGING <br><a href="/developer-portal/en-us/reference-guide.html#packagetypes" target="_blank">Click here to see Package Types</a>
     */
    packagingType?: string;
    /**
     * These are messages concerning the ability to provide an accurate delivery commitment on an International commit quote. These could be providing information about why a commitment could not be returned or a successful message<br>Example:<br><ul><li>REQUEST_COMPLETED<br>Request completed successfully</li><li>SERVICE.TYPE.INTERNATIONAL.MESSAGE:<br>Rate does not include duties & taxes, clearance entry fees or other import fees. The payor of duties/taxes/fees will be responsible for any applicable Clearance Entry Fees.</li><li>NATIONAL.HOLIDAY.OBSERVED:<br>National Holiday Observed on Ship Date.</li><li>INCONSISTENT.COMMODITY.DESCRIPTION:<br>The description and harmonized code for the specified commodity are not consistent.</li></ul>
     */
    customerMessages?: Array<CustomerMessage>;
    /**
     * This object provides the shipment and package rating data in a rate request reply.
     */
    ratedShipmentDetails?: Array<RatedShipmentDetail>;
    operationalDetail?: OperationalDetail;
    /**
     * Indicates the signature Option for this service. <br> Example: SERVICE_DEFAULT
     */
    signatureOptionType?: string;
    serviceDescription?: ServiceDescription;
    brokerDetail?: BrokerDetail_RateReply;
    commit?: Commit;
    serviceSubOptionDetail?: ServiceSubOptionDetail;
};

