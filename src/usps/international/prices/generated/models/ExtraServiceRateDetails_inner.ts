/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { internationalPriceType } from './internationalPriceType';
import type { price } from './price';
import type { SKU } from './SKU';
export type ExtraServiceRateDetails_inner = {
    SKU?: SKU;
    price?: price;
    priceType?: internationalPriceType;
    /**
     * Extra Service Code requested
     * * `370` - USPS Delivery Duties Paid Fee
     * * `813` - Hazardous Materials - Class 7 – Radioactive Materials
     * * `820` - Hazardous Materials - Class 9 – Unmarked Lithium Batteries
     * * `826` - Hazardous Materials - Division 6.2 Biological Materials
     * * `857` - Hazardous Materials
     * * `930` - Insurance <= $500
     * * `931` - Insurance > $500
     * * `955` - Return Receipt (Unsupported as of 01/19/2025)
     *
     */
    extraService?: ExtraServiceRateDetails_inner.extraService;
    /**
     * Description of the Extra Service
     */
    name?: string;
    warnings?: Array<string>;
};
export namespace ExtraServiceRateDetails_inner {
    /**
     * Extra Service Code requested
     * * `370` - USPS Delivery Duties Paid Fee
     * * `813` - Hazardous Materials - Class 7 – Radioactive Materials
     * * `820` - Hazardous Materials - Class 9 – Unmarked Lithium Batteries
     * * `826` - Hazardous Materials - Division 6.2 Biological Materials
     * * `857` - Hazardous Materials
     * * `930` - Insurance <= $500
     * * `931` - Insurance > $500
     * * `955` - Return Receipt (Unsupported as of 01/19/2025)
     *
     */
    export enum extraService {
        '_370' = 370,
        '_813' = 813,
        '_820' = 820,
        '_826' = 826,
        '_857' = 857,
        '_930' = 930,
        '_931' = 931,
        '_955' = 955,
    }
}

