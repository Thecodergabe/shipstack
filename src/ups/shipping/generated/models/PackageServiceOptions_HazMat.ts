/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold HazMat Chemical Records.
 */
export type PackageServiceOptions_HazMat = {
    /**
     * The number of pieces of the specific commodity. Required if CommodityRegulatedLevelCode = LQ or FR.  Valid values are 1 to 999.
     */
    PackagingTypeQuantity?: string;
    /**
     * Reserved for future use.
     */
    RecordIdentifier1?: string;
    /**
     * Reserved for future use.
     */
    RecordIdentifier2?: string;
    /**
     * Reserved for future use.
     */
    RecordIdentifier3?: string;
    /**
     * Recommended if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation.
     *
     * Secondary hazardous characteristics of a package. (There can be more than one – separate each with a comma).
     *
     */
    SubRiskClass?: string;
    /**
     * The type of regulated good for an ADR package where ADR is for Europe to Europe ground movement.
     */
    aDRItemNumber?: string;
    /**
     * Required if the field applies to the material by regulation. Field input is Arabic numerals, output is Roman numerals. Will be shown in Roman Numerals.  Valid values:
     * - "1" = "I",
     * - "2" = "II",
     * - "3" = "III",
     * - and blank.
     *
     */
    aDRPackingGroupLetter?: string;
    /**
     * The technical name (when required) for the specified commodity. Recommended if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation.
     */
    TechnicalName?: string;
    /**
     * Defines the type of label that is required on the package for the commodity.
     *
     * Not applicable if CommodityRegulatedLevelCode = LR or EQ.
     */
    HazardLabelRequired?: string;
    /**
     * This is the hazard class associated to the specified commodity.
     *
     * Required if CommodityRegulatedLevelCode is 'EQ', 'LQ' or 'FR'
     *
     */
    ClassDivisionNumber?: string;
    /**
     * Optional reference number. It will be displayed only on label.
     */
    ReferenceNumber?: string;
    /**
     * Required if CommodityRegulatedLevelCode = EQ, LQ or FR. The numerical value of the mass capacity of the regulated good.  Should be more than 0.0. Valid characters are 0-9 and "." (Decimal point). Limit to 1 digit after the decimal. The maximum length of the field is 5 including "." (Decimal point) and can hold up to 1 decimal place.
     */
    Quantity?: string;
    /**
     * Required if CommodityRegulatedLevelCode = LQ, EQ or FR. The unit of measure used for the mass capacity of the regulated good.
     *
     * For Example: ml, L, g, mg, kg, cylinder, pound, pint, quart, gallon, ounce etc.
     */
    UOM?: string;
    /**
     * The type of package used to contain the regulated good. (Ex: Fiberboard Box). Required if CommodityRegulatedLevelCode = LQ or FR.   Ex. FIBERBOARD BOX, WOOD(EN) BOX, PLASTIC JERRICAN, METAL BOX, STEEL DRUM, OTHER, PLASTIC BOX, PLASTIC DRUM, STYROFOAM BOX, CYLINDERS, ENVIROTAINER, PLYWOOD BOX, ALUMINUM DRUM, ALUMINUM CYLINDERS, PLASTIC PAIL, PLYWOOD DRUM, FIBER DRUM, STEEL JERRICAN, ALUMINUM JERRICAN, STEEL BOX, CARTON, ALUMINUM BOX
     */
    PackagingType?: string;
    /**
     * This is the ID number (UN/NA/ID) for the specified commodity.
     * Required if CommodityRegulatedLevelCode = LR, LQ or FR and if the field applies to the material by regulation.
     * UN/NA/ID Identification Number assigned to the specified regulated good. (Include the UN/NA/ID as part of the entry).
     */
    IDNumber?: string;
    /**
     * The Proper Shipping Name assigned by ADR, CFR or IATA. Required if CommodityRegulatedLevelCode = LR, LQ or FR.
     */
    ProperShippingName: string;
    /**
     * Additional remarks or special provision information. Recommended if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation.
     *
     * Additional information that may be required by regulation about a hazardous material, such as, "Limited Quantity", DOT-SP numbers, EX numbers.
     *
     */
    AdditionalDescription?: string;
    /**
     * This is the packing group category associated to the specified commodity. Recommended if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation. Must be shown in Roman Numerals.
     * Valid values:
     * I
     * II
     * III
     * blank
     */
    PackagingGroupType?: string;
    /**
     * The packing instructions related to the chemical record. Required if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation.
     */
    PackagingInstructionCode?: string;
    /**
     * 24 Hour Emergency Phone Number of the shipper. Valid values for this field are (0) through (9) with trailing blanks. For numbers within the U.S., the layout is 1, area code, 7-digit number. For all other countries or territories the layout is country or territory code, area code, number.
     *
     * The following are restricted in the phone number period ".", dash "-", plus sign "+" and conventional parentheses "(" and ")", "EXT" or "OPT"
     *
     */
    EmergencyPhone?: string;
    /**
     * The emergency information, contact name and/or contract number, required to be communicated when a call is placed to the EmergencyPhoneNumber. The information is required if there is a value in the EmergencyPhoneNumber field above and the shipment is with a US50 or PR origin and/or destination and the RegulationSet is IATA.
     */
    EmergencyContact?: string;
    /**
     * Recommended if CommodityRegulatedLevelCode = LQ or FR and if the field applies to the material by regulation. If reportable quantity is met, 'RQ' should be entered.
     */
    ReportableQuantity?: string;
    /**
     * The Regulatory set associated with every regulated shipment. It must be same across the shipment.
     * Valid values:
     * ADR = Europe to Europe Ground Movement
     * CFR = HazMat regulated by US Dept. of Transportation within the U.S. or ground shipments to Canada
     * IATA= Worldwide Air movement
     * TDG= Canada to Canada ground movement or Canada to U.S. standard movement.  Valid values are ADR, CFR, IATA and TDG.
     * For multiple Chemical Records per package or multiple packages containing different RegulationSet, RegulationSet of first Chemical Record would be considered for validating and rating the entire shipment.
     */
    RegulationSet: string;
    /**
     * Not applicable for ADR regulation set. Required for any other regulation set. Declares that a package was prepared according to ground passenger aircraft or cargo aircraft only.
     * Valid values:
     * Highway=Highway
     * Ground=Ground
     * PAX=Passenger Aircraft
     * Passenger Aircraft=Passenger Aircraft
     * CAO=Cargo Aircraft Only
     * Cargo Aircraft Only=Cargo Aircraft Only  Valid entries include: Highway, Ground, PAX, Passenger Aircraft, CAO and Cargo Aircraft Only.
     */
    TransportationMode: string;
    /**
     * Indicates the type of commodity - Fully Regulated (FR), Limited Quantity (LQ), Excepted Quantity (EQ) or Lightly Regulated (LR).  Valid values are LR, FR, LQ and EQ.
     * Required for subversion 1701 or greater. LR and EQ are validated if subversion is 1701 or greater. FR, LQ will be validated if subversion is 1807 or greater
     */
    CommodityRegulatedLevelCode?: string;
    /**
     * Transport Category.  Valid values are 0 to 4.
     */
    TransportCategory?: string;
    /**
     * Defines what is restricted to pass through a tunnel.
     */
    TunnelRestrictionCode?: string;
    /**
     * Identifies the Chemical Record.  Required if SubVersion is greater than or equal to 1701.
     */
    ChemicalRecordIdentifier?: string;
    /**
     * Technical name in local language.
     */
    LocalTechnicalName?: string;
    /**
     * Proper shipping name in local langauge.
     */
    LocalProperShippingName?: string;
};

