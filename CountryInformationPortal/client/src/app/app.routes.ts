import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

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
  {
    path: 'product',
    component: CartComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
];
