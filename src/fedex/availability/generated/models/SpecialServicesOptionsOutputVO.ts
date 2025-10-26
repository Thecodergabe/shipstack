/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { OptionalServices } from './OptionalServices';
/**
 * The response elements for the special service availability request.
 */
export type SpecialServicesOptionsOutputVO = {
    /**
     * The cxs alert type, alert code, and alert message.
     */
    alerts?: Array<Alert>;
    /**
     * The list of options applicable when special service option is selected. The options include:<br>-Service types<br>-Signature options</br>-Package Special services list<br>-Return shipment list<br>-Carrier code<br>-Battery option list<br>-Alert list<br>-Shipment special services ist<br>-Cxs alerts
     */
    serviceOptionsList?: Array<OptionalServices>;
};

