import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-book-list',
  templateUrl: './cash-book-list.component.html',
  styleUrls: ['./cash-book-list.component.scss']
})
export class CashBookListComponent implements OnInit {
  isDisplay = false;
  listOfData = [
    {
      code: 'MT123',
      date: '22/02/2013',
      title: 'Chi abcxyz',
      person: 'Hoan',
      value: '30,000đ',
      method: 'Tiền mặt',
      finalization: 'Hoàn thành',
      note: 'Chi tiền quảng cáo dịch vụ marketing Facebook'
    },
    {
      code: 'MT123',
      date: '22/02/2013',
      title: 'Chi marketing',
      person: 'Thắm',
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
  constructor() { }

  ngOnInit() {

  }
  showAnotherModal(): void {
    this.isDisplay = true;
  }
  handleAnotherCancel(): void {
    console.log('Button cancel clicked!');
    this.isDisplay = false;
  }
  handleAnotherOk(): void {
    console.log('Button ok clicked!');
    this.isDisplay = false;
  }
}
