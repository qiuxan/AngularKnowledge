import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { AuthTokenStorage } from '../../shared/auth-token-storage';
import { LoginResponse } from '../../state/auth.models';

@Component({
  selector: 'app-protected-profile',
  imports: [],
  templateUrl: './protected-profile.html',
  styleUrl: './protected-profile.scss',
})
export class ProtectedProfile {
  private http = inject(HttpClient);
  private tokenStorage = inject(AuthTokenStorage);

  loading = signal(false);
  error = signal('');
  token = signal(this.tokenStorage.getToken() ?? '');
  userName = signal('');

  login() {
    this.loading.set(true);
    this.error.set('');

    this.http
      .post<LoginResponse>('/api/login', {
        email: 'demo@example.com',
        password: 'password',
      })
      .subscribe({
        next: (response) => {
          this.tokenStorage.setToken(response.token);
          this.token.set(response.token);
          this.userName.set(response.user.name);
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(error.error?.message ?? 'Login failed');
          this.loading.set(false);
        },
      });
  }

  logout() {
    this.tokenStorage.clearToken();
    this.token.set('');
    this.userName.set('');
    this.error.set('');
  }
}