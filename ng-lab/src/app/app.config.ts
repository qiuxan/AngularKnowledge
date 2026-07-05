import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { fakeBackendInterceptor } from './shared/fake-backend.interceptor';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthEffects } from './state/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './state/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      counter: counterReducer,
      auth: authReducer,
    }),
    provideEffects([AuthEffects]),
    provideHttpClient(withInterceptors([fakeBackendInterceptor])),
  ],
};
