import { Routes, RouterModule } from '@angular/router';
import { CarouselListComponent } from './carousel-list/carousel-list.component';

const routes: Routes = [
  { path: '', component: CarouselListComponent },
];

export const CarouselRoutes = RouterModule.forChild(routes);
