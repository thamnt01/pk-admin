import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesModalComponent } from './categories-modal/categories-modal.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CategoryRoutes } from './category.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutes
  ],
  declarations: [
    CategoriesListComponent,
    CategoriesModalComponent
  ]
})
export class CategoryModule { }
