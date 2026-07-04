import { createAction } from '@ngrx/store';

/** 
 * Actions mean something happened
*/
    
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');