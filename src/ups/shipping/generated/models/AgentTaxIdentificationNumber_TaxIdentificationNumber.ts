/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The value for flexibility and future extensibility of these Identification Numberrequirements,the recommendation is to support up to eight Identification Numbers per shipment party/role.
 */
export type AgentTaxIdentificationNumber_TaxIdentificationNumber = {
    /**
     * The code or number that a shipper or consignee has registered with a particular country’s authority for doing business, or for identification purposes.
     */
    IdentificationNumber: string;
    /**
     * A business or individual identification type description (Future Use).specifies the relationship of the customer/ID Number to the shipment  05 =importer Address, 06=Exporter Address  , 18=DeliverTo/Consignee/Reciever Address,  37= Shipper Address.
     */
    IDNumberCustomerRole: string;
    /**
     * to determine if decryption is required. 0 = Identification number is not
     * Encrypted
     * 1 = Identification number is
     * Encrypted
     */
    IDNumberEncryptionIndicator: string;
    /**
     * The ISO-defined country code of the country where the Identification Number was issued, when applicable (as per business requirements). Needed for certain types of Identification Numbers (e.g., Passport Number).
     * Sample Values: 'ID' = Indonesia,
     * 'VN' = Vietnam,
     * 'DE' = Germany
     */
    IDNumberIssuingCntryCd?: string;
    /**
     * Code that specifies the purpose of the Identification Number. For all tax ID that are not EORI = ‘01’
     * Valid values:
     * 00/ Spaces = Unknown
     * 01= Customs/Brokerage (Default)
     * 02= Customs/Brokerage EORI
     * 99= Other
     */
    IDNumberPurposeCode: string;
    /**
     * The ISO-defined country code of the country whose regulatory agency is requesting the Identification Number.
     * Typically for Import, the Consignee ID is requested by the Ship To country
     * For export, the Shipper ID is requested by the Ship From country.
     *
     * Required when a country (e.g., Origin country, Destination country) is requesting an ID Number for a shipment.
     */
    IDNumberRequestingCntryCd?: string;
    /**
     * Valid Values are:
     * 0000 = Unknown
     * IDNumberTypeCode equal to ‘0000’ (unknown) is to be used when an ‘ID Number Type’ is not applicable, or when the front-end/client system cannot determine the type of IdentificationNumber (for any reason).
     * 0001 = Exporter Tax ID Number
     * 0002 = Importer Tax ID Number or
     * EORI Number – When
     * IdentificationNumberPurposeCode
     * = 02
     * 0005 = Personal Tax ID Number
     * 1001 = Other / Free Form
     * 1002 = Company/Business Tax ID Number
     * 1003 = National ID Number
     * 1004 = Passport Number
     * 1005 = Personal ID Number
     * 1006 = Phone Number
     */
    IDNumberTypeCode: string;
    /**
     * field to determine if the Identification Number should be excluded from Shipping/Brokerage documents (not be passed to Document Services)  ‘00’ -> Do Not include 01-> Include.
     */
    IncludeIDNumberOnShippingBrokerageDocs?: string;
};

