/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The number of days the package/shipment is to be in transit. Applies to Ground and LTL Freight; indicates minimum transit time for SmartPost.
 */
export type CommitDetail_transitDays = {
    /**
     * Specifies the number of days the package/shipment is to be in transit.
     */
    description?: string;
    /**
     * This is a code indicating the number of transit days available.
     */
    minimumTransitTime?: CommitDetail_transitDays.minimumTransitTime;
    maximumTransitTime?: string;
};
export namespace CommitDetail_transitDays {
    /**
     * This is a code indicating the number of transit days available.
     */
    export enum minimumTransitTime {
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
}

