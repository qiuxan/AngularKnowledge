import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signals',
    pathMatch: 'full',
  },
  {
    path: 'signals',
    loadComponent: () => import('./pages/signals/signals').then((m) => m.Signals),
  },
  {
    path: 'signal-rxjs',
    loadComponent: () => import('./pages/signal-rxjs/signal-rxjs').then((m) => m.SignalRxjs),
  },
  {
    path: 'standalone-demo',
    loadComponent: () =>
      import('./pages/standalone-demo/standalone-demo').then((m) => m.StandaloneDemo),
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./pages/control-flow/control-flow').then((m) => m.ControlFlow),
  },
  {
    path: 'onpush-demo',
    loadComponent: () => import('./pages/onpush-demo/onpush-demo').then((m) => m.OnpushDemo),
  },
  {
    path: 'rxjs-mapping',
    loadComponent: () => import('./pages/rxjs-mapping/rxjs-mapping').then((m) => m.RxjsMapping),
  },
  {
    path: 'forms-demo',
    loadComponent: () => import('./pages/forms-demo/forms-demo').then((m) => m.FormsDemo),
  },
  {
    path: 'lazy-defer',
    loadComponent: () => import('./pages/lazy-defer/lazy-defer').then((m) => m.LazyDefer),
  },
  {
    path: 'state-management',
    loadComponent: () =>
      import('./pages/state-management/state-management').then((m) => m.StateManagement),
  },
  {
    path: 'ngrx-demo',
    loadComponent: () => import('./pages/ngrx-demo/ngrx-demo').then((m) => m.NgrxDemo),
  },
  {
    path: 'protected-profile',
    loadComponent: () =>
      import('./pages/protected-profile/protected-profile').then((m) => m.ProtectedProfile),
  },
  {
    path: 'ngrx-async',
    loadComponent: () => import('./pages/ngrx-async/ngrx-async').then((m) => m.NgrxAsync),
  },
];
