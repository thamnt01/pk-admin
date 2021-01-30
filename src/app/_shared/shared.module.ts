import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZorroAntdModule } from './zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

@NgModule({
  exports: [
    ZorroAntdModule,
    FormsModule,
    ComponentsModule
  ]
})
export class SharedModule { }
