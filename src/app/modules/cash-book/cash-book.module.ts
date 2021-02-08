import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CashBookRoutes } from './cash-book.routing';
import { CashBookListComponent } from './cash-book-list/cash-book-list.component';
import { CashBookModalComponent } from './cash-book-modal/cash-book-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CashBookRoutes,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [CashBookListComponent, CashBookModalComponent]
})
export class CashBookModule { }
