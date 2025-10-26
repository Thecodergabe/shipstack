/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Provides information about the RecipientType and ShipperAgreementType. This object is manadatory if alcohol special service is selected.
 */
export type TransitTimeRequestedPackageLineItem_packageSpecialServices_alcoholDetail = {
    /**
     * Specify the Alcohol Recipient Type of the shipment. <br> Example:<br> <ul><li> LICENSEE- FedEx approved alchol shipper having appropriate licenses.</li> <li> CONSUMER- Individual consumer to whom the alchol is shipped.</li> </ul>
     */
    alcoholRecipientType: TransitTimeRequestedPackageLineItem_packageSpecialServices_alcoholDetail.alcoholRecipientType;
    /**
     * Specify the shipper entity type. <br>Example: Fulfillment house, Retailer or a Winery.
     */
    shipperAgreementType?: string;
};
export namespace TransitTimeRequestedPackageLineItem_packageSpecialServices_alcoholDetail {
    /**
     * Specify the Alcohol Recipient Type of the shipment. <br> Example:<br> <ul><li> LICENSEE- FedEx approved alchol shipper having appropriate licenses.</li> <li> CONSUMER- Individual consumer to whom the alchol is shipped.</li> </ul>
     */
    export enum alcoholRecipientType {
        LICENSEE = 'LICENSEE',
        CONSUMER = 'CONSUMER',
    }
}

