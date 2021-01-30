import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  listOfData: string[] = [
    'Phụ kiện tóc',
    'Khuyên tai',
    'Mũ',
    'Kính',
    'Nhẫn',
    'Vòng tay, lắc chân',
    'Vòng cổ, khăn',
    'Phụ kiện quần áo',
    'Móng',
    'Khác'
  ];

  constructor() { }

  ngOnInit() {
  }

}
