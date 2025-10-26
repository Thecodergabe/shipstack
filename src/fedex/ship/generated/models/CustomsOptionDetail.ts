/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are customs Option Detail, type must be indicated for each occurrence.
 */
export type CustomsOptionDetail = {
    /**
     * Specify additional description about customs options. This is a required field when the Type is OTHER.
     */
    description?: string;
    /**
     * Specify the reason for a global return, as recognized by Customs. Valid values:<ul><li>COURTESY_RETURN_LABEL: Applicable for Outbound shipments.</li><li>EXHIBITION_TRADE_SHOW: For exhibition or trade-show, outbound and inbound.</li><li>FAULTY_ITEM: For faulty item being returned, inbound only.</li><li>FOLLOWING_REPAIR: For repaired or processed item being sent, outbound only.</li><li>FOR_REPAIR: For repair or processing, outbound and inbound.</li><li>ITEM_FOR_LOAN: For loan item, outbound and inbound.</li><li>OTHER: Other reason, outbound and inbound. This type requires a description.</li><li>REJECTED: For rejected merchandise being returned, inbound.</li><li>REPLACEMENT: For replacement being sent, outbound only.</li><li>TRIAL: For use in a trial, outbound and inbound.</li></ul>
     */
    type?: CustomsOptionDetail.type;
};
export namespace CustomsOptionDetail {
    /**
     * Specify the reason for a global return, as recognized by Customs. Valid values:<ul><li>COURTESY_RETURN_LABEL: Applicable for Outbound shipments.</li><li>EXHIBITION_TRADE_SHOW: For exhibition or trade-show, outbound and inbound.</li><li>FAULTY_ITEM: For faulty item being returned, inbound only.</li><li>FOLLOWING_REPAIR: For repaired or processed item being sent, outbound only.</li><li>FOR_REPAIR: For repair or processing, outbound and inbound.</li><li>ITEM_FOR_LOAN: For loan item, outbound and inbound.</li><li>OTHER: Other reason, outbound and inbound. This type requires a description.</li><li>REJECTED: For rejected merchandise being returned, inbound.</li><li>REPLACEMENT: For replacement being sent, outbound only.</li><li>TRIAL: For use in a trial, outbound and inbound.</li></ul>
     */
    export enum type {
        COURTESY_RETURN_LABEL = 'COURTESY_RETURN_LABEL',
        EXHIBITION_TRADE_SHOW = 'EXHIBITION_TRADE_SHOW',
        FAULTY_ITEM = 'FAULTY_ITEM',
        FOLLOWING_REPAIR = 'FOLLOWING_REPAIR',
        FOR_REPAIR = 'FOR_REPAIR',
        ITEM_FOR_LOAN = 'ITEM_FOR_LOAN',
        OTHER = 'OTHER',
        REJECTED = 'REJECTED',
        REPLACEMENT = 'REPLACEMENT',
        TRIAL = 'TRIAL',
    }
}

