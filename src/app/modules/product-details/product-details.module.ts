import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsRoutes } from './product-details.routing';
import { ProductDetailsListComponent } from './product-details-list/product-details-list.component';
import { ProductDetailsModalComponent } from './product-details-modal/product-details-modal.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsRoutes,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductDetailsListComponent,
    ProductDetailsModalComponent
  ]
})
export class ProductDetailsModule { }
