import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  listOfData = [
    {
      code: 'FB',
      name: 'Flower Blossom',
      price: '30,000đ',
    },
    {
      code: 'NT',
      name: 'Night Star',
      price: '50,000đ',
    },
    {
      code: 'NT',
      name: 'Night Star',
      price: '50,000đ',
    },
    {
      code: 'FB',
      name: 'Flower Blossom',
      price: '30,000đ',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
