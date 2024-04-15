import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'add-user',
    loadComponent: () =>
      import('./admin/add-user/add-user.component').then(
        (c) => c.AddUserComponent
      ),
  },
];
