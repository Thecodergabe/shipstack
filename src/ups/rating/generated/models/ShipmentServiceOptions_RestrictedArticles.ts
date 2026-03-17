/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Restricted Articles container.  Valid for UPS World Wide Express Freight shipments.
 */
export type ShipmentServiceOptions_RestrictedArticles = {
    /**
     * This field is a flag to indicate if the package has Alcohol. True if present; false otherwise.  Valid for UPS World Wide Express Freight shipments.
     */
    AlcoholicBeveragesIndicator?: string;
    /**
     * This field is a flag to indicate if the package has Biological substances. True if present; false otherwise.  Valid for UPS World Wide Express Freight shipments. Lane check will happen based on postal code/ city.
     */
    DiagnosticSpecimensIndicator?: string;
    /**
     * This field is a flag to indicate if the package has Perishables. True if present; false otherwise.  Valid for UPS World Wide Express Freight shipments.
     */
    PerishablesIndicator?: string;
    /**
     * This field is a flag to indicate if the package has Plants. True if present; false otherwise.  Valid for UPS World Wide Express Freight shipments.
     */
    PlantsIndicator?: string;
    /**
     * This field is a flag to indicate if the package has Seeds. True if present; false otherwise.  Valid for UPS World Wide Express Freight shipments.
     */
    SeedsIndicator?: string;
    /**
     * This field is a flag to indicate if the package has Special Exceptions Restricted Materials. True if present; false otherwise.  Valid for UPS World Wide Express Freight shipments.
     */
    SpecialExceptionsIndicator?: string;
    /**
     * This field is a flag to indicate if the package has Tobacco. True if present; false otherwise.  Valid for UPS World Wide Express Freight shipments.
     */
    TobaccoIndicator?: string;
    /**
     * This field is a flag to indicate if the package has E-Cigarettes. True if present; false otherwise.  Valid for UPS World Wide Express Freight shipments.
     */
    ECigarettesIndicator?: string;
    /**
     * This field is a flag to indicate if the package has Hemp/CBD. True if present; false otherwise.  Valid for UPS World Wide Express Freight shipments.
     */
    HempCBDIndicator?: string;
};

