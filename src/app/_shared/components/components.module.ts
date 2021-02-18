import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZorroAntdModule } from '../zorro-antd.module';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ActionTableButtonComponent } from './action-table-button/action-table-button.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

@NgModule({
  imports: [
    CommonModule,
    ZorroAntdModule,
  ],
  exports: [
    ActionButtonComponent,
    ActionTableButtonComponent,
    UploadImageComponent
  ],
  declarations: [
    ActionButtonComponent,
    ActionTableButtonComponent,
    UploadImageComponent
  ]
})
export class ComponentsModule { }
