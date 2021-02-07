import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/_shared/shared.module';
import { OrderRoutes } from './order.routing';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderModalComponent } from './order-modal/order-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutes,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    OrderListComponent,
    OrderModalComponent
  ]
})
export class OrderModule { }
