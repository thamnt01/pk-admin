import { Component, OnInit } from '@angular/core';

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
      code: 'V1',
      type: 'Vàng',
      amount: '15',
    },
    {
      thumbImage: '/assets/images/logo/logo.png',
      zoomImage: '/assets/images/logo/logo.png',
      code: 'V1',
      type: 'Vàng',
      amount: '15',

    },
    {
      thumbImage: '/assets/images/logo/logo.png',
      zoomImage: '/assets/images/logo/logo.png',
      code: 'V1',
      type: 'Vàng',
      amount: '15',

    }
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
