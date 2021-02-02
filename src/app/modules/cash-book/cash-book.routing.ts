import { Routes, RouterModule } from '@angular/router';
import { CashBookListComponent } from './cash-book-list/cash-book-list.component';

const routes: Routes = [
  { path: '', component: CashBookListComponent },
];

export const CashBookRoutes = RouterModule.forChild(routes);
