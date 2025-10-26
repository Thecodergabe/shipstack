/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use this object to specify the smartpost shipment details. <br>Required for SMARTPOST service. If SmartPostInfoDetail is indicated, the elements below it are also required.
 */
export type SmartPostInfoDetail = {
    /**
     * Indicate the type of ancillary endorsement. Is required for Presorted Standard but not for returns or parcel select. Note not all are usable for all ancillary endorsements.<br>For more information, refer to the <a href = 'https://www.fedex.com/en-us/shipping/fedex-smartpost/rates-zones.html' target='_blank'>FedEx SmartPost®</a>.
     */
    ancillaryEndorsement?: SmartPostInfoDetail.ancillaryEndorsement;
    /**
     * Specify the four-digit numeric Hub ID value used during rate quote for smartport shipments.<br><a onclick='loadDocReference("smartposthubids")'>Click here to see Hub Ids</a>
     */
    hubId?: string;
    /**
     * Specify the indicia type.<br>Available options include:<ul><li>MEDIA_MAIL</li><li>PARCEL_SELECT (1 LB through 70 LB)</li><li>PRESORTED_BOUND_PRINTED_MATTER</li><li>PRESORTED_STANDARD (less than 1 LB)</li><li>PARCEL_RETURN</li></ul>
     */
    indicia?: SmartPostInfoDetail.indicia;
    /**
     * Specify the special handling associated with Smartpost Shipment.<br><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>Click here to see Shipment Level Special Service Types</a>
     */
    specialServices?: SmartPostInfoDetail.specialServices;
};
export namespace SmartPostInfoDetail {
    /**
     * Indicate the type of ancillary endorsement. Is required for Presorted Standard but not for returns or parcel select. Note not all are usable for all ancillary endorsements.<br>For more information, refer to the <a href = 'https://www.fedex.com/en-us/shipping/fedex-smartpost/rates-zones.html' target='_blank'>FedEx SmartPost®</a>.
     */
    export enum ancillaryEndorsement {
        ADDRESS_CORRECTION = 'ADDRESS_CORRECTION',
        CARRIER_LEAVE_IF_NO_RESPONSE = 'CARRIER_LEAVE_IF_NO_RESPONSE',
        CHANGE_SERVICE = 'CHANGE_SERVICE',
        FORWARDING_SERVICE = 'FORWARDING_SERVICE',
        RETURN_SERVICE = 'RETURN_SERVICE',
    }
    /**
     * Specify the indicia type.<br>Available options include:<ul><li>MEDIA_MAIL</li><li>PARCEL_SELECT (1 LB through 70 LB)</li><li>PRESORTED_BOUND_PRINTED_MATTER</li><li>PRESORTED_STANDARD (less than 1 LB)</li><li>PARCEL_RETURN</li></ul>
     */
    export enum indicia {
        MEDIA_MAIL = 'MEDIA_MAIL',
        PARCEL_RETURN = 'PARCEL_RETURN',
        PARCEL_SELECT = 'PARCEL_SELECT',
        PRESORTED_BOUND_PRINTED_MATTER = 'PRESORTED_BOUND_PRINTED_MATTER',
        PRESORTED_STANDARD = 'PRESORTED_STANDARD',
    }
    /**
     * Specify the special handling associated with Smartpost Shipment.<br><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>Click here to see Shipment Level Special Service Types</a>
     */
    export enum specialServices {
        USPS_DELIVERY_CONFIRMATION = 'USPS_DELIVERY_CONFIRMATION',
    }
}

