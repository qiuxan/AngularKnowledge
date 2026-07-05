import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { delay, of, throwError } from 'rxjs';
import { AuthUser, LoginResponse } from '../state/auth.models';

const DEMO_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkRlbW8gVXNlciIsInVzZXJuYW1lIjoiZGVtbyIsImVtYWlsIjoiZGVtb0BleGFtcGxlLmNvbSIsInJvbGUiOiJGcm9udGVuZCBEZXZlbG9wZXIifQ.fake-signature';

export const fakeBackendInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === '/api/login' && req.method === 'POST') {
    const body = req.body as { email: string; password: string };

    if (body.email !== 'demo@example.com' || body.password !== 'password') {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: 401,
            statusText: 'Unauthorized',
            error: { message: 'Invalid email or password' },
          }),
      ).pipe(delay(600));
    }

    const user: AuthUser = {
      id: 1,
      name: 'Demo User',
      email: body.email,
      role: 'Frontend Developer',
    };

    const response: LoginResponse = {
      token: DEMO_JWT,
      user,
    };

    return of(new HttpResponse({ status: 200, body: response })).pipe(delay(600));
  }

  return next(req);
};