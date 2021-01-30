import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: 'category',
        loadChildren: () =>
          import('./modules/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'product-details',
        loadChildren: () =>
          import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule)
      },
    ]
  }];

export const AppRoutes = RouterModule.forRoot(routes);
