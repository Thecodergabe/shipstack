/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubMilestone } from './SubMilestone';
/**
 * The list of milestones associated with the package. Milestones will be returned in chronological order, with the oldest first and most recent/future milestones last.
 */
export type Milestones = {
    /**
     * The milestone category. This will be present only when a milestone is in a COMPLETE state.
     */
    category?: string;
    /**
     * The milestone code.
     */
    code?: string;
    /**
     * The indication if the milestone represents the current state of the package. Valid values: 'true' this milestone is the current state of the package.  'false' this milestone is not current.
     */
    current?: boolean;
    /**
     * The milestone description. Note: this is not translated at this time and is returned in US English.
     */
    description?: string;
    /**
     * The 0-based index of the activity that triggered this milestone. This will be returned only when a milestone is in a COMPLETE state. For example the most recent activity on the response is index 0.
     */
    linkedActivity?: string;
    /**
     * The milestone state. Valid values: 'This milestone has already occurred'/'This milestone has not yet been completed'.
     */
    state?: string;
    subMilestone?: SubMilestone;
};

