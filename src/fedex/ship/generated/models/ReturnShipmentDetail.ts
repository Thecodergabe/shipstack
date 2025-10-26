/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReturnAssociationDetail } from './ReturnAssociationDetail';
import type { ReturnEmailDetail } from './ReturnEmailDetail';
import type { ReturnMerchandiseAuthorization } from './ReturnMerchandiseAuthorization';
/**
 * Use this object for specifying return shipment details.
 */
export type ReturnShipmentDetail = {
    returnEmailDetail?: ReturnEmailDetail;
    rma?: ReturnMerchandiseAuthorization;
    returnAssociationDetail?: ReturnAssociationDetail;
    /**
     * This specifies the return Type. Required to be set to PRINT_RETURN_LABEL for printed return label shipments.For email return label shipments returnType must be set to PENDING and pendingShipmentDetail must be set to EMAIL.<br>Valid Values : PENDING, PRINT_RETURN_LABEL<br>Example: PRINT_RETURN_LABEL
     */
    returnType: ReturnShipmentDetail.returnType;
};
export namespace ReturnShipmentDetail {
    /**
     * This specifies the return Type. Required to be set to PRINT_RETURN_LABEL for printed return label shipments.For email return label shipments returnType must be set to PENDING and pendingShipmentDetail must be set to EMAIL.<br>Valid Values : PENDING, PRINT_RETURN_LABEL<br>Example: PRINT_RETURN_LABEL
     */
    export enum returnType {
        PENDING = 'PENDING',
        PRINT_RETURN_LABEL = 'PRINT_RETURN_LABEL',
    }
}

