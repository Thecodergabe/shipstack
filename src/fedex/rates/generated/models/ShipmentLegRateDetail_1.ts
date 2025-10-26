/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyExchangeRate } from './CurrencyExchangeRate';
import type { RateDiscount_1 } from './RateDiscount_1';
import type { Surcharge_1 } from './Surcharge_1';
import type { Tax_1 } from './Tax_1';
import type { Weight_1 } from './Weight_1';
export type ShipmentLegRateDetail_1 = {
    /**
     * Specifies the list of discounts. <br><a onclick='loadDocReference("discounts")'>Click here to see Discounts</a>
     */
    discounts?: Array<RateDiscount_1>;
    /**
     * Identifies the type of pricing used for this shipment.<br> Example: ACTUAL
     */
    pricingCode?: string;
    /**
     * Human-readable text describing the shipment leg.<br> Example: legDescription
     */
    legDescription?: string;
    /**
     * Specifies the list of surcharges.<br>Valid value is:<li>PEAK</li><li>PEAK_ADDTIONAL_HANDLING</li><li>PEAK_OVERSIZE</li><li>PEAK_RESIDENTIAL_DELIVERY</li>
     */
    surcharges?: Array<Surcharge_1>;
    /**
     * Indicates which special rating cases applied to this shipment.
     */
    specialRatingApplied?: Array<string>;
    /**
     * Specifies the list of taxes.
     */
    taxes?: Array<Tax_1>;
    /**
     * Indicates the rate scale used. <br> Example: *USER IMS20160104  LD067110
     */
    rateScale?: string;
    /**
     * This shipment's totalNetCharge and totalDutiesTaxesAndFees. Some duties and taxes are only provided if estimated duties and taxes were calculated for this shipment AND duties, taxes and transportation charges are all paid by the same sender's account.<br> Example: 87.5
     */
    totalNetCharge?: number;
    /**
     * Specifies the total base charge list.<br> Example: 87.5
     */
    totalBaseCharge?: number;
    currencyExchangeRate?: CurrencyExchangeRate;
    /**
     * Sum of billing weight for the shipment.
     */
    totalBillingWeight?: Weight_1;
    /**
     * Indicate the three-character ISO currency code. <br>Example: USD<br><a onclick='loadDocReference("currencycodes")'>Click here to see Currency Codes</a>
     */
    currency?: string;
};

