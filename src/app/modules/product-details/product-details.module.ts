import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsRoutes } from './product-details.routing';
import { ProductDetailsListComponent } from './product-details-list/product-details-list.component';
import { ProductDetailsModalComponent } from './product-details-modal/product-details-modal.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsRoutes,
    SharedModule
  ],
  declarations: [
    ProductDetailsListComponent,
    ProductDetailsModalComponent
  ]
})
export class ProductDetailsModule { }
