import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutes } from './products.routing';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutes,
    SharedModule
  ],
  declarations: [
    ProductsListComponent,
    ProductsModalComponent
  ]
})
export class ProductsModule { }
