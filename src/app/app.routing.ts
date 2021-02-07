import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
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
      {
        path: 'order',
        loadChildren: () =>
          import('./modules/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'cash-book',
        loadChildren: () =>
          import('./modules/cash-book/cash-book.module').then(m => m.CashBookModule)
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./modules/report/report.module').then(m => m.ReportModule)
      },
      {
        path: 'carousel',
        loadChildren: () =>
          import('./modules/carousel/carousel.module').then(m => m.CarouselModule)
      },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/login/login.module').then(m => m.LoginModule)
      },
    ]
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
