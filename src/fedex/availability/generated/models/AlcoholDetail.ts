/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are details for the package containing alcohol. This is required for alcohol special service. The alcoholRecipientType is required.
 */
export type AlcoholDetail = {
    /**
     * Specify the Alcohol Recipient Type of the shipment. <br> Example: <br> <ul><li>LICENSEE- FedEx approved alchol shipper having appropriate licenses. </li><li> CONSUMER- Individual consumer to whom the alchol is shipped.</li></ul>
     */
    alcoholRecipientType: AlcoholDetail.alcoholRecipientType;
    /**
     * Specify the type of entity, the shipper for alcohol shipment is registered such as fulfillment house, retailer or a winery.
     */
    shipperAgreementType?: string;
};
export namespace AlcoholDetail {
    /**
     * Specify the Alcohol Recipient Type of the shipment. <br> Example: <br> <ul><li>LICENSEE- FedEx approved alchol shipper having appropriate licenses. </li><li> CONSUMER- Individual consumer to whom the alchol is shipped.</li></ul>
     */
    export enum alcoholRecipientType {
        LICENSEE = 'LICENSEE',
        CONSUMER = 'CONSUMER',
    }
}

