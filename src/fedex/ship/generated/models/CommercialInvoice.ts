/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerReference } from './CustomerReference';
import type { Money } from './Money';
import type { ShipEmailDispositionDetail } from './ShipEmailDispositionDetail';
/**
 * Use this object to provide Commercial Invoice details. This element is required for electronic upload of CI data. It will serve to create/transmit an electronic Commercial Invoice through the FedEx system.<br>Customers are responsible for printing their own Commercial Invoice.<br>If you would like FedEx to generate a Commercial Invoice and transmit it to Customs for clearance purposes, you need to specify that in the ETDDetail/RequestedDocumentCopies element.<br>Supports maximum of 99 commodity line items.
 */
export type CommercialInvoice = {
    /**
     * The originatorName that will populate the Commercial Invoice (or Pro Forma).<br>Example: originator name
     */
    originatorName?: string;
    /**
     * The payment terms that will populate the Commercial Invoice (or Pro Forma).  This field is being supported for completeness only.<br>Example: payment terms
     */
    paymentTerms?: string;
    /**
     * The comments that will populate the Commercial Invoice (or Pro Forma). Only the comments specified in the first two indexes of the array will be printed on the invoice and other comments would be ignored as the limitation is set for only two indexes. It considers the comment which is in the first index as a Special Instructions, Hence the comment at first index will be printed under special instructions and the other will be printed at comments section in the Commercial Invoice Document. <br>Example: comments
     */
    comments?: Array<string>;
    /**
     * These are additional customer reference data for commercial invoice.
     */
    customerReferences?: Array<CustomerReference>;
    /**
     * Indicate the taxes or miscellaneous charges(other than freight charges or insurance charges) that are associated with the shipment.
     */
    taxesOrMiscellaneousCharge?: Money;
    /**
     * Specifies the Taxes Or Miscellaneous Charge Type<br>Example: COMMISSIONS
     */
    taxesOrMiscellaneousChargeType?: CommercialInvoice.taxesOrMiscellaneousChargeType;
    /**
     * Indicates the freight charge added by the shipper/customer for shipping the package. Optional to the customer.
     */
    freightCharge?: Money;
    /**
     * Indicates the packing cost added by the shipper/customer for shipping the package. Optional to the customer.
     */
    packingCosts?: Money;
    /**
     * Indicates the packing cost added by the shipper/customer for shipping the package. Optional to the customer.
     */
    handlingCosts?: Money;
    /**
     * This is the declaration statement which will populate the Commercial Invoice (or Pro Forma).<br>Maximum length is 554.<br>Example: declarationStatement
     */
    declarationStatement?: string;
    /**
     * The termsOfSale that will populate the Commercial Invoice (or Pro Forma). Max length is 3<br>Example: FCA
     */
    termsOfSale?: string;
    /**
     * These are special instructions that will be populated on the Commercial Invoice (or Pro Forma).<br>Example: specialInstructions
     */
    specialInstructions?: string;
    /**
     * The reason for the shipment. Note: SOLD is not a valid purpose for a Proforma Invoice.<br>Example: REPAIR_AND_RETURN
     */
    shipmentPurpose?: CommercialInvoice.shipmentPurpose;
    emailNotificationDetail?: ShipEmailDispositionDetail;
};
export namespace CommercialInvoice {
    /**
     * Specifies the Taxes Or Miscellaneous Charge Type<br>Example: COMMISSIONS
     */
    export enum taxesOrMiscellaneousChargeType {
        COMMISSIONS = 'COMMISSIONS',
        DISCOUNTS = 'DISCOUNTS',
        HANDLING_FEES = 'HANDLING_FEES',
        OTHER = 'OTHER',
        ROYALTIES_AND_LICENSE_FEES = 'ROYALTIES_AND_LICENSE_FEES',
        TAXES = 'TAXES',
    }
    /**
     * The reason for the shipment. Note: SOLD is not a valid purpose for a Proforma Invoice.<br>Example: REPAIR_AND_RETURN
     */
    export enum shipmentPurpose {
        GIFT = 'GIFT',
        NOT_SOLD = 'NOT_SOLD',
        PERSONAL_EFFECTS = 'PERSONAL_EFFECTS',
        REPAIR_AND_RETURN = 'REPAIR_AND_RETURN',
        SAMPLE = 'SAMPLE',
        SOLD = 'SOLD',
    }
}

