/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the return transit times, services needed on rate failure, choice of variable option and order to sort rate options to filter and sort the expected response.
 */
export type RateRequestControlParameters = {
    /**
     * Indicate if the transit time and commit data are to be returned in the reply. Default value is false.<br>Valid values are TRUE and FALSE.
     */
    returnTransitTimes?: boolean;
    /**
     * Specify the services to be requested if the rate data is not available.<br>Valid values are TRUE and FALSE.
     */
    servicesNeededOnRateFailure?: boolean;
    /**
     * Specify service options whose combinations are to be considered when replying with available services.<br>Example: FREIGHT_GUARANTEE</br>
     */
    variableOptions?: RateRequestControlParameters.variableOptions;
    /**
     * This is a sort order you can specify to control the order of the response data. <br> Example: SERVICENAMETRADITIONAL</br> <br> <ul><li>SERVICENAMETRADITIONAL - data in order of highest to lowest service (Default)</li><li>COMMITASCENDING - data in order of ascending delivery committment</li><li>COMMITDESCENDING - data in order of descending delivery committment.</li></ul></br>
     */
    rateSortOrder?: RateRequestControlParameters.rateSortOrder;
};
export namespace RateRequestControlParameters {
    /**
     * Specify service options whose combinations are to be considered when replying with available services.<br>Example: FREIGHT_GUARANTEE</br>
     */
    export enum variableOptions {
        SATURDAY_DELIVERY = 'SATURDAY_DELIVERY',
        FREIGHT_GUARANTEE = 'FREIGHT_GUARANTEE',
        SMART_POST_ALLOWED_INDICIA = 'SMART_POST_ALLOWED_INDICIA',
        SMARTPOST_HUB_ID = 'SMARTPOST_HUB_ID',
    }
    /**
     * This is a sort order you can specify to control the order of the response data. <br> Example: SERVICENAMETRADITIONAL</br> <br> <ul><li>SERVICENAMETRADITIONAL - data in order of highest to lowest service (Default)</li><li>COMMITASCENDING - data in order of ascending delivery committment</li><li>COMMITDESCENDING - data in order of descending delivery committment.</li></ul></br>
     */
    export enum rateSortOrder {
        COMMITASCENDING = 'COMMITASCENDING',
        SERVICENAMETRADITIONAL = 'SERVICENAMETRADITIONAL',
        COMMITDESCENDING = 'COMMITDESCENDING',
    }
}

