/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data Container holding package/product related information that will break up the product into each package on the packing list.  Total product amount must equal the product unit value above. Required for packaging list and Air Freight Packing list.                                                      Packaging list max allowed : 20
 * Air Freight Packaging list max allowed: 200
 */
export type PackingListInfo_PackageAssociated = {
    /**
     * Package number the product should be allocated to ont he packing list.  Required for packaging list and Air Freight Packing list.
     */
    PackageNumber: string;
    /**
     * Amount of Product associated with a package.  Required for packaging list and Air Freight Packing list.
     */
    ProductAmount: string;
    /**
     * Product Note.
     */
    ProductNote?: string;
};

