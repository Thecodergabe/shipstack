/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageWeight } from './PackageWeight';
/**
 * Information about the contents of the shipment.
 */
export type ProductInfo = {
    /**
     *  The total value declared to the Bureau of Customs and Border Protection for all packages in the shipment along with the weight details.
     */
    customsValueAndWeightSpecifiedAsUnit?: boolean;
    /**
     * Quantity of the product in the package/shipment.
     */
    quantity?: number;
    /**
     * Customs value of the product in the package/shipment.
     */
    customsValue?: number;
    /**
     * Weight measurement unit code of the product in the package/shipment.
     */
    weightUnitOfMeasureCode?: string;
    /**
     * Description of the product in the package/shipment.
     */
    description?: string;
    weight?: PackageWeight;
    /**
     * Indicates if shippers export declaration is required or not.
     */
    sedRequired?: boolean;
    /**
     * Indicates the package/shipment contains documents or non-document commodities.
     */
    productType?: ProductInfo.productType;
    /**
     * Specifies if shippers export declaration is required.<br>Valid values: True, False.
     */
    unitOfMeasureCode?: string;
    /**
     * Specify the country code of the product manufacturer.
     */
    countryOfManufactureCode?: string;
};
export namespace ProductInfo {
    /**
     * Indicates the package/shipment contains documents or non-document commodities.
     */
    export enum productType {
        DOCUMENTS = 'DOCUMENTS',
        COMMODITIES = 'COMMODITIES',
    }
}

