/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Restricted Articles container.
 */
export type ShipmentServiceOptions_RestrictedArticles = {
    /**
     * This field is a flag to indicate if the package has Biological substances. True if present; false otherwise.  Shippers account needs to have a valid contract for Biological Substances. Lane check will happen based on postal code/ city.
     */
    DiagnosticSpecimensIndicator?: string;
    /**
     * Presence/Absence Indicator. True if present; false otherwise. Any value is ignored. If present, indicates that the package contains Alcoholic Beverages  Shippers account needs to have a valid contract for Alcohol.
     */
    AlcoholicBeveragesIndicator?: string;
    /**
     * Presence/Absence Indicator. True if present; false otherwise. Any value is ignored. If present, indicates that the package contains Perishable items.  Shippers account needs to have a valid contract for Perishables.
     */
    PerishablesIndicator?: string;
    /**
     * Presence/Absence Indicator. True if present; false otherwise. Any value is ignored. If present, indicates that the package contains Plants  Shippers account needs to have a valid contract for Plants.
     */
    PlantsIndicator?: string;
    /**
     * Presence/Absence Indicator. True if present; false otherwise. Any value is ignored. If present, indicates that the package contains Seeds.  Shippers account needs to have a valid contract for Seeds.
     */
    SeedsIndicator?: string;
    /**
     * Presence/Absence Indicator. True if present; false otherwise. Any value is ignored. If present, indicates that the package contains Special Exception items.  Shippers account needs to have a valid contract for Special Exceptions.
     */
    SpecialExceptionsIndicator?: string;
    /**
     * Presence/Absence Indicator. True if present; false otherwise. Any value is ignored. If present, indicates that the package contains Tobacco  Shippers account needs to have a valid contract for Tobacco.
     */
    TobaccoIndicator?: string;
    /**
     * Presence/Absence Indicator. True if present; false otherwise. Any value is ignored. If present, indicates that the package contains Ecigarettes  Shippers account needs to have a valid contract for Ecigarettes.
     */
    ECigarettesIndicator?: string;
};

