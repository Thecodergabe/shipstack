/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RateDiscount } from './RateDiscount';
import type { Surcharge } from './Surcharge';
import type { Weight } from './Weight';
/**
 * Data for a package's rates, as calculated per a specific rate type.
 */
export type PackageRateDetail = {
    /**
     * Indicates which weight was used for the rate, e.g. actual or dimensional. <br> Example: dimensional
     */
    ratedWeightMethod?: string;
    /**
     * Specifies the sum of all taxes on this package.<br> Example: 1257.25
     */
    totalTaxes?: number;
    /**
     * The total discounts used in the rate calculation.<br> Example: 1257.2<br><a onclick='loadDocReference("discounts")'>Click here to see Discounts</a>
     */
    totalFreightDiscounts?: number;
    /**
     * Identifies the manner in which the chargeRate for this line item was applied.<br> Example: 125
     */
    baseCharge?: number;
    /**
     * The total sum of all rebates applied to this package.Example: 12
     */
    totalRebates?: number;
    /**
     * Specifies the type used for this specific set of rate data.
     */
    rateType?: string;
    billingWeight?: Weight;
    /**
     * Specifies the sum of freight charges.<br> Example: 10
     */
    netFreight?: number;
    /**
     * Specifies the list of all surcharges that apply to this package.
     */
    surcharges?: Array<Surcharge>;
    /**
     * The sum of all surcharges on the package.<br> Example: 569
     */
    totalSurcharges?: number;
    /**
     * Specifies the sum of packages netFreight and totalSurcharges (not including totalTaxes).<br> Example: 125.32
     */
    netFedExCharge?: number;
    /**
     * Specifies the sum of packages netFreight, totalSurcharges and totalTaxes. <br>Example: 563.98
     */
    netCharge?: number;
    /**
     * All rate discounts that apply to this shipment.<br><a onclick='loadDocReference("discounts")'>Click here to see Discounts</a>
     */
    freightDiscounts?: Array<RateDiscount>;
};

