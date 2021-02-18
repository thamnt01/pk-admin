import { Component, OnInit } from '@angular/core';
import { NzModalComponent, NzModalService } from 'ng-zorro-antd/modal';
import { UploadImageComponent } from 'src/app/_shared/components/upload-image/upload-image.component';
import { CarouselModalComponent } from '../carousel-modal/carousel-modal.component';
import { CarouselModule } from '../carousel.module';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  constructor(private modal: NzModalService) { }

  ngOnInit() {
  }
  createModal(value?: any): void {
    const modal = this.modal.create({
      nzTitle: 'Tải hình ảnh',
      nzContent: CarouselModalComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
    });
  }
  onDispatch(event: [string, any]) {
    const [action, data] = event;
    switch (action) {
      case 'create':
        this.createModal()
        break;

      default:
        break;
    }
  }
}
