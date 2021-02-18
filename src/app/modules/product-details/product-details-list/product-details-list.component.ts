import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProductDetailsModalComponent } from '../product-details-modal/product-details-modal.component';

@Component({
  selector: 'app-product-details-list',
  templateUrl: './product-details-list.component.html',
  styleUrls: ['./product-details-list.component.scss']
})
export class ProductDetailsListComponent implements OnInit {
  isDisplay = false;
  listOfData = [
    {
      thumbImage: '/assets/images/logo/logo.png',
      zoomImage: '/assets/images/logo/logo.png',
      name: 'Flower Blossom',
      code: 'V1',
      type: 'Vàng',
      amount: '15',
    },
    {
      thumbImage: '/assets/images/logo/logo.png',
      zoomImage: '/assets/images/logo/logo.png',
      name: 'Ocean',
      code: 'V1',
      type: 'Vàng',
      amount: '15',

    },
    {
      thumbImage: '/assets/images/logo/logo.png',
      zoomImage: '/assets/images/logo/logo.png',
      name: 'Rosie',
      code: 'V1',
      type: 'Vàng',
      amount: '15',

    }
  ];
  cloneData = [];
  constructor(
    private modal: NzModalService,
  ) {
    this.cloneData = this.listOfData.slice();
  }

  ngOnInit() {
  }
  createModal(value?: any): void {
    const modal = this.modal.create({
      nzTitle: 'Tạo đơn hàng',
      nzContent: ProductDetailsModalComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
    });
    const instance = modal.getContentComponent();
    instance.myForm.patchValue(value);
    modal.afterClose.subscribe(result => {
      if (result === undefined) {
        return;
      }
      if (value) {
        const index = this.listOfData.indexOf(value);
        this.listOfData[index] = result;
        this.listOfData = [...this.listOfData]
      } else {
        this.listOfData = [result, ...this.listOfData]
      }
    })
  }
  onDispatch(event: [string, any]) {
    const [action, data] = event;
    switch (action) {
      case 'create':
        this.createModal()
        break;
      case 'delete':
        this.listOfData = this.listOfData.filter(x => x !== data);
        break;
      case 'edit':
        this.createModal(data)
        break;
      case 'search':
        this.listOfData = this.cloneData.filter(x => x.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
        break;
      default:
        break;
    }
  }
}
