import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  mostSale = [
    {
      id: '1',
      name: 'Vương miện Sunshine',
      amount: '20',
    },
    {
      id: '2',
      name: 'Nhẫn Blossom Flower',
      amount: '20',
    },
    {
      id: '3',
      name: 'Vòng cổ Tiffany&Co',
      amount: '20',
    },
    {
      id: '4',
      name: 'Vương miện Sunshine',
      amount: '20',
    },
    {
      id: '5',
      name: 'Vương miện Sunshine',
      amount: '20',
    },
  ]
  constructor() {

  }

}
