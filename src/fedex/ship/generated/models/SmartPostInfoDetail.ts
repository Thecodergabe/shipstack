/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this object to specify the smartpost shipment details. <br>Required for SMARTPOST service. If SmartPostInfoDetail is indicated, the elements below it are also required.
 */
export type SmartPostInfoDetail = {
    /**
     * Required for Presorted Standard but not for returns or parcel select. They are not all usable for all ancillary endorsements.<br>Example: RETURN_SERVICE
     */
    ancillaryEndorsement?: SmartPostInfoDetail.ancillaryEndorsement;
    /**
     * Required<br>Specify the HubID using the four-digit numeric value.<br>Example: 5015
     */
    hubId: string;
    /**
     * Specify the indicia type.<br>Available options include:<ul><li>MEDIA_MAIL</li><li>PARCEL_SELECT (1 LB through 70 LB)</li><li>PRESORTED_BOUND_PRINTED_MATTER</li><li>PRESORTED_STANDARD (less than 1 LB)</li><li>PARCEL_RETURN</li></ul>Example:PRESORTED_STANDARD
     */
    indicia: SmartPostInfoDetail.indicia;
    /**
     * SmartPost Shipment Special Service Type<br>Example: USPS_DELIVERY_CONFIRMATION
     */
    specialServices?: SmartPostInfoDetail.specialServices;
};
export namespace SmartPostInfoDetail {
    /**
     * Required for Presorted Standard but not for returns or parcel select. They are not all usable for all ancillary endorsements.<br>Example: RETURN_SERVICE
     */
    export enum ancillaryEndorsement {
        ADDRESS_CORRECTION = 'ADDRESS_CORRECTION',
        CARRIER_LEAVE_IF_NO_RESPONSE = 'CARRIER_LEAVE_IF_NO_RESPONSE',
        CHANGE_SERVICE = 'CHANGE_SERVICE',
        FORWARDING_SERVICE = 'FORWARDING_SERVICE',
        RETURN_SERVICE = 'RETURN_SERVICE',
    }
    /**
     * Specify the indicia type.<br>Available options include:<ul><li>MEDIA_MAIL</li><li>PARCEL_SELECT (1 LB through 70 LB)</li><li>PRESORTED_BOUND_PRINTED_MATTER</li><li>PRESORTED_STANDARD (less than 1 LB)</li><li>PARCEL_RETURN</li></ul>Example:PRESORTED_STANDARD
     */
    export enum indicia {
        MEDIA_MAIL = 'MEDIA_MAIL',
        PARCEL_RETURN = 'PARCEL_RETURN',
        PARCEL_SELECT = 'PARCEL_SELECT',
        PRESORTED_BOUND_PRINTED_MATTER = 'PRESORTED_BOUND_PRINTED_MATTER',
        PRESORTED_STANDARD = 'PRESORTED_STANDARD',
    }
    /**
     * SmartPost Shipment Special Service Type<br>Example: USPS_DELIVERY_CONFIRMATION
     */
    export enum specialServices {
        USPS_DELIVERY_CONFIRMATION = 'USPS_DELIVERY_CONFIRMATION',
    }
}

