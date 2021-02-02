import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CashBookRoutes } from './cash-book.routing';
import { CashBookListComponent } from './cash-book-list/cash-book-list.component';

@NgModule({
  imports: [
    CommonModule,
    CashBookRoutes,
    SharedModule
  ],
  declarations: [CashBookListComponent]
})
export class CashBookModule { }
