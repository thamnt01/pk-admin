import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CarouselRoutes } from './carousel.routing';
import { CarouselListComponent } from './carousel-list/carousel-list.component';
import { CarouselModalComponent } from './carousel-modal/carousel-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselRoutes,
    ReactiveFormsModule
  ],
  declarations: [
    CarouselListComponent,
    CarouselModalComponent
  ]
})
export class CarouselModule { }
