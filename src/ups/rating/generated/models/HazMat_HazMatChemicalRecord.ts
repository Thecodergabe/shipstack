/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold HazMat Chemical Records.
 */
export type HazMat_HazMatChemicalRecord = {
    /**
     * Identifies the Chemcial Record.  Required if SubVersion is greater than or equal to 1701.
     */
    ChemicalRecordIdentifier?: string;
    /**
     * This is the hazard class associated to the specified commodity. Required if CommodityRegulatedLevelCode is 'LQ' or 'FR'  Applies only if SubVersion is greater than or equal to 1701.
     */
    ClassDivisionNumber?: string;
    /**
     * This is the ID number (UN/NA/ID) for the specified commodity. Required if CommodityRegulatedLevelCode = LR, LQ or FR and if the field applies to the material by regulation. UN/NA/ID Identification Number assigned to the specified regulated good. (Include the UN/NA/ID as part of the entry).  Applies only if SubVersion is greater than or equal to 1701.
     */
    IDNumber?: string;
    /**
     * The method of transport by which a shipment is approved to move and the regulations associated with that method.  Only required when the CommodityRegulatedLevelCode is FR or LQ.Valid values: 01 - Highway02 - Ground03 - Passenger Aircraft04 - Cargo Aircraft Only  Applies only if SubVersion is greater than or equal to 1701. For multiple ChemicalRecords per package having different TransportationMode, TransportationMode of first ChemicalRecord would be considered for validating and rating the package. All TransportationMode except for '04' are general service offering. If any chemical record contains '04' as TransportationMode, ShipperNumber needs to be authorized to use '04' as TransportationMode.
     */
    TransportationMode: string;
    /**
     * The Regulatory set associated with every regulated shipment. It must be the same across the shipment. Valid values:   ADR -  For Europe to Europe Ground Movement CFR -  For HazMat regulated by US Dept. of Transportation within the U.S. or ground shipments to Canada, IATA -  For Worldwide Air movement TDG -  For Canada to Canada ground movement or Canada to U.S. standard movement  Applies only if SubVersion is greater than or equal to 1701. For multiple ChemicalRecords per package or multiple packages containing different RegulationSet, RegulationSet of first ChemicalRecord would be considered for validating and rating the entire shipment.
     */
    RegulationSet: string;
    /**
     * 24 Hour Emergency Phone Number of the shipper. Valid values for this field are (0) through (9) with trailing blanks. For numbers within the U.S., the layout is '1', area code, 7-digit number. For all other countries or territories the layout is country or territory code, area code, number.  Applies only if SubVersion is greater than or equal to 1701.
     */
    EmergencyPhone?: string;
    /**
     * The emergency information, contact name and/or contact number, required to be communicated when a call is placed to the EmergencyPhoneNumber. The information is required if there is a value in the EmergencyPhoneNumber field above and the shipment is with a US50 or PR origin and/or destination and the RegulationSet is IATA.  Applies only if SubVersion is greater than or equal to 1701.
     */
    EmergencyContact?: string;
    /**
     * Required if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation. If reportable quantity is met, 'RQ' should be entered.  Applies only if SubVersion is greater than or equal to 1701.
     */
    ReportableQuantity?: string;
    /**
     * Required if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation. Secondary hazardous characteristics of a package. (There can be more than one – separate each with a comma).  Applies only if SubVersion is greater than or equal to 1701.
     */
    SubRiskClass?: string;
    /**
     * This is the packing group category associated to the specified commodity. Required if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation. Must be shown in Roman Numerals.Valid values are:I, II,III,blank.   Applies only if SubVersion is greater than or equal to 1701.
     */
    PackagingGroupType?: string;
    /**
     * Required if CommodityRegulatedLevelCode = LQ or FR. The numerical value of the mass capacity of the regulated good.  Applies only if SubVersion is greater than or equal to 1701.
     */
    Quantity?: string;
    /**
     * Required if CommodityRegulatedLevelCode = LQ or FR. The unit of measure used for the mass capacity of the regulated good. For Example: ml, L, g, mg, kg, cylinder, pound, pint, quart, gallon, ounce etc.  Applies only if SubVersion is greater than or equal to 1701.
     */
    UOM?: string;
    /**
     * The packing instructions related to the chemical record. Required if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation.  Applies only if SubVersion is greater than or equal to 1701.
     */
    PackagingInstructionCode?: string;
    /**
     * The Proper Shipping Name assigned by ADR, CFR or IATA. Required if CommodityRegulatedLevelCode = LR, LQ or FR.  Applies only if SubVersion is greater than or equal to 1701.
     */
    ProperShippingName?: string;
    /**
     * The technical name (when required) for the specified commodity. Required if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation.  Applies only if SubVersion is greater than or equal to 1701.
     */
    TechnicalName?: string;
    /**
     * Additional remarks or special provision information. Required if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation.
     *
     * Additional information that may be required by regulation about a hazardous material, such as, "Limited Quantity", DOT-SP numbers, EX numbers.  Applies only if SubVersion is greater than or equal to 1701.
     *
     */
    AdditionalDescription?: string;
    /**
     * The package type code identifying the type of packaging used for the commodity. (Ex: Fiberboard Box). Required if CommodityRegulatedLevelCode = LQ or FR.   Applies only if SubVersion is greater than or equal to 1701.
     */
    PackagingType?: string;
    /**
     * Defines the type of label that is required on the package for the commodity. Not applicable if CommodityRegulatedLevelCode = LR or EQ.  Applies only if SubVersion is greater than or equal to 1701.
     */
    HazardLabelRequired?: string;
    /**
     * The number of pieces of the specific commodity. Required if CommodityRegulatedLevelCode = LQ or FR.Valid values are 1 to 999.  Applies only if SubVersion is greater than or equal to 1701.
     */
    PackagingTypeQuantity?: string;
    /**
     * Indicates the type of commodity - Fully Regulated (FR), Limited Quantity (LQ), Excepted Quantity (EQ), Lightly Regulated (LR). Default value is FR.Valid values are LR, FR, LQ, EQ.   Applies only if SubVersion is greater than or equal to 1701.
     */
    CommodityRegulatedLevelCode?: string;
    /**
     * Transport Category.Valid values are 0 to 4.  Applies only if SubVersion is greater than or equal to 1701.
     */
    TransportCategory?: string;
    /**
     * Defines what is restricted to pass through a tunnel.  Applies only if SubVersion is greater than or equal to 1701.
     */
    TunnelRestrictionCode?: string;
};

