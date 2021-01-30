import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-list',
  templateUrl: './product-details-list.component.html',
  styleUrls: ['./product-details-list.component.scss']
})
export class ProductDetailsListComponent implements OnInit {
  listOfData = [
    {
      thumbImage: '/assets/images/logo/logo.png',
      zoomImage: '/assets/images/logo/logo.png',
      code: 'V1',
      type: 'Vàng',
    },
    {
      thumbImage: '/assets/images/logo/logo.png',
      zoomImage: '/assets/images/logo/logo.png',
      code: 'V1',
      type: 'Vàng',
    },
    {
      thumbImage: '/assets/images/logo/logo.png',
      zoomImage: '/assets/images/logo/logo.png',
      code: 'V1',
      type: 'Vàng',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
