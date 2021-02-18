import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-carousel-modal',
  templateUrl: './carousel-modal.component.html',
  styleUrls: ['./carousel-modal.component.scss']
})
export class CarouselModalComponent implements OnInit {

  constructor(private modal: NzModalRef) { }

  ngOnInit() {
  }
  handleOk() {
  }
  handleCancel() {
    this.modal.destroy();
  }
}