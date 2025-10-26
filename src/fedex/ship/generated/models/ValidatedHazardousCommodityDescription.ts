/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Identifies and describes an individual hazardous commodity. For 201001 load, this is based on data from the FedEx Ground Hazardous Materials Shipping Guide.
 */
export type ValidatedHazardousCommodityDescription = {
    /**
     * In conjunction with the regulatory identifier, this field uniquely identifies a specific hazardous materials commodity.<br>Example: 876
     */
    sequenceNumber?: number;
    /**
     * Specifies Packing Instructions.<br>Example: packingInstructions
     */
    packingInstructions?: string;
    /**
     * Specifies subsidiary Classes.<br>Example:["Subsidiary Classes"]
     */
    subsidiaryClasses?: Array<string>;
    /**
     * Specifies Hazard Label Text.<br>Example: labelText
     */
    labelText?: string;
    /**
     * There are five categories of tunnel categorization with A representing the least restrictive and E as the most restrictive. Category A, as the least restrictive, will not be sign-posted. Category E, the most restrictive, only allows the passage of UN2919, UN3291, UN3331, UN3359 and UN3373.<br>Example: UN2919
     */
    tunnelRestrictionCode?: string;
    /**
     * Specifies Special Provisions if any.<br>Example: specialProvisions
     */
    specialProvisions?: string;
    /**
     * Fully-expanded descriptive text for a hazardous commodity.<br>Example: properShippingNameAndDescription
     */
    properShippingNameAndDescription?: string;
    /**
     * Specifies Technical Name.<br>Example: technicalName
     */
    technicalName?: string;
    /**
     * Specifies Symbols.<br>Example: symbols
     */
    symbols?: string;
    /**
     * Information related to quantity limitations and operator or state variations as may be applicable to the dangerous goods commodity.
     */
    authorization?: string;
    /**
     * Specifies attributes.<br>Example: ["attributes"]
     */
    attributes?: Array<string>;
    /**
     * Specifies the Identification.<br>Example: 1234
     */
    id?: string;
    /**
     * Specifies packing Group.<br>Example: Packing Group
     */
    packingGroup?: string;
    /**
     * Specifies Proper Shipping Name.<br>Example: Proper Shipping Name
     */
    properShippingName?: string;
    /**
     * Specifies hazard class.<br>Example: Hazard Class
     */
    hazardClass?: string;
};

