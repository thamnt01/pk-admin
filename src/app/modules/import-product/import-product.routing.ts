import { Routes, RouterModule } from '@angular/router';
import { ImportListComponent } from './import-list/import-list.component';

const routes: Routes = [
  { path: '', component: ImportListComponent },
];

export const ImportProductRoutes = RouterModule.forChild(routes);
