import { createFeatureSelector, createSelector } from '@ngrx/store';

/**
 * Selectors mean given current state, return some data from the state
*/
export const selectCounter = createFeatureSelector<number>('counter');

export const selectDoubleCounter = createSelector(selectCounter, (counter) => counter * 2);
