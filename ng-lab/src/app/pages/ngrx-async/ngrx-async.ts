import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../../state/auth.actions';
import {
  selectAuthError,
  selectAuthLoading,
  selectAuthToken,
  selectAuthUser,
  selectIsLoggedIn,
} from '../../state/auth.selectors';

@Component({
  selector: 'app-ngrx-async',
  imports: [AsyncPipe],
  templateUrl: './ngrx-async.html',
  styleUrl: './ngrx-async.scss',
})
export class NgrxAsync {
  private store = inject(Store);

  user$ = this.store.select(selectAuthUser);
  token$ = this.store.select(selectAuthToken);
  loading$ = this.store.select(selectAuthLoading);
  error$ = this.store.select(selectAuthError);
  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  login() {
    this.store.dispatch(
      login({
        email: 'demo@example.com',
        password: 'password',
      }),
    );
  }

  loginWithWrongPassword() {
    this.store.dispatch(
      login({
        email: 'demo@example.com',
        password: 'wrong-password',
      }),
    );
  }

  logout() {
    this.store.dispatch(logout());
  }
}