/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the alcohol shipment details. This object is mandatory if alcohol special service is selected.
 */
export type AlcoholDetail = {
    /**
     * Specify the recipient type for the alcohol shipment.
     */
    alcoholRecipientType: AlcoholDetail.alcoholRecipientType;
    /**
     * Specify the shipper entity type. <br>Example: Fulfillment house, Retailer or a Winery.
     */
    shipperAgreementType?: string;
};
export namespace AlcoholDetail {
    /**
     * Specify the recipient type for the alcohol shipment.
     */
    export enum alcoholRecipientType {
        LICENSEE = 'LICENSEE',
        CONSUMER = 'CONSUMER',
    }
}

