import { Routes } from '@angular/router';
import { selectProviderGuard } from '@front/features/select-provider';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'checker' },
  {
    path: 'checker',
    canActivate: [selectProviderGuard],
    loadComponent: () => import('@front/pages/checker-page').then(m => m.CheckerPageComponent),
  },
  {
    path: 'providers/select',
    loadComponent: () =>
      import('@front/pages/select-provider-page').then(m => m.SelectProviderPageComponent),
  },
];
