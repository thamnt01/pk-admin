import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ImportProductRoutes } from './import-product.routing';
import { ImportListComponent } from './import-list/import-list.component';
import { ImportModalComponent } from './import-modal/import-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ImportProductRoutes,
    SharedModule
  ],
  declarations: [
    ImportListComponent,
    ImportModalComponent
  ]
})
export class ImportProductModule { }
