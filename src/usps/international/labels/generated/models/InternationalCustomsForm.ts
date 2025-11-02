/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomsForm } from './CustomsForm';
import type { CustomsReference } from './CustomsReference';
import type { InternationalShippingContents } from './InternationalShippingContents';
export type InternationalCustomsForm = (CustomsForm & {
    /**
     * Specifies the content of the package or envelope.
     *
     * Note:
     * * `CREMATED_REMAINS` is only supported by mailClass `PRIORITY_MAIL_EXPRESS_INTERNATIONAL`
     * * Customs Content Type must be `DANGEROUS_GOODS` when using any of the following extra services:
     * * 813 - Hazardous Materials - Class 7 – Radioactive Materials
     * * 826 - Hazardous Materials - Division 6.2 Biological Materials
     *
     */
    customsContentType: InternationalCustomsForm.customsContentType;
    importersReference?: CustomsReference;
    /**
     * Note:
     * * `exportersReference` must be `null` when used with a `mailClass` of `FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE`
     *
     */
    exportersReference?: CustomsReference;
    /**
     * Details of the contents of the package. The first five items will print on the label of the customs form, and the rest will print on a separate continuation page.
     *
     * Note:
     * - One of either `itemValue` and `itemWeight` or `itemTotalValue` and `itemTotalWeight` are required.
     *
     */
    contents: Array<InternationalShippingContents>;
});
export namespace InternationalCustomsForm {
    /**
     * Specifies the content of the package or envelope.
     *
     * Note:
     * * `CREMATED_REMAINS` is only supported by mailClass `PRIORITY_MAIL_EXPRESS_INTERNATIONAL`
     * * Customs Content Type must be `DANGEROUS_GOODS` when using any of the following extra services:
     * * 813 - Hazardous Materials - Class 7 – Radioactive Materials
     * * 826 - Hazardous Materials - Division 6.2 Biological Materials
     *
     */
    export enum customsContentType {
        MERCHANDISE = 'MERCHANDISE',
        GIFT = 'GIFT',
        DOCUMENT = 'DOCUMENT',
        COMMERCIAL_SAMPLE = 'COMMERCIAL_SAMPLE',
        RETURNED_GOODS = 'RETURNED_GOODS',
        OTHER = 'OTHER',
        HUMANITARIAN_DONATIONS = 'HUMANITARIAN_DONATIONS',
        DANGEROUS_GOODS = 'DANGEROUS_GOODS',
        CREMATED_REMAINS = 'CREMATED_REMAINS',
        NON_NEGOTIABLE_DOCUMENT = 'NON_NEGOTIABLE_DOCUMENT',
        MEDICAL_SUPPLIES = 'MEDICAL_SUPPLIES',
        PHARMACEUTICALS = 'PHARMACEUTICALS',
    }
}

