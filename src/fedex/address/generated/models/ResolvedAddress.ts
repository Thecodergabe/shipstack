/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerMessage } from './CustomerMessage';
import type { ParsedPostalCode } from './ParsedPostalCode';
import type { ResolutionToken } from './ResolutionToken';
export type ResolvedAddress = {
    /**
     * Indicates the resolved street address lines.<br>Example: [\"7372 PARKRIDGE BLVD\", \"APT 286, 2903 sprank\"]
     */
    streetLinesToken?: Array<string>;
    /**
     * This is resolved city name.<br> Example: IRVING
     */
    city?: string;
    /**
     * This is resolved state or province code.<br>Example: TX<br><a onclick='loadDocReference("canadaprovincecodes")'>Click here to see State Or Province Code</a>
     */
    stateOrProvinceCode?: string;
    /**
     * This is resolved ISO alpha 2 country code.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    countryCode?: string;
    /**
     * Returns messages pertaining to the resolved address indicating if any additional information is required.<br><br>Following are informational code and messages with respect to the results:<ul><li><i>INVALID.SUITE.NUMBER</i> &ndash; Invalid or missing Apartment/Suite</li><li><i>SUITE.NUMBER.REQUIRED</i> &ndash; Invalid or missing Apartment/Suite</li><li><i>PARTIAL.STREET.MATCH</i> &ndash; A street address is required for delivery. The entered address is a street number range.</li><li><i>MISSING.OR.AMBIGUOUS.DIRECTIONAL</i> &ndash; Invalid or missing address directional.</li><li><i>INTERPOLATED.STREET.ADDRESS</i> &ndash; Unable to confirm exact street number for the entered street name. The address falls within a valid range for the street name.</li><li><i>RRHC.CONVERSION</i> &ndash; A street address is required for delivery. The address has been converted from a rural route.</li></ul>
     */
    customerMessage?: Array<CustomerMessage>;
    /**
     * This is the resolved city name with a token. The token is an indication to the changes made.<br> Examples: [TOK-1X3256]
     */
    cityToken?: Array<ResolutionToken>;
    /**
     * This is the resolved postal code with a token. The token is an indication to the changes made.
     */
    postalCodeToken?: ResolutionToken;
    parsedPostalCode?: ParsedPostalCode;
    /**
     * This is the classification type of a FedEx address.<br>Valid values:<ul><li>BUSINESS</li><li>RESIDENTIAL</li><li>MIXED (If it is a multi-tenant based address and contains both business and residential units.)</li><li>UNKNOWN (If just a zip code is provided, Address Validation Service returns 'unknown' for the business/residential classification.)</li>
     */
    classification?: ResolvedAddress.classification;
    /**
     * Indicates if the resolved address is a P.O. Box.
     */
    postOfficeBox?: boolean;
    /**
     * Indicates the presence of a delivery point such as a mailbox. Provided only for US addresses that are standardized against Postal Data.
     */
    normalizedStatusNameDPV?: boolean;
    /**
     * Indicates the source from which the standardized address is matched. <br> Example: Postal or Map.
     */
    standardizedStatusNameMatchSource?: string;
    /**
     * Indicates the resolution method used to resolve the address. <br>Valid values: <ul><li>USPS_VALIDATE</li><li>CA_VALIDATE</li><li>GENERIC_VALIDATE</li><li>NAVTEQ_GEO_VALIDATE</li><li>TELEATLAS_GEO_VALIDATE</li></ul>
     */
    resolutionMethodName?: string;
    /**
     * Indicates if the resolved address is a Rural Route or Highway Contract (US only). It returns true if it is rural route.
     */
    ruralRouteHighwayContract?: boolean;
    /**
     * Indicates the mail service is for those without permanent address. The mails for this address are held at a post office. Only applies to addresses that can be standardized against Postal Data. Not provided for US Geo Validated addresses. <br>Note: Only returned when the address cannot be resolved.
     */
    generalDelivery?: boolean;
    /**
     * These are the  key-value pair as additional information returned along with the address processed by the system. These attribute will list what is working and what is not on the input address. For More information, look in to Chapter Address Attributes in the Overview.<br><a onclick='loadDocReference("addressattributes")'>Click here to see Address Attributes</a>
     */
    attributes?: {
        /**
         * true indicates the input address is a POBox.
         */
        POBox?: boolean;
        /**
         * True indicates a POBox only postal code.
         */
        POBoxOnlyZIP?: boolean;
        /**
         * True indicates when the address comes under a new ZIP code that did not exists previously.
         */
        SplitZip?: boolean;
        /**
         * True indicates the resolved address includes a suite number, but it was missing in the request.
         */
        SuiteRequiredButMissing?: boolean;
        /**
         * True indicates an invalid suite number.
         */
        InvalidSuiteNumber?: boolean;
        /**
         * Type of input information (Currently only option is RAW_ADDRESS).
         */
        ResolutionInput?: string;
        /**
         * True indicates the postal delivery address is valid delivery point.
         */
        DPV?: boolean;
        /**
         * Indicates the type of resolution method utilized to resolve the address.  Valid Values:  USPS_VALIDATE (US postal), NAVTEQ_GEO_VALIDATE or RELEATLAS_GEO_VALIDATED (US geo/map validated), CA_VALIDATE (Canada postal), GENERIC_VALIADTE (other validation).
         */
        ResolutionMethod?: string;
        /**
         * Month and year of the reference data that was used to identify the address.
         */
        DataVintage?: string;
        /**
         * Indicates 'Postal' or 'Map' date was used to match the address.
         */
        MatchSource?: string;
        /**
         * True indicates the country is supported by the Address Validation service.
         */
        CountrySupported?: boolean;
        /**
         * True indicates the address is in a valid format.
         */
        ValidlyFormed?: boolean;
        /**
         * True indicates the address matches to a record in the address validation repository.
         */
        Matched?: boolean;
        /**
         * True indicates the address was successfully resolved.
         */
        Resolved?: boolean;
        /**
         * True indicates the address was inserted into the Address data repository.
         */
        Inserted?: boolean;
        /**
         * True indicates that an input address was resolved to a standardized address for the base address of a multi-unit building. False indicates that the address was not resolved to a standardized address for the base address of a multi-unit building.
         */
        MultiUnitBase?: boolean;
        /**
         * True indicates the input address was resolved to a standardized address based upon a Zip-11 postal code match. This is the highest level of postal code validation.
         */
        ZIP11Match?: boolean;
        /**
         * True indicates that the input address was resolved to a standardized address based upon at least a ZIP+4 match, for example 80003-5581.
         */
        ZIP4Match?: boolean;
        /**
         * True indicates that the postal code of the address is unique for a specific postal customer address. The ZIP may apply to a single unit or floor within a building, to an entire building, or to an institution or corporate campus.
         */
        UniqueZIP?: boolean;
        /**
         * True indicates that the house number and street name were validated against reference data.
         */
        StreetAddress?: boolean;
        /**
         * True indicates a Rural Route conversion was applied to the address in order to process it.
         */
        RRConversion?: boolean;
        /**
         * True indicates address contains multiple units.
         */
        ValidMultiUnit?: boolean;
        /**
         * valid values:<br>RAW - address country not supported.<br>NORMALIZED - address country supported, but unable to match the address against reference data.<br>STANDARDIZED - address service was able to successfully match the address against reference data.
         */
        AddressType?: string;
        /**
         * Indicates the depth/precision of the address.  MULTI_TENANT_UNIT indicates that the address has valid secondary information.<br>MULTI_TENANT_BASE indicates that the address is a valid multi tentant location but secondary information either was not provided or could not be validated.<br>PO_BOX indicates that the local postal authority services the address through a PO Box.<br>UNIQUE_ZIP indicates that the address could be validated to the postal code level and that postal code is a unique zip for the USPS.<br>STREET_ADDRESS / Street indicates that the location is not a valid multi tenant location.<br>StreetBuilding indicates that the address was validated to a building name that is in the reference data.<br>StreetOrganization indicates that the address was validated to an organization name that is in the reference data.<br>StreetName indicates that the address was validated to the street name level in reference data and the house number (if provided) could not be validated.valid values:<br>MULTI_TENANT_UNIT- address consists of multiple units, some could be BUSINESS, some could be MIXED.
         */
        AddressPrecision?: string;
        /**
         * True indicates the address requested has multiple matches available, usually due to a simPle difference such as a leading directional.
         */
        MultipleMatches?: boolean;
    };
};
export namespace ResolvedAddress {
    /**
     * This is the classification type of a FedEx address.<br>Valid values:<ul><li>BUSINESS</li><li>RESIDENTIAL</li><li>MIXED (If it is a multi-tenant based address and contains both business and residential units.)</li><li>UNKNOWN (If just a zip code is provided, Address Validation Service returns 'unknown' for the business/residential classification.)</li>
     */
    export enum classification {
        MIXED = 'MIXED',
        UNKNOWN = 'UNKNOWN',
        BUSINESS = 'BUSINESS',
        RESIDENTIAL = 'RESIDENTIAL',
    }
}

