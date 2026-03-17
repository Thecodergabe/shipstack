/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This field should be entered if the  USMCA Certificate covers multiple shipments of identical goods as described in the Description of Goods field that are imported into a USMCA country or territory for a specified period of up to one year (the blanket period). The importation of a good for which preferential treatment is claimed based on this certificate must occur between these dates.  Applies to USMCA form only. Required for USMCA.  This is not valid for a paperless shipment.
 */
export type InternationalForms_BlanketPeriod = {
    /**
     * Begin date of the blanket period. It is the date upon which the Certificate becomes applicable to the good covered by the blanket Certificate (it may be prior to the date of signing this Certificate).  Applies to USMCA form only. Required for USMCA. Format is yyyyMMdd. This is not valid for a paperless shipment.
     */
    BeginDate: string;
    /**
     * End Date of the blanket period. It is the date upon which the blanket period expires.  Applies to USMCA form only. Required for USMCA CO. Format is yyyyMMdd.  This is not valid for a paperless shipment.
     */
    EndDate: string;
};

