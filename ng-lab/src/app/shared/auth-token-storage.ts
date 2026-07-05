import { Injectable } from '@angular/core';

const TOKEN_KEY = 'demo_jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenStorage {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}