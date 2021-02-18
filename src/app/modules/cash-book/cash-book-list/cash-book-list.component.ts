import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CashBookModalComponent } from '../cash-book-modal/cash-book-modal.component';

@Component({
  selector: 'app-cash-book-list',
  templateUrl: './cash-book-list.component.html',
  styleUrls: ['./cash-book-list.component.scss']
})
export class CashBookListComponent implements OnInit {
  isVisible = false;
  listOfData = [
    {
      code: 'MT123',
      date: '22/02/2013',
      title: 'Chi abcxyz',
      name: 'Hoan',
      value: '30,000đ',
      method: 'Tiền mặt',
      finalization: 'Hoàn thành',
      note: 'Chi tiền quảng cáo dịch vụ marketing Facebook'
    },
    {
      code: 'MT123',
      date: '22/02/2013',
      title: 'Chi marketing',
      name: 'Thắm',
      value: '30,000,000đ',
      method: 'Thẻ',
      finalization: 'Hoàn thành',
    }
  ];
  items = [
    {
      importDate: '26/02/2002',
      importAmount: '2345',
      importPrice: '4,500,000đ',
      children: [
        {
          name: 'Marketing',
          price: '2,000,000đ'
        },
        {
          name: 'Marketing',
          price: '2,000,000đ'
        }
      ]
    }
  ]
  cloneData = [];
  constructor(
    private modal: NzModalService,
  ) {
    this.cloneData = this.listOfData.slice()
  }

  ngOnInit() { }
  createModal(value?: any): void {
    const modal = this.modal.create({
      nzTitle: 'Tạo thẻ chi',
      nzContent: CashBookModalComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
    });
    modal.afterClose.subscribe(result => {
      if (result !== undefined) {
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
      case 'search':
        this.listOfData = this.cloneData.filter(x => x.name.toLowerCase().includes(data.toLowerCase()))
        break;
      default:
        break;
    }
  }
}
