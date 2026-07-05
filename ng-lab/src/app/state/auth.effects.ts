import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthTokenStorage } from '../shared/auth-token-storage';
import { login, loginFailure, loginSuccess, logout } from './auth.actions';
import { LoginResponse } from './auth.models';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);
  private tokenStorage = inject(AuthTokenStorage);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ email, password }) =>
        this.http.post<LoginResponse>('/api/login', { email, password }).pipe(
          map((response) =>
            loginSuccess({
              token: response.token,
              user: response.user,
            }),
          ),
          catchError((error) =>
            of(
              loginFailure({
                error: error.error?.message ?? 'Login failed',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  saveToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(({ token }) => {
          this.tokenStorage.setToken(token);
        }),
      ),
    { dispatch: false },
  );

  clearToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          this.tokenStorage.clearToken();
        }),
      ),
    { dispatch: false },
  );
}
