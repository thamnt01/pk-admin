import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsListComponent } from './product-details-list/product-details-list.component';

const routes: Routes = [
  { path: '', component: ProductDetailsListComponent },
];

export const ProductDetailsRoutes = RouterModule.forChild(routes);
