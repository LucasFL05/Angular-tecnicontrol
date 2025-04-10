import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ordens-preview',
    loadComponent: () =>
      import('./features/ordens/pages/ordens-preview/ordens-preview.component').then(m => m.OrdensPreviewComponent)
  },
  {
    path: '',
    redirectTo: 'ordens-preview',
    pathMatch: 'full'
  }
];
