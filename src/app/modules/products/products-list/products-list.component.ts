import { Component, OnInit } from '@angular/core';

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
