import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ReportRoutes } from './report.routing';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutes,
    SharedModule
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }
