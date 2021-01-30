import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZorroAntdModule } from '../zorro-antd.module';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ActionTableButtonComponent } from './action-table-button/action-table-button.component';

@NgModule({
  imports: [
    CommonModule,
    ZorroAntdModule,
  ],
  exports: [
    ActionButtonComponent,
    ActionTableButtonComponent
  ],
  declarations: [
    ActionButtonComponent,
    ActionTableButtonComponent
  ]
})
export class ComponentsModule { }
