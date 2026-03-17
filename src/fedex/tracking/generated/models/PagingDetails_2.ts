/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the details about how to retrieve the subsequent pages when there is more than one page in the TrackReply.
 */
export type PagingDetails_2 = {
    /**
     * <p>Use this element to specify the number of Tracking results to be returned in the Tracking response. Use this and pagingToken elements, to retrieve remaining set of the track results.</p><p><u>Here is how the paging works:</u><br>For your first track request, send element <i>resultsPerPage</i>, with a number XX (5) and the response will return XX (5) results along with element <i>pagingToken</i> and <i>moreDataAvailable</i> = true or false based on the number of tracking results.</p><ul><li>If <i>moreDataAvailable</i> = false, then there are no more track results can be retrieved further.</li><li>If <i>moreDataAvailable</i> = True, then it means there are more track results and hence send the next tracking request with <i>resultsPerPage</i> = YY (4) and <i>pagingToken</i> = XX + 1 (5)  from Track Response element <i>pagingToken</i>. This can be continued until the <i>moreDataAvailable</i> becomes false or there are no more tracking results.</li></ul> <br> Example: 10
     */
    resultsPerPage?: number;
    /**
     * <p>Use this element to specify the starting sequence for the next set of tracking results. This element can be specified if paging is used in the initial tracking request and you need to request next set of track results.</p><p><i>Note:  This element not to be used in the initial tracking request and only should be used in the subsequent track requests when there is paging (element </i>resultsPerPage <i>is specified) indicated.</i></p> <br> Example: 1234567890
     */
    pagingToken?: string;
};

