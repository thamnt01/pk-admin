import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProductsModalComponent } from '../products-modal/products-modal.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  isDisplay = false;
  listOfData = [
    {
      code: 'FB',
      name: 'Flower Blossom',
      amount: '45',
      price: '30,000đ',
    },
    {
      code: 'NT',
      name: 'Night Star',
      amount: '45',
      price: '50,000đ',
    },
    {
      code: 'NT',
      name: 'Night Star',
      amount: '45',
      price: '50,000đ',
    },
    {
      code: 'FB',
      name: 'Flower Blossom',
      amount: '45',
      price: '30,000đ',
    },
  ];
  cloneData = [];
  constructor(private modal: NzModalService) {
    this.cloneData = this.listOfData.slice()
  }

  ngOnInit() {
  }
  createModal(value?: any): void {
    const modal = this.modal.create({
      nzTitle: 'Tạo sản phẩm',
      nzContent: ProductsModalComponent,
      nzFooter: null,
      nzClassName: 'modal-md'
    });
    modal.afterClose.subscribe(result => {
      if (result !== undefined) {
        if (value) {
          const index = this.listOfData.indexOf(value);
          this.listOfData[index] = result;
          this.listOfData = [...this.listOfData]
        } else {
          this.listOfData = [result, ...this.listOfData]
        }
      }
    })
  }
  onDispatch(event: [string, any]) {
    const [action, data] = event;
    switch (action) {
      case 'create':
        this.createModal();
        break;
      case 'delete':
        this.listOfData = this.listOfData.filter(x => x !== data);
        break;
      case 'search':
        this.listOfData = this.cloneData.filter(x => x.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
      default:
        break;
    }
  }

}
