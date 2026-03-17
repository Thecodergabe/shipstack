/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Form_Image } from './Form_Image';
/**
 * Container tag for the International forms image.  Currently this container would be returned for UPS Premium Care shipments. Form is returned for following shipments -
 * Forward shipments,
 * Shipments with PRL ReturnService,
 * Electronic Return Label or Electronic Import Control Label shipments with SubVersion greater than or equal to 1707. CN22 data for Worlwide economy services will be returned within the PDF417 barcode of the label.
 */
export type PackageResults_Form = {
    /**
     * Code that indicates the type of form.  Valid values:
     * - 01 - All Requested International Forms.
     *
     */
    Code?: string;
    /**
     * Description that indicates the type of form.  Possible Values: All Requested International Forms.
     */
    Description?: string;
    Image?: Form_Image;
    /**
     * Unique Id for later retrieval of saved version of the completed international forms.
     */
    FormGroupId?: string;
    /**
     * Contains description text which identifies the group of International forms. This element is part of both request and response. This element does not appear on the forms.
     */
    FormGroupIdName?: string;
};

