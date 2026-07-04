import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
/**
 * Reducer means given current state and action, return next state
*/
export const initialCounterState = 0;

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => initialCounterState),
);