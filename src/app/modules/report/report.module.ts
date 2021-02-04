import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ReportRoutes } from './report.routing';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutes,
    SharedModule,
    NgxChartsModule
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }
