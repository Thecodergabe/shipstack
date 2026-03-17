/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container tag for determining whether or not to exclude product information from a particular form.  If this container is not present we assume that the DEFAULT is selected which is "none" and all products will appear on all forms.
 */
export type Product_ExcludeFromForm = {
    /**
     * Indicates the name of the International form requested to NOT have product information.  Possible Values are 04 – USMCA.  Please note that if this is used and you DO NOT have the corresponding form type requested this will be IGNORED.
     */
    FormType: Array<string>;
};

