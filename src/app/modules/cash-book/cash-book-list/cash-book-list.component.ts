import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-book-list',
  templateUrl: './cash-book-list.component.html',
  styleUrls: ['./cash-book-list.component.scss']
})
export class CashBookListComponent implements OnInit {
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

}
