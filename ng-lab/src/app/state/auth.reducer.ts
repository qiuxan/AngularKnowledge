import { createReducer, on } from '@ngrx/store';
import { login, loginFailure, loginSuccess, logout } from './auth.actions';
import { AuthState } from './auth.models';

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loginSuccess, (state, { token, user }) => ({
    ...state,
    token,
    user,
    loading: false,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(logout, () => initialAuthState),
);