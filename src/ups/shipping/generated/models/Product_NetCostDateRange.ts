/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Date Range for regional value content (RVC).  Applies to USMCA CO only.
 */
export type Product_NetCostDateRange = {
    /**
     * If the RVC is calculated over a period of time, it should be identified by the begin date (yyyyMMdd) of that period. (Reference: Articles 402.1, 402.5).  Applies to USMCA only. Format is yyyyMMdd.
     */
    BeginDate: string;
    /**
     * If the RVC is calculated over a period of time, it should be identified by the End date (yyyyMMdd) of that period. (Reference: Articles 402.1, 402.5).  Applies to USMCA only. Format is yyyyMMdd.
     */
    EndDate: string;
};

