import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesModalComponent } from './categories-modal/categories-modal.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CategoryRoutes } from './category.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutes,
    ReactiveFormsModule
  ],
  declarations: [
    CategoriesListComponent,
    CategoriesModalComponent
  ]
})
export class CategoryModule { }
