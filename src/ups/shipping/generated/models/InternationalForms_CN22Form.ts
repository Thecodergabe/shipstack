/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CN22Form_CN22Content } from './CN22Form_CN22Content';
/**
 * Container for the CN22 form.  Required if the customer wants to use the UPS generated CN22.
 */
export type InternationalForms_CN22Form = {
    /**
     * Provide the valid values:
     * 6 = 4X6
     * 1 = 8.5X11
     * Required if the CN22 form container is present.
     */
    LabelSize: string;
    /**
     * Number of label per page. Currently 1 per page is supported.  Required if the CN22 form container is present.
     */
    PrintsPerPage: string;
    /**
     * Valid Values are pdf, png, gif, zpl, star, epl2 and spl.
     * Required if the CN22 form container is present.
     */
    LabelPrintType: string;
    /**
     * Valid values:
     * 1 = GIFT
     * 2 = DOCUMENTS
     * 3 = COMMERCIAL SAMPLE
     * 4 = OTHER  Required if the CN22 form container is present.
     */
    CN22Type: string;
    /**
     * Required if CN22Type is OTHER.  Required if the CN22 form container is present.
     */
    CN22OtherDescription?: string;
    /**
     * String will replace default "Fold Here" text displayed on the label.
     */
    FoldHereText?: string;
    CN22Content: Array<CN22Form_CN22Content>;
};

