/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateDetail } from './DateDetail';
import type { DelayDetail } from './DelayDetail';
import type { TransitDays } from './TransitDays';
/**
 * The delivery commitment details
 */
export type CommitDetail_1 = {
    /**
     * Code indicating the number of transit days.<br> Example: EIGHTEEN_DAYS
     */
    daysInTransit?: CommitDetail_1.daysInTransit;
    /**
     * Indicates if there is a guaranteed delivery option applied to the rate.  This is for freight rates only.<br> Valid values<br>GUARANTEED_MORNING - guaranteed delivery on morning of date specified.<br>GUARANTEED_CLOSE_OF_BUSINESS - guaranteed delivery on date specified by close of day<br> Example: GUARANTEED_MORNING
     */
    guaranteedType?: CommitDetail_1.guaranteedType;
    /**
     * CommitTime for SmartPost shipments.
     */
    smartPostCommitTime?: string;
    dateDetail?: DateDetail;
    delayDetails?: DelayDetail;
    /**
     * Specifies the saturdayDelivery.
     */
    saturdayDelivery?: boolean;
    /**
     * Specifies the alternate names of commodities.
     */
    alternativeCommodityNames?: Array<string>;
    transitDays?: TransitDays;
    /**
     * This is an informational message to inform client Deliverydate is unavailable. If commitTimestamp and transitTime are unavailable, then this is populated in the response in the client language.<br>Example: Deliverydate unavailable
     */
    label?: string;
    /**
     * Messages concerning the ability to provide an accurate delivery commitment on an International commit quote. These could be messages providing information about why a commitment could not be returned or a successful message. <br> Example: Message
     */
    commitMessageDetails?: string;
    /**
     * The Commodity applicable to this commitment.<br> Example: DOCUMENTS
     */
    commodityName?: string;
};
export namespace CommitDetail_1 {
    /**
     * Code indicating the number of transit days.<br> Example: EIGHTEEN_DAYS
     */
    export enum daysInTransit {
        EIGHT_DAYS = 'EIGHT_DAYS',
        EIGHTEEN_DAYS = 'EIGHTEEN_DAYS',
        ELEVEN_DAYS = 'ELEVEN_DAYS',
        FIFTEEN_DAYS = 'FIFTEEN_DAYS',
        FIVE_DAYS = 'FIVE_DAYS',
        FOUR_DAYS = 'FOUR_DAYS',
        FOURTEEN_DAYS = 'FOURTEEN_DAYS',
        NINE_DAYS = 'NINE_DAYS',
        NINETEEN_DAYS = 'NINETEEN_DAYS',
        ONE_DAY = 'ONE_DAY',
        SEVEN_DAYS = 'SEVEN_DAYS',
        SEVENTEEN_DAYS = 'SEVENTEEN_DAYS',
        SIX_DAYS = 'SIX_DAYS',
        SIXTEEN_DAYS = 'SIXTEEN_DAYS',
        TEN_DAYS = 'TEN_DAYS',
        THIRTEEN_DAYS = 'THIRTEEN_DAYS',
        THREE_DAYS = 'THREE_DAYS',
        TWELVE_DAYS = 'TWELVE_DAYS',
        TWENTY_DAYS = 'TWENTY_DAYS',
        TWO_DAYS = 'TWO_DAYS',
        SMARTPOST_TRANSIT_DAYS = 'SMARTPOST_TRANSIT_DAYS',
        UNKNOWN = 'UNKNOWN',
    }
    /**
     * Indicates if there is a guaranteed delivery option applied to the rate.  This is for freight rates only.<br> Valid values<br>GUARANTEED_MORNING - guaranteed delivery on morning of date specified.<br>GUARANTEED_CLOSE_OF_BUSINESS - guaranteed delivery on date specified by close of day<br> Example: GUARANTEED_MORNING
     */
    export enum guaranteedType {
        GUARANTEED_MORNING = 'GUARANTEED_MORNING',
        GUARANTEED_CLOSE_OF_BUSINESS = 'GUARANTEED_CLOSE_OF_BUSINESS',
    }
}

